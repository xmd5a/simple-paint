export function pipe(...fn) {
  return (val) => {
    return fn.reduce((acc, fn) => fn(acc), val);
  }
}
