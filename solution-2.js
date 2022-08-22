const uniteUnique = (...args) => {
  const arrayOfArgs = args.flat();
  return [...new Set(arrayOfArgs)];
};

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
