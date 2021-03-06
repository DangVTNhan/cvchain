package types

const (
	// ModuleName defines the module name
	ModuleName = "startport"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_startport"

	// this line is used by starport scaffolding # ibc/keys/name

	// PostKey defines the post value store key
	ArchievementKey = "Archievement-value-"

	// PostCountKey defines the post count store key
	ArchievementCountKey = "Archievement-count-"
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}
