package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAchievement{}

func NewMsgCreateAchievement(creator string, title string, organization string, toAccount string) *MsgCreateAchievement {
	return &MsgCreateAchievement{
		Creator:      creator,
		Title:        title,
		Organization: organization,
		ToAccount:    toAccount,
	}
}

func (msg *MsgCreateAchievement) Route() string {
	return RouterKey
}

func (msg *MsgCreateAchievement) Type() string {
	return "CreateAchievement"
}

func (msg *MsgCreateAchievement) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAchievement) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAchievement) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
