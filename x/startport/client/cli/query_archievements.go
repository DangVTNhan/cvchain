package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/DangVTNhan/startport/x/startport/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)

var _ = strconv.Itoa(0)

func CmdArchievements() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "archievements",
		Short: "Query archievements",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryArchievementsRequest{}

			res, err := queryClient.Archievements(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
