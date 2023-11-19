// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";

contract CounterScript is Script {

    Counter counter;

    function setUp() public {
        counter = Counter(0x96c8Dd8B33FA088881e4664a7b3ff75Bfe90F3AC);
    }

    function run() public {
        counter.increment();
        console2.log("Counter: ", counter.number());
    }
}
