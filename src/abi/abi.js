export const HelloWorld = [
  {
    constant: true,
    inputs: [],
    name: "message",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "initalMessage",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newMessage",
        type: "string",
      },
    ],
    name: "update",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
