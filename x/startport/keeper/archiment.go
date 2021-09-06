package keeper

import (
	"encoding/binary"
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
	archievement.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ArchievementKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, archievement.Id)
	appendedValue := k.cdc.MustMarshalBinaryBare(&archievement)
	store.Set(byteKey, appendedValue)
	k.SetArchivementCount(ctx, count+1)
	return count
}
