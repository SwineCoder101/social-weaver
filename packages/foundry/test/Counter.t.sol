// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = Counter(0x96c8Dd8B33FA088881e4664a7b3ff75Bfe90F3AC);
        // console2.log("Counter: ", counter.number());
        // counter.setNumber(0);
    }

    function test_Increment() public {
        counter.increment();
        console2.log("Counter: ", counter.number());
        // assertEq(counter.number(), 1);
    }

    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }
}
