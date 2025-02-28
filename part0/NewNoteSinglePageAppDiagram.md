```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: The browser executes the callback function that redraws the notes
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server
```