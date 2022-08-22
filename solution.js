const uniteUnique = (...args) => {
  const uniqueNumArray = [];
  // .flat() has been used to flatten the array of arrays into one level.
  const params = [...args.flat()];

  params.forEach((number) => {
    if (!uniqueNumArray.includes(number)) {
      uniqueNumArray.push(number);
    }
  });

  return uniqueNumArray;
};

uniteUnique([1, 2, 3], [5, 2, 1]);

module.exports = { uniteUnique };
