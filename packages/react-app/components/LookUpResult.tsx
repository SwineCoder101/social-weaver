export function LookUpResult(props) {
    const lookupResult = props.lookupResult;

    return (
        <div className="flex flex-col justify-start h-full">
            {lookupResult.map((address) => (
                <div key={address} className="flex border py-2 px-4 border-black">
                    <a
                        href={`https://explorer.celo.org/address/${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h4 className="underline">
                            {`${address.slice(0, 10)}...${address.slice(-10)}`}
                        </h4>
                    </a>
                </div>
            ))}
        </div>
    );
}
