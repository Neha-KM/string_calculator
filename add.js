const assert = require("assert");

function add(numbers) {
  if (!numbers) return 0;
  let delimiter = [",", "\n"];
  const numList = numbers.split(new RegExp(delimiter.join("|"))).map(Number);

  let sum = 0;
  for (let num of numList) {
    if (num < 0) {
      negativeNumber.push(num);
    }
    sum += num;
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
  console.log("All tests passed.");
} catch (error) {
  console.error("Test failed");
}
