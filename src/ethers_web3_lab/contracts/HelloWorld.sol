pragma solidity >=0.5.8 <0.7.0;

contract HelloWorld {
    string public message;

    constructor(string memory initalMessage) public {
        message = initalMessage;
    }

    function update(string memory newMessage) public {
        message = newMessage;
    }
}
