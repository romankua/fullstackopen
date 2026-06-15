# Part 0

## Exercise 4.
### Diagram depicting the situation where the user creates a new note on the page /exampleapp/notes by writing something into the text field and clicking the Save button.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: Browser continues loading the page /exampleapp/notes...

    Note right of browser: User writes something into the text field (input name="note")
    Note right of browser: User clicks the Save button

    browser->>server: POST /exampleapp/new_note (name:text)
    activate server
    Note left of server: Server stores the record in the database
    server-->>browser: HTTP 302 /exampleapp/notes
    deactivate server

    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    Note right of browser: Browser continues loading the page /exampleapp/notes...
```

## Exercise 5.
### Diagram depicting the situation where the user goes to the single-page app version of the notes app.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET /exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser executes the JavaScript code <br/>that fetches the JSON from the server <br/>and sets up an event handler for form submit

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: [{"content":"text","date":"2026-06-14T22:42:04.882Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## Exercise 6.
### Diagram depicting the situation where the user creates a new note using the single-page version of the app.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: Browser continues loading the page /exampleapp/notes...

    Note right of browser: User writes something into the text field (input name="note")
    Note right of browser: User clicks the Save button
    Note right of browser: Browser updates notes list

    browser->>server: POST /exampleapp/new_note_spa (name:text)
    activate server
    Note right of browser: Headers:<br/>Content-type: application/json
    Note right of browser: Payload: {"content":"Text","date":"2026-06-14T20:41:28.866Z"}
    Note left of server: Server stores the record in the database
    server-->>browser: HTTP 201
    Note left of server: Payload: {"message":"note created"}
    deactivate server
```