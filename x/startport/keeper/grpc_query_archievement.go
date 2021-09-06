package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/DangVTNhan/startport/x/startport/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Archievement(goCtx context.Context, req *types.QueryArchievementRequest) (*types.QueryArchievementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var archievement types.Archievement

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	archievementStore := prefix.NewStore(store, types.KeyPrefix(types.ArchievementKey))

	k.cdc.MustUnmarshalBinaryBare(archievementStore.Get(types.KeyPrefix(types.ArchievementKey + req.Id)), &archievement)
	
	return &types.QueryArchievementResponse{Archievement: &archievement}, nil
}
