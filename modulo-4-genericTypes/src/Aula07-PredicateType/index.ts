function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function sum<T>(...args: T[]): number {
  const returnValue = args.reduce((sum, currentValue) => {
    if (isNumber(sum) && isNumber(currentValue)) {
      return sum + currentValue;
    }
    return sum;
  }, 0);

  return returnValue;
}

console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3, 'a', 1]));
console.log(sum('a', 'b', 'c', 'd'));
