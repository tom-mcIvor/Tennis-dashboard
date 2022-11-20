# Tom's personal project

This app lets the user write a tennis players name into a form a fetches the player's photo for the user.

App consumes from the tennis data api: https://rapidapi.com/search/tennis

To see the app in action go to https://dokku.toms-personal.project.devacademy.nz

## Usage
### Start server locally
To begin, you will need git & nodejs installed. You will also need to get an API key from https://rapidapi.com/, which might require creating an account. Please feel free to get in touch if you are having trouble accessing an API key.

```bash
# Clone repo
git clone https://github.com/tom-mcivor/tom-project-3.git
cd tom-project-3
# Create .env file in main directory
touch .env
# Go to api and get an api key then copy the api key into the .env file
echo "TMDB_API_KEY = '<api-key>'" >> .env
# (Optional) specify the port to run at (else a default of 300 is used)
echo "PORT = <port>" >> .env
# Install the dependencies
npm install
# Run the server
npm run dev
# Go to http://localhost:3000/ in your brower (or whatever port you specified)
```

### Run test suite
```bash
npm run test
```

## WIP Features
[x] Search player at `api/tennis/search/${playername}`

[x] Fetch and display player image at `api/tennis/player/${playerid}/image`

[x] Fetch a random player's image

[ ] Display the top 20 players in a dropdown

[ ] (Stretch) Search for the player in the /tennis subreddit and display the top 5 hot links


## Tech
Server side:
* express
* knex

Client side:
* react & redux
* webpack

Dev:
* jest
* nodemon
* Github actions
* eslint, prettier
