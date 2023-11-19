## Description
"Social Weaver" could be conceptualized as a platform or application that integrates social networking features with web3 technologies. Here's a brief description along with its potential benefits:

Description
Social Weaver is a cutting-edge platform that merges the social connectivity of traditional social media with the decentralized, secure, and transparent nature of web3 technologies. It's designed to enhance online social interactions while empowering users with control over their data and digital identities. By leveraging blockchain technology, Social Weaver offers a unique space for users to interact, collaborate, and share content in a more secure and user-centric environment.

Benefits
Decentralization: Removes reliance on central authorities, giving users more control over their content and interactions.
Data Privacy and Security: Enhanced security protocols inherent in blockchain technology protect user data from unauthorized access.
Transparency: All transactions and interactions are transparent and immutable, fostering trust among users.
Tokenization: Ability to integrate digital assets and cryptocurrencies for various interactions, rewards, and transactions within the platform.
Identity Verification: Provides robust mechanisms for identity verification while preserving user anonymity, reducing the risk of fraud and enhancing trust.
Interoperability: Facilitates seamless interactions across different blockchain networks, enhancing connectivity and collaboration.
Community Governance: Empowers users with decision-making capabilities regarding the platform's evolution, aligning with the ethos of decentralized governance.
Innovative Monetization: Offers new ways for creators to monetize their content directly from their audience without intermediaries.

## Tech Stack
Packages
- react-app - Frontend for social connect with twitter and attestation
- foundry - To deploy message senders and recievers
- test-node - To run integration tests on deployed contracts

Libraries and Tech:
Rainbow kit
Celo Social Connect
Hyperlane Warp route
Twitter oauth2

## Deployments
The following issuer address was created on alfajores testnet

etherscan: https://explorer.celo.org/alfajores/address/0x19aFfab80658330c59fE6F0579F9495CA3d1c52A
address: 0x19aFfab80658330c59fE6F0579F9495CA3d1c52A


## How To

To run social weave locally and testnet an issueur must be created using the celocli.
The issuer is used to map the social details to the end user. It creates a hash of the twitter handle and stores it on chain.

```
celocli account:register-data-encryption-key --publicKey $ISSUER_DEK_PUBLIC_KEY --from $ISSUER_ADDRESS --privateKey $ISSUER_PRIVATE_KEY
```

Ensure to 
Set the following environment variables in the .env, ensure to retrieve twitter api client id and secrets from the
developer portal. 

```
NEXTAUTH_URL=

TWITTER_API_KEY=
TWITTER_API_SECRET=

#SOCIAL CONNECT
NEXT_PUBLIC_ALFAJORES_RPC="https://alfajores-blockscout.celo-testnet.org"
```

To Build:
```
yarn install
```

To run locally:
```
yarn dev
```

Every Commit push deploys a new web app instance in vercel

