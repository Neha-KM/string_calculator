const assert = require("assert");

function add(numbers) {
  if (!numbers) return 0;
  let delimiter = [",", "\n"];

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n(.*)/);
    if (match) {
      const customDelimiter = match[1];
      numbers = match[2];
      delimiter = [customDelimiter];
    }
  }    

  const numList = numbers.split(new RegExp(delimiter.join("|"))).map(Number);
  const negativeNumber = [];

  let sum = 0;
  for (let num of numList) {
    if (num < 0) {
      negativeNumber.push(num);
    }
    sum += num;
  }
  if (negativeNumber.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumber.join(",")}`
    );
  }   

  return sum;
}

// Test Case
try {
  assert.strictEqual(add(""), 0);
  assert.strictEqual(add("1"), 1);
  assert.strictEqual(add("1,5"), 6);
  assert.strictEqual(add("1,2,3,4"), 10);
  assert.strictEqual(add("1\n2,3"), 6);
  assert.strictEqual(add("//;\n1;2"), 3);
  try {
    add("1,-2,3,-4");
  } catch (error) {
    assert.strictEqual(error.message, "negative numbers not allowed -2,-4");
  }
  console.log("All tests passed.");
} catch (error) {
  console.error("Test failed");
}
