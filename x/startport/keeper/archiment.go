package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/DangVTNhan/startport/x/startport/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) GetArchievementCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ArchievementCountKey))
	byteKey := []byte(types.ArchievementCountKey)
	bz := store.Get(byteKey)
	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetArchivementCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ArchievementCountKey))
	byteKey := []byte(types.ArchievementCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

func (k Keeper) AppendArchievement(ctx sdk.Context, archievement types.Archievement) uint64 {
	count := k.GetArchievementCount(ctx)
	// archievement.Id = count
	// store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ArchievementKey))
	// byteKey := make([]byte, 8)
	// binary.BigEndian.PutUint64(byteKey, archievement.Id)
	// appendedValue := k.cdc.MustMarshalBinaryBare(&archievement)
	// store.Set(byteKey, appendedValue)

	archievement.Id = count
	stringkey := strconv.FormatUint(count,10)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArchievementKey))
	key := types.KeyPrefix(types.ArchievementKey + stringkey)
	value := k.cdc.MustMarshalBinaryBare(&archievement)
	store.Set(key, value)



	//set counter +1
	k.SetArchivementCount(ctx, count+1)
	return count
}

func (k Keeper) GetArchievement(ctx sdk.Context, key string) types.Archievement {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArchievementKey))

	var post types.Archievement
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.ArchievementKey + key)), &post)
	return post
}

func (k Keeper) HasArchievement(ctx sdk.Context, id string) bool {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArchievementKey))
	return store.Has(types.KeyPrefix(types.ArchievementKey + id))
}

func (k Keeper) GetArchievementOwner(ctx sdk.Context, key string) string {
	return k.GetArchievement(ctx, key).Creator
}

func (k Keeper) GetAllArchievement(ctx sdk.Context) (msgs []types.Archievement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArchievementKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.ArchievementKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.Archievement
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}


