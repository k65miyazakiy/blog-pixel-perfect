function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// 使用例
const numbers = [5, 7, 10];
numbers.forEach(num => {
  console.log(`${num}! = ${calculateFactorial(num)}`);
});

// より効率的な反復版
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
