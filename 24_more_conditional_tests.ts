// test no 1
console.log("Equality test with strings:", "Apple"  === "Apple");
// test no 2
console.log("Inequality test with strings:", ( "Apple" as string)  != "orange");
// test no 3
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
// test no 4
console.log("Equality test with numbers: ", 26 === 26);
// test no 5
console.log("Inequality test with numbers: ", (26 as number) != 36);
// test no 6
console.log("Greater than test: " , 10 > 5);
// test no 7
console.log("Less than test: " , 5 < 10);
// test no 8
console.log("Greater than and equal to test: ", 10 >= 10);
// test no 9
console.log("less than or equal to test:", 5 <= 10);
// test no 10
console.log("And operator test: ", 5===5 && 10 > 5);
// test no 11
console.log("or operator test: ", 5===5 || false);
// test no 12
const fruits :string[] = ['Mango','Banana','peach'];
console.log('Test "Mango" in the array: ', fruits.includes("Mango"));
// test no 13
console.log('Testing "Apple"is not in array:' , !fruits.includes('Apple'));
