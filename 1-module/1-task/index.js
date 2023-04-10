function factorial(n) {
  let sum = 1;
  if (n === 1 || n === 0) {
    return 1;
  };

  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}
