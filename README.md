# What is the SNAP game && How to test and run website

This is a high level description and game overview:

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/Screenshot%202022-07-24%20at%2021.52.10.png"/>
</p> 

## Learn More

The game is played by drawing random cards and trying to match either the cards suit or the cards value. 

When you start the game you are greeted with this screen:

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/snap_empty_cards.jpg"/>
</p>

When you draw your first card the board looks like this:

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/snap_left_empty.jpg"/>
</p>

If you happen to match two cards suit you see a banner saying "SNAP SUIT!":

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/snap_suit_match.jpg"/>
</p>

If you happen to match two cards value you see a banner saying "SNAP VALUE!":

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/snap_value_match.jpg"/>
</p> 

When you have exhausted the 52 cards in the deck you are greeted with the scoreboard of your total number of suit matches and value matches:

<p align="center">
  <img src="https://raw.githubusercontent.com/LifeTiltz/newProject/master/public/different%20states%20of%20the%20game/snap_scoreboard.jpg"/>
</p> 

# Future of the App

I want to refactor the code and make it more scalable. In its current state it is a bit too centralized and non reuseable. 

I want to add a probability calculator and a way to select how many decks you would like to play with.

After that i will add a Sigma calculator of how lucky you got and tie in a serverless backend to have a leader board.


## Available Scripts

Start by running:

### `npm i`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Using npm test you can run the suite of tests so you can more easily refactor or add to the code base. When you are modifying the code make sure to write test that cover your code and even check for edge cases.

If anything fails, please check the name of the test and rewrite your code till it passes. Rinse and repeat.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.