import {
    ACCOUNTS_CONTRACT,
    ACCOUNTS_PROXY_ADDRESS,
    ALFAJORES_CUSD_ADDRESS,
    FA_CONTRACT,
    FA_PROXY_ADDRESS,
    ODIS_PAYMENTS_CONTRACT,
    ODIS_PAYMENTS_PROXY_ADDRESS,
    STABLE_TOKEN_CONTRACT,
    ALFAJORES_RPC,
} from "../utils/constants";
import { OdisUtils } from "@celo/identity";
import {
    AuthenticationMethod,
    OdisContextName,
} from "@celo/identity/lib/odis/query";
import { ethers, Wallet } from "ethers";
import React, { useState, useEffect, useReducer } from "react";
import { WebBlsBlindingClient } from "@/utils/WebBlindingClient";

const ISSUER_PRIVATE_KEY =
    "0xa2217b7429fc3bb0fa329559dc9f2610153333ac8041dcd59b2dda3faa885a14";
const DEK_PUBLIC_KEY =
    "0x16BD124f47b31FA2a338874929beEcdE23505662";
const DEK_PRIVATE_KEY =
    "0x613dd27581a6d3bed4ed63179e7048fc349d1c241a5eea09f606250879d3ad16";

const INITIAL_STATE = {
    issuer: undefined,
    serviceContext: undefined,
    authSigner: undefined,
    federatedAttestationsContract: undefined,
    odisPaymentsContract: undefined,
    accountsContract: undefined,
    stableTokenContract: undefined,
};

export const OdisContext = React.createContext(INITIAL_STATE);
let ONE_CENT_CUSD = ethers.utils.parseEther("0.01");

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ISSUER":
            return { ...state, issuer: action.payload };
        case "FEDERATED_ATTESTATIONS":
            return { ...state, federatedAttestations: action.payload };
        case "ODIS_PAYMENTS":
            return { ...state, odisPayment: action.payload };
        case "STATE":
            return action.payload;
        default:
            return state;
    }
};

function OdisProvider({ children }) {
    const [isInitialized, setIsInitialized] = useState(false);
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        const init = async () => {
            let provider = new ethers.providers.JsonRpcProvider(ALFAJORES_RPC);
            let issuer = new Wallet(ISSUER_PRIVATE_KEY, provider);
            // let issuer = { address: '0x19aFfab80658330c59fE6F0579F9495CA3d1c52A'}
            let serviceContext = OdisUtils.Query.getServiceContext(
                OdisContextName.ALFAJORES
            );

            const blindingClient = new WebBlsBlindingClient(
                serviceContext.odisPubKey
            );
            await blindingClient.init();

            let authSigner = {
                authenticationMethod: AuthenticationMethod.ENCRYPTION_KEY,
                rawKey: DEK_PRIVATE_KEY,
            };

            let accountsContract = new ethers.Contract(
                ACCOUNTS_PROXY_ADDRESS,
                ACCOUNTS_CONTRACT.abi,
                issuer
            );
            let federatedAttestationsContract = new ethers.Contract(
                FA_PROXY_ADDRESS,
                FA_CONTRACT.abi,
                issuer
            );
            let odisPaymentsContract = new ethers.Contract(
                ODIS_PAYMENTS_PROXY_ADDRESS,
                ODIS_PAYMENTS_CONTRACT.abi,
                issuer
            );
            let stableTokenContract = new ethers.Contract(
                ALFAJORES_CUSD_ADDRESS,
                STABLE_TOKEN_CONTRACT.abi,
                issuer
            );

            dispatch({
                type: "STATE",
                payload: {
                    issuer,
                    serviceContext,
                    blindingClient,
                    authSigner,
                    accountsContract,
                    federatedAttestationsContract,
                    odisPaymentsContract,
                    stableTokenContract,
                },
            });
        };
        init();
    }, []);

    // async function getAccountsFromPhoneNumber(twitterHandle: string) {
    //     const identifier = await getIdentifier(twitterHandle);
    //     const attestations =
    //         await state.federatedAttestations.lookupAttestations(identifier, [
    //             state.issuer.address,
    //         ]);
    //     return attestations.accounts;
    // }

    // async function checkIfIdentifierIsRegisteredAlreadyUnderIssuer(
    //     phoneNumber
    // ) {
    //     const accounts = await getAccountsFromPhoneNumber(phoneNumber);
    //     return accounts.length;
    // }

    // async function deregisterIdentifier(phoneNumber, address) {
    //     const isRegistered =
    //         await checkIfIdentifierIsRegisteredAlreadyUnderIssuer(phoneNumber);
    //     if (isRegistered) {
    //         const identifier = await getIdentifier(phoneNumber);
    //         const revokeReceipt = await state.federatedAttestations
    //             .revokeAttestation(identifier, state.issuer.address, address)
    //             .sendAndWaitForReceipt();
    //         console.log(
    //             `${await explorerLink()}tx/${revokeReceipt.transactionHash}`
    //         );
    //     }
    // }

    // async function sendToPhoneNumber(from, to, value) {
    //     // Right now sending to the latest attested address
    //     const tx = await connector.sendTransaction({
    //         from,
    //         to,
    //         value,
    //     });
    //     console.log(tx);
    // }

    return (
        <OdisContext.Provider
            value={{
                issuer: state.issuer,
                serviceContext: state.serviceContext,
                authSigner: state.authSigner,
                odisPaymentsContract: state.odisPaymentsContract,
                stableTokenContract: state.stableTokenContract,
                federatedAttestationsContract:
                    state.federatedAttestationsContract,
            }}
        >
            {children}
        </OdisContext.Provider>
    );
}
export default OdisProvider;
