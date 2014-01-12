cards = [
  {
    "question": "Name the JavaScript primitive types.",
    "answer": "Boolean, Number, String."
  },
  {
    "question": "What can you tell me about the JavaScript 'this' keyword?",
    "answer": "Generally it refers to the object which owns the method in which the this keyword is referenced. However, it depends on how a function is called. If called from a global scope then 'this' refers to the window object. If referenced within a constructor function than 'this' refers to the newly created object. When referenced within an event handler then the 'this' keyword refers to the object which called the event."
  },
  {
    "question": "Name the JavaScript special types.",
    "answer": "null and unassigned."
  },
  {
    "question": "Tell me about numbers in JavaScript.",
    "answer": "Number is a 64-bit floating point value, similar to Java's double. There is no integer type."
  },
  {
    "question": "How are undefined and null different?",
    "answer": "Variables which have not been initialized are undefined, while variables which have an empty value are set to null."
  },
  {
    "question": "Tell me about strings in JavaScript.",
    "answer": "String is a sequence of zero or more Unicode characters. There is no separate character type. A character is represented as a string length 1"
  },
  {
    "question": "People say that almost everything in JavaScript is an object. What things are not objects?",
    "answer": "Primitive types such as boolean, number and string. Also, special types as null and unassigned."
  },
  {
    "question": "How can errors be handled in JavaScript?",
    "answer": "Using try/catch/finally blocks."
  },
  {
    "question": "What is meant by the statement: JavaScript is loosely typed?",
    "answer": "It means that we don't use type names in declarations. Types are inferred by JavaScript. Also, over the course of a run-time a variable's type may change."
  },
  {
    "question": "What are some of the differences between subscript notation and dot notation?",
    "answer": "Subscript notation allows the use of keys with spaces, dot notation does not. Because of an error in JS, reserved words can be used in subscripts but not with dot notation."
  },
  {
    "question": "What are the nine native object constructors in JavaScript?",
    "answer": "Number, String, Boolean, Object, Array, Function, Date, Regex, Error."
  },
  {
    "question": "Why can you 'new Date' but can't 'new Math'?",
    "answer": "Date has a built-in object constructor but Math is just an object namespace setup by JavaScript to house math functions."
  },
  {
    "question": "How are global variables created?",
    "answer": "Global variables are created when you don't use the var keyword."
  }
];