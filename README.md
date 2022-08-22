# Algorithm - Sorted Union

This challenge requires a function to be created, the function takes into two or more arrays and returns a new array with only unique values. The values must also be in the order of the original arrays provided.

Examples:

- uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
- returns: [1, 3, 2, 5, 4]

I have also created test cases using jest, as following TDD helps process the logic and ensure that the implementation continues to work when refactored/changed. This also helps by breaking down the challenge into the required acceptance criteria.

## Documentation

Below is a list of methods I used with links to the relevant MDN page. Some of these were known prior and some were learned through documentation searching during the challenge.

- [The Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## Acknowledgments

This algorithm challenge was provided by [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures). Although they do provide some happy path test cases, I wanted to keep practising using Jest.

## Dev Dependencies

- Jest was used for creating test cases

## Installation

To see the code and tests in action follow the below terminal commands:

Ensure that you have [Git](https://git-scm.com/) installed. If not you can just download the files to your computer.

```
git clone (name of repo url/ssh here)
```

```
cd (project-name here)
```

```
npm install
```

```
npm test
```
