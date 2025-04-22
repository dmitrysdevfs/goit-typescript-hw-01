function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const a = { name: 'Dima' };
const b = { age: 45 };

const result = merge(a, b);

console.log(result);
console.log(a);
