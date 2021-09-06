package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/DangVTNhan/startport/x/startport/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Archievements(c context.Context, req *types.QueryArchievementsRequest) (*types.QueryArchievementsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	var archievements []*types.Archievement
	ctx := sdk.UnwrapSDKContext(c)
	store := ctx.KVStore(k.storeKey)
	archievementStore := prefix.NewStore(store, types.KeyPrefix(types.ArchievementKey))

	pageRes, err := query.Paginate(archievementStore, req.Pagination, func(key []byte, value []byte) error {
		var archievement types.Archievement
		if err := k.cdc.UnmarshalBinaryBare(value, &archievement); err != nil {
			return err
		}

		archievements = append(archievements, &archievement)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryArchievementsResponse{
		Archievement: archievements,
		Pagination: pageRes,
	}, nil
}
