
export function Issuer (props){

    const issuer = props.issuer;

    return (issuer && (
        <div className="border flex py-2 justify-center border-black">
            <h3>
                Issuer Address:{" "}
                <a
                    href={`https://explorer.celo.org/alfajores/address/${issuer.address}`}
                    className="underline"
                    target="_blank"
                >
                    {issuer.address}
                </a>
            </h3>
        </div>
    ))
}