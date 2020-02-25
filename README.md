# interview-michael-trew

This was a code project that I did for an coding interview in 2019. The scope is relatively small for this project.

# Front-End 
For the front-end I used Reach JS, and local state for state management. I styled the entire app myself using node-sass. I made my API calls using axios.

To run, install your dependencies and then you can run yarn start once inside the smart-kitchen folder and run the app. By default, this will use localhost: 3000

# Back-End
For the back-end I used an express server and sqlite3 for my development database, and plan on using Postgres for my production database. I used Knex JS to help build the SQL queries. 

For authentication, I was able to implement middleware using json web tokens, but ultimately for production, I would implement some sort of oAuth implementation such as Google Firebase.

To run the server, install dependencies in the the server folder and the front-end is currently wired to use localhost:5000
