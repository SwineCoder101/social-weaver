#!/bin/bash

source .env

forge verify-contract \
    --chain-id $CHAINID \
    --num-of-optimizations 1000000 \
    --watch \
    --etherscan-api-key $ETHERSCAN_API_KEY \
    0x96c8Dd8B33FA088881e4664a7b3ff75Bfe90F3AC \
    src/Counter.sol:Counter
    
    # --constructor-args $(cast abi-encode "constructor(string,string,uint256,uint256)" "ForgeUSD" "FUSD" 18 1000000000000000000000) \
    # --compiler-version ^0.8.13 \