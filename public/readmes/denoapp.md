# A-Gradewsdproject

## Structure

```
.
├── Checklist
├── Procfile
├── README.md
├── app.js
├── auth
│   └── userService.js
├── config
│   └── config.js
├── database
│   └── database.js
├── deps.js
├── middlewares
│   └── middlewares.js
├── routes
│   ├── apis
│   │   └── summary.js
│   ├── controllers
│   │   ├── helloController.js
│   │   ├── moodcontroller.js
│   │   └── usercontroller.js
│   └── routes.js
├── services
│   └── moodService.js
├── sql.PNG
├── sqlqueries.sql
├── tree.PNG
└── views
    ├── behaviour.ejs
    ├── behaviourevening.ejs
    ├── behaviourmorning.ejs
    ├── index.ejs
    ├── login.ejs
    ├── partials
    │   ├── footer.ejs
    │   └── header.ejs
    ├── register.ejs
    └── summary.ejs

```

## Users

 Emails are unique and password is encrypted with bcrypt
 Registration works with unique emails and email is validated but not populated
 password must match and must contain at least 4 characters
 Validation works fine but not population

## Authentication
 Works fine but you have to use a different browser as the server is not under https

## Middleware
 Works fine with catching errors, redirecting to login if not authenticated when trying to access /behavior
 If authenticated and trying to authenticate then redirects to /behavior

## Reporting
 Works as intended
 If a same date is added from previous then a message prompt appears and says the field is updated
 Adding new data prompts a message too
 Population works and validation
 /behavior /behavior/reporting/morning /behavior/reporting/evening /behavior/summary works. I didn't have the time to implement a form for summary
 Usercontroller and userservice as user for our purpose


## Summary
 Reads last 30 days and last 7 days for user and for all /behavior/summary /api/summary
 Is specific for the user

## Landing page
 describes very little and leads to most important places

## Testing
 Not implemented

## Security
 Authentication works and stores the salt of the password to SQL. Data is personal but everyone can see a global summary of everyone's moods.
 To implement: Opt out from using your data to global mood summary.

## Views
 partials header.ejs and footer.ejs work
 Home
 Insert morning mood auth required
 Insert evening mood auth required
 Your summary auth required
 Globl summary
 
 ### Authentication
 Log in
 Register
 Log out

## Deployment
```sh
git clone git@github.com:vieteri/A-Gradewsdproject.git
cd A-Gradewsdproject
deno run --allow-net --allow-read --allow-env --unstable app.js
```

## Database
ElephantSQL postgresql is used

### Tables

``` sql

CREATE TABLE morningbehaviour (
    id SERIAL PRIMARY KEY,
    dt DATE,
    sleeptime REAL,
    sleepquality INT,
    CONSTRAINT sleepquality_ck CHECK (sleepquality IN (1, 2, 3, 4, 5)),
    mood INT,
    CONSTRAINT mood_ck CHECK (mood IN (1, 2, 3, 4, 5)),
    user_id INTEGER REFERENCES users(id)
); 

CREATE TABLE eveningbehaviour (
    id SERIAL PRIMARY KEY,
    dt DATE,
    sports REAL,
    study REAL,
    eatquality INT,
    CONSTRAINT eatquality_ck CHECK (eatquality IN (1, 2, 3, 4, 5)),
    mood INT,
    CONSTRAINT mood_ck CHECK (mood IN (1, 2, 3, 4, 5)),
    user_id INTEGER REFERENCES users(id)
); 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(320) NOT NULL,
  password CHAR(60) NOT NULL
);

CREATE UNIQUE INDEX ON users((lower(email)));

```
