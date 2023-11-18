export function LinkComponent(props) {
    const { isConnected, status, session, address, registerIdentifier } = props;

    if (isConnected && status === "authenticated") {
        return (
            <button
                onClick={() => registerIdentifier(session.username.toLowerCase(), address)}
                className="border-2 border-black px-4 py-2"
            >
                Link Wallet
            </button>
        );
    } else {
        return null; // or return some fallback UI
    }
}
