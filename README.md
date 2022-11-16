# Boilerplate: React with Webpack
This is a starter project that uses webpack to transpile and bundle ES6 React code. 

## Setup

### Installation
To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

---

## Running the database 

Creating a migration 
```cd
npm run knex migrate:make <table-name>
```

Creating a seed
```cd
npm run knex seed:make <table-name>
```

Initialising a table
```cd
npm run knex migrate:latest
```

Running Seeds
```cd
npm run knex seed:run
```

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)
# Async Redux

User stories for practice with async actions in Redux. We'll be using Reddit, a site where users share posts in a forum, called a subreddit.

## Setup

### 0. Cloning and installation
- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

    ```sh
    cd async-redux-stories
    npm i
    npm run dev
    ```
  </details>

---

## Requirements

### 1. Displaying info from Reddit
- [x] As a user, I want to click a button and retrieve a list of post titles from the New Zealand subreddit so that I can read about what's going on in New Zealand
  <details style="padding-left: 2em">
    <summary>How does it work?</summary>
    
  This one is done for you! Take a look at it anyway to see how it works. In particular, identify:
  
    - the **action** and **action creator**. Take a good look at `fetchPosts` in particular. What does it return?
    - the **reducer**
    - the **components** involved
  
  The DevTools setup is a little different when you're using middleware: check out the [docs](https://github.com/zalmoxisus/redux-devtools-extension) for more details

  </details>

- [ ] As a user, I want to be able to enter a new subreddit to view the titles from so that I can see what else is happening on Reddit
  <details style="padding-left: 2em">
    <summary>More about specifying the subreddit</summary>
 
    Initially, the subreddit is hardcoded into the `onClick` handler of the `<LoadSubreddit>` component. If you use the component's state to keep track of the subreddit (using `onChange`), you'll be able to add it to the action you dispatch.
  </details>

- [ ] As a user, I want to view not just the title, but also a date and time and a short summary of each post so that I can preview the content
  <details style="padding-left: 2em">
    <summary>More about post details</summary>
    
    Reddit returns us the time a post was created in seconds, if you find your date is far in the past try multiplying it by 1000 to use milliseconds instead
  </details>

### 2. Adding another API
- [ ] As a user, I want to incorporate another API and I don't care which one! So that I can, y'know, have another API to look at
  <details style="padding-left: 2em">
    <summary>More about additional APIs</summary>
    

    Take the opportunity to practice the process by retrieving data from another API using async actions. Use the same overall structure, returning a thunk from your action creator.
  </details>

----

## Stretch

<details>
  <summary>More about stretch challenges</summary>

  - As a user, I want to be able to sort the list of posts by title and post date so that I can organise my results
  - As a user, I want to be able to sort in both ascending and descending order so that I can see the start and end of the list
  - As a user, I want to filter the list of posts based on a search that I type so that I can find the post I'm looking for
</details>

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=async-redux-stories)
