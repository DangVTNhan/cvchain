package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/DangVTNhan/startport/x/startport/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdCreateAchievement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-achievement [title] [organization] [toAccount]",
		Short: "Broadcast message createAchievement",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTitle := string(args[0])
			argsOrganization := string(args[1])
			argsToAccount := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAchievement(clientCtx.GetFromAddress().String(), string(argsTitle), string(argsOrganization), string(argsToAccount))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
