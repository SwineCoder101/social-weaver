#!/bin/bash

source .env

forge create --rpc-url $RPC_URL --chain $CHAINID \
    --private-key $DEPLOYER_PRIVATE_KEY \
    --etherscan-api-key $ETHERSCAN_API_KEY \
	src/Counter.sol:Counter \
	--verify \
    # --constructor-args $DEPLOYER_ADDRESS \
    # --private-key $DEPLOYER_PRIVATE_KEY \ß
