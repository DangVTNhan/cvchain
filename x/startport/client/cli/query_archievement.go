package cli

import (
	"github.com/spf13/cobra"
	"context"
	"github.com/DangVTNhan/startport/x/startport/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
)


func CmdArchievement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-archievement [id]",
		Short: "shows a archievement",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryArchievementRequest{
				Id: args[0],
			}

			
			res, err := queryClient.Archievement(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res) 
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}