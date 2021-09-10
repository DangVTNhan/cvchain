package keeper

import (
	"context"

	"github.com/DangVTNhan/startport/x/startport/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateAchievement(goCtx context.Context, msg *types.MsgCreateAchievement) (*types.MsgCreateAchievementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	var archievement = types.Archievement{
		Creator:      msg.GetCreator(),
		Title:        msg.GetTitle(),
		Organization: msg.GetOrganization(),
		ToAccount:    msg.GetToAccount(),
	}

	id := k.AppendArchievement(ctx, archievement)

	return &types.MsgCreateAchievementResponse{Id: id}, nil
}
