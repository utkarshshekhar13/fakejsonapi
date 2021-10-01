# fakejsonapi
- A Fake Json Api for dev testing. Especially for frontend developers who wants to get their hands dirty on Networking.
- Install MongoDb Community Edition and give the database url inside database.js.
- User Role Based Authentication and their respective CRUD is on the way....

- api - quotes
- POST      :- localhost:3000/api/createQuoteAuthor
- payload -  application/json {
    "quote":"This is a test quote two",
    "author":"Random two"
}
- GET       :- localhost:3000/api/getAllQuotesAuthors
- PUT       :- localhost:3000/api/updateQuoteAuthorById
- payload -application/json {
    "id": "61557a3c433c6c105116855e",
    "quote":"This is a updated test quote ......",
    "author":"Random One"
}
- DELETE    :- localhost:3000/api/deleteQuoteAuthorById
- payload -application/json {
    "id": "61557a3c433c6c105116855e"
}
