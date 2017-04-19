# cs132_chatroom

I'd like to meet with a TA, so we can laugh at how f***ed I am... then, if possible, try to salvage any possible points in the assignment portion of the class.

The only reason I even bother still asking for some sort of help is because I strongly believe that I've put in a great deal of time working on these assignments, alongside learning and implementing the technologies (i.e. React + it's SEVERAL tools such as Redux) as well as the reasoning for their best-practice methods. Did I mention I'm making an app (w/ awesome group members) for the final project? If you look at my git commit history, you'll see many revisions of essentially the same function for reasons of making a better app, and not necessarily for a cs132_[hw]_handin.

- [x] Run an Express web server listening on port 8080.
- [x] Homepage ("/") should be an interface that allows user(s) to enter a new chatroom, characterized by an ID generated by the server (e.g., ABC123).
- [x] Each generated chatroom should be specified by a unique 6-character alphanumeric identifier.
- [x] Each chatroom should be stored in a database table with its unique identifier.
- [x] Upon entering a generated chatroom ("/ABC123"), a user should be prompted to choose a nickname/username.
- [x] Any previous messages, along with the nickname of the sender, should be displayed to an entering user.
- [x] Each room should have an interface to send messages to all other users in that room.
- [x] Nickname is displayed with each message sent and displayed in the chat.
- [x] List of messages refreshes periodically (at least every 5 seconds).
- [x] All node modules and dependencies are listed in the package.json file.
- [x] SQL queries that are protected from SQL injections.
- [ ] Due Wed Mar 15 2017 @ 11:59pm

How to run:
  1. 'npm run dev-server' to run server
  2. 'npm run dev-client' to run client
  3. open 'http://localhost:3000' to run client **port 8080 is the express server*

### Database Schema:
    Chatroom {
      id: text,              // generated alphanumeric id
      userCount: integer     // to be implemented in realtime
    }

    Message {
      id: integer,
      sender: text,
      room_id: text,
      body: text,
      created_at: datetime
    }

### DIRECTORY STRUCTURE:
    chatroom_concentrator/
    ├── index.html
    └── apiBackend/
        ├── controllers/ -------------------- app controllers
        └── db/
            ├── database.js ----------------- db config and pool creation
            ├── seed.js --------------------- seed file
            └── models/ --------------------- db helper models to assist as ORM
        ├── models/
        └── index.js
    └── client/
        ├── index.js
        └── components/
            └── { ComponentName }/ ----------- React Components
                ├── actions.js --------------- Redux actions
                ├── connectedComponents/ ----- Redux-connected React Components
                └── reducers.js -------------- Redux reducers
        └── state/
            ├── { ComponentName }/
                ├── actions.js --------------- Redux actions(or action creators)
                ├── constants.js ------------- Redux constants (or actions)
                ├── reducer.js --------------- Redux reducer
                └── index.js
            ├── actionsIndex.js
            └── rootReducer.js
        └── public/ -------------------------- Webpack bundle directory
            ├── bundle.js -------------------- Webpack bundle
            └── css/
