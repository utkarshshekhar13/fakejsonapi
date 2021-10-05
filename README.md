# fakejsonapi
- A Fake Json Api for dev testing. Especially for frontend developers who wants to get their hands dirty on Networking.
- Install Nodejs 
- Install MongoDb Community Edition and give the database url inside database.js.
- Clone the project and then get into the project directory and type npm install
- After completion start the server by npx nodemon index.js || node index.js
- Whenever there is a server crash re run the above code in the terminal
- User Role Based Authentication and their respective CRUD is on the way....

- api - quotes
- POST      :- localhost:3000/api/createQuoteAuthor
- payload -  application/json {
    "quote":"This is a test quote",
    "author":"Random"
}
- GET       :- localhost:3000/api/getAllQuotesAuthors
- PUT       :- localhost:3000/api/updateQuoteAuthorById
- payload -application/json {
    "_id": "61557a3c433c6c105116855e",
    "quote":"This is a updated test quote one",
    "author":"Random One"
}
- DELETE    :- localhost:3000/api/deleteQuoteAuthorById
- payload -application/json {
    "_id": "61557a3c433c6c105116855e"
}
