flashcardDeck = {
  title: "JS",
  catchPhrase: "Test how well you know JavaScript",
  cards: [
    {
      "question": "### Who wrote this book?|![book image](images/javascript-the-good-parts.png \"JavaScript book\")",
      "answer": "Douglas Crockford. Mr. Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language, for having popularized the data format JSON (JavaScript Object Notation), and for developing various JavaScript related tools such as JSLint and JSMin. He is currently a senior JavaScript architect at PayPal, and is also a writer and speaker on JavaScript, JSON, and related web technologies such as the Yahoo! User Interface Library (YUI).||ref: [Wikipedia](http://en.wikipedia.org/wiki/Douglas_Crockford)"
    },
    {
      "question": "### Name the JavaScript primitive types.",
      "answer": "`Boolean`, `Number`, `String`."
    },
    {
      "question": "### What can you tell me about the JavaScript `this` keyword?",
      "answer": "Generally it refers to the object which owns the method in which the `this` keyword is referenced.||However, it depends on how a function is called. If called from a global scope then `this` refers to the window object. If referenced within a constructor function than `this` refers to the newly created object. When referenced within an event handler then the `this` keyword refers to the object which called the event."
    },
    {
      "question": "### Name the JavaScript special types.",
      "answer": "`null` and `unassigned`."
    },
    {
      "question": "### Tell me about numbers in JavaScript.",
      "answer": "Number is a 64-bit floating point value, similar to Java's double. There is no integer type."
    },
    {
      "question": "### How are `undefined` and `null` different?",
      "answer": "Variables which have not been initialized are `undefined`, while variables which have an empty value are set to `null`."
    },
    {
      "question": "### Tell me about strings in JavaScript.",
      "answer": "`String` is a sequence of zero or more Unicode characters. There is no separate character type. A character is represented as a string length 1."
    },
    {
      "question": "### People say that almost everything in JavaScript is an object. What things are not objects?",
      "answer": "Primitive types such as boolean, number and string. Also, special types as `null` and `unassigned`."
    },
    {
      "question": "### How can errors be handled in JavaScript?",
      "answer": "Using `try`/`catch`/`finally` blocks."
    },
    {
      "question": "### What is meant by the statement: JavaScript is loosely typed?",
      "answer": "It means that we don't use type names in declarations. Types are inferred by JavaScript. Also, over the course of a run-time a variable's type may change."
    },
    {
      "question": "### What are some of the differences between subscript notation and dot notation?",
      "answer": "Subscript notation allows the use of keys with spaces, dot notation does not. Because of an error in JS, reserved words can be used in subscripts but not with dot notation."
    },
    {
      "question": "### Who is this guy?|![person](images/BrendanEich.jpg \"JavaScript personality\")",
      "answer": "Brendan Eich, the creator of JavaScript."
    },
    {
      "question": "### Which of these best describes the `void` keyword?|1. A method|2. A function|3. An operator|4. A statement",
      "answer": "Number #3, An operator"
    },
    {
      "question": "### How do you find the largest number of 6 and 8?|1. Math.max(6,8)|2. top(6,8)|3. ceil(6,8)|4. Math.ceil(6,8)",
      "answer": "Number #1, Math.max(6,8)"
    },
    {
      "question": "### What are the nine native object constructors in JavaScript?",
      "answer": "`Number`, `String`, `Boolean`, `Object`, `Array`, `Function`, `Date`, `Regex`, `Error`."
    },
    {
      "question": "### Why can you `new Date` but can't `new Math`?",
      "answer": "`Date` has a built-in object constructor but `Math` is just an object namespace setup by JavaScript to house math functions."
    },
    {
      "question": "### How are global variables created?",
      "answer": "Global variables are created when you don't use the `var` keyword."
    },
    {
      "question": "### How does JavaScript implement inheritance?",
      "answer": "JavaScript implements inheritance by allowing you to associate a prototypical object with any constructor function.||[Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FDetails_of_the_Object_Model)"
    },
    {
      "question": "### How can you use primitive types to create objects?",
      "answer": "Using the `new` operator:||    var numObject = new Number(10);|    console.log(typeOf numObject);|    > \"object\""
    },
    {
      "question": "### What was JavaScript called before it was first released?",
      "answer": "JavaScript was called Mocha before it was officially released as LiveScript. The language was later renamed to JavaScript when it was released as part of Netscape version 2.0B3 in September of 1995.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### What was the first use of server-side JavaScript?",
      "answer": "Netscape introduced an implementation of the language for server-side scripting (SSJS) with Netscape Enterprise Server, first released in December, 1994 (soon after releasing JavaScript for browsers). Since the mid-2000s, there has been a proliferation of server-side JavaScript implementations.||Node.js is one recent notable example of server-side JavaScript being used in real-world applications.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### Originally considered a language for web authors and \"amateurs\" JavaScript was taken more seriously during what pivotal event?",
      "answer": "The advent of Ajax returned JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive frameworks and libraries, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers, as seen by the proliferation of server-side JavaScript platforms.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### Who owns the 'JavaScript' trademark?",
      "answer": "Today, \"JavaScript\" is a trademark of Oracle Corporation. It is used under license for technology invented and implemented by Netscape Communications and current entities such as the Mozilla Foundation.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### How does scoping in JavaScript differ from other programming languages?",
      "answer": "JavaScript has function scoping (although, block scoping using the `let` keyword was added in JavaScript 1.7). Most other programming languages support block scoping.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### Describe JavaScript objects.",
      "answer": "JavaScript objects are associative arrays, augmented with prototypes. Object property names are string keys. They support two equivalent syntaxes: dot notation (obj.x = 10) and bracket notation (obj['x'] = 10).||Properties and their values can be added, changed, or deleted at run-time.||Most properties of an object (and those on its prototype inheritance chain) can be enumerated using a for...in loop.||JavaScript has a small number of built-in objects such as Function and Date.||ref: [Wikipedia](http://en.wikipedia.org/wiki/JavaScript)"
    },
    {
      "question": "### Which of the following is not a JavaScript engine:||1. SpiderMonkey|2. V8|3. Rhino|4. Harmony",
      "answer": "Number 4. Harmony."
    },
    {
      "question": "### Using a variable without prefixing it with the `var` keyword causes which of the following:||1. Creates a local variable|2. Generates and error.|3. Creates and array|4. Creates a global variable.",
      "answer": "Number 4. Creates a global variable."
    },
    {
      "question": "### What is the recommended way to create an array?",
      "answer": "You can create an array using the `Array` constructor or the array literial notation []. Literals are preferred to the Array constructor. They are shorter, have a clearer syntax, and increase code readability:||    [1, 2, 3]; // Result: [1, 2, 3]|The behavior of `Array` can lead to unexpected results.||    new Array(1, 2, 3); // Result: [1, 2, 3]|    [3]; // Result: [3]|    new Array(3); // Result: []|    new Array('3') // Result: ['3']||In cases when there is only one argument passed to the `Array` constructor and when that argument is a `Number`, the constructor will return a new *sparse* array with the `length` property set to the value of the argument. It should be noted that **only** the `length` property of the new array will be set this way; the actual indexes of the array will not be initialized.||    var arr = new Array(3);|    arr[1]; // undefined|    1 in arr; // false, the index was not set.||ref: [JavaScript Garden](https://github.com/BonsaiDen/JavaScript-Garden)"
    },
    {
      "question": "### What can you tell me about the use of the `for in` loop construct?",
      "answer": "Although arrays in JavaScript are objects, there are no good reasons to use the `for in` loop. In fact, there are a number of good reasons **against** the use of `for in` on arrays.||> **Note:** JavaScript arrays are **not** *associative arrays*. JavaScript only|> has [objects](#object.general) for mapping keys to values. And while associative|> arrays **preserve** order, objects **do not**.||Because the `for in` loop enumerates all the properties that are on the prototype chain and because the only way to exclude those properties is to use `hasOwnProperty`, it is already up to **twenty times** slower than a normal `for` loop.||ref: [JavaScript Garden](https://github.com/BonsaiDen/JavaScript-Garden)"
    },
    {
      "question": "### What's the best way to iterate over arrays?",
      "answer": "In order to achieve the best performance when iterating over arrays, it is best to use the classic `for` loop.||    var list = [1, 2, 3, 4, 5, ...... 100000000];|    for(var i = 0, l = list.length; i < l; i++) {|        console.log(list[i]);|    }||There is one extra catch in the above example, which is the caching of the length of the array via `l = list.length`.||Although the `length` property is defined on the array itself, there is still an overhead for doing the lookup on each iteration of the loop. And while recent JavaScript engines **may** apply optimization in this case, there is no way of telling whether the code will run on one of these newer engines or not.||In fact, leaving out the caching may result in the loop being only **half as fast** as with the cached length.||ref: [JavaScript Garden](https://github.com/BonsaiDen/JavaScript-Garden)"
    },
    {
      "question": "### What happens when you set the value of an array's length property?",
      "answer": "While the *getter* of the `length` property simply returns the number of elements that are contained in the array, the *setter* can be used to **truncate** the array.||    var foo = [1, 2, 3, 4, 5, 6];|    foo.length = 3;|    foo; // [1, 2, 3]||    foo.length = 6;|    foo.push(4);|    foo; // [1, 2, 3, undefined, undefined, undefined, 4]||Assigning a smaller length truncates the array. Increasing it creates a sparse array.||ref: [JavaScript Garden](https://github.com/BonsaiDen/JavaScript-Garden)"
    }
  ]
};