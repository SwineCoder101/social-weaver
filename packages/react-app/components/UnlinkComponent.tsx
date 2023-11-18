

export function UnlinkComponent (props){
    const isConnected = props.isConnected;
    const status = props.status;
    const session = props.session;
    const address = props.address;
    const revokeIdentifier = props.revokeIdentifier;

    return (
    <>
    {isConnected && status === "authenticated" && (
        <button
            onClick={() =>
                revokeIdentifier(
                    session.username.toLowerCase(),
                    address
                )
            }
            className="border-2 border-black px-4 py-2"
        >
            Unlink Wallet
        </button>
    )}
    </>);
}