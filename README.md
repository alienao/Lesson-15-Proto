# proto

* Try all the methods from lecture and run it with pythontutor

## Task

* Write Pagination object that will get an array and pageSize, then willreturn the following.

    * prevPage
    * nextPage
    * firstPage
    * lastPage
    * goToPage
    * getPageItems

```
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
```


## Airplane TASK:
* Write an Airplane object that initializes name.

* Give airplanes the ability to .takeOff() and .land():
    * If a plane takes off, its isFlying property is set to true.
    * If a plane lands, its isFlying property is set to false.

## Future lecture materials

* [All chapters](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/this%20%26%20object%20prototypes)
* [Prototype methods](https://javascript.info/prototype-methods)
* [Native Prototypes](https://javascript.info/native-prototypes)

### Literature

[Inheritance and Prototype chain Prototype inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)