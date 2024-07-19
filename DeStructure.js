const array = [
    8,
    "5",
    2,
    "Hello World",
    {
        a: 2,
        b: 5,
    },
    false,
    {
        arr: [true, 1, NaN, new Array(2, 33)],
        test: null,
        obj: { d: "Moha", last: [2, false, undefined] },
    },
];

// Extracting 33
const [, , , , , , { arr: [, , , [, thirtyThree]] }] = array;

// Extracting "Moha"
const [, , , , , , { obj: { d: moha } }] = array;

console.log(thirtyThree); // Output: 33
console.log(moha); // Output: "Moha"
