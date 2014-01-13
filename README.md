# JSFlashCards

JSFlashCards is a simple HTML5 app which allows you to test your JavaScript knowledge.

To view a demo point your mobile web browser to:
http://cjus.me/jsflashcards

JSFlashCards uses John Fraser's showdown, a JavaScript port of Markdown. Flash cards exists in a JSON file containing markdown text for both questions and answers. This makes it possible to easily author HTML based flash cards.

## Flashcard format

A flashcard consist of an object entry in the js/cards.js file.

    {
        "question": "### How can you use primitive types to create objects?",
        "answer": "Using the `new` operator:||    var numObject = new Number(10);|    console.log(typeOf numObject);|    > \"object\""
    },

Each flashcard object consists of a question and answer key followed by a single line string containing markdown text.
In order to keep the file neat, markdown is formatted on a single line. The pipe (|) separator is later converted into a newline to render multi-line entries.

The following conventions are observed:

* all questions being with a triple hash (###) to set a consistent font size
* all JS keywords are surrounded with tick marks (`) for readability

## Creating other flashcard apps

In order to support the creation of other flashcard apps, the js/cards.js file contains the application title and catch phrase to display on the start screen.
Forking this code and replacing the js/cards.js file should go a long way towards repurposing this app.
