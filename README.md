# 🕹JavaScript Entertainment System (JES)🕹
The JavaScript Entertainment System brings your favorite classic arcade games to the comfort of your own web browser! Play Tetris, Snake, Brickbreaker, Minesweeper, and Battleship. Create an account and log in to save your high-scores—you'll even get a chance to add your initials and see them on the Global Leader Board!

<strong>Live Application:</strong> [JES](https://js-entertainment-system.herokuapp.com/) <br>
  
### Technologies Used
- Full MERN stack application
- `React` front end
- `Node` and `Express` server
- Backed by a `MongoDB Database` with a `Mongoose ODM`
- `Firebase` user authentication
- Create and Read routes for storing and accessing user high scores
- HTML `canvas` to create games
- MVC file structure
- Heroku deployment

## Primary Functionalities of JES
- <strong>User Authentication:</strong> Logged-in users are prompted to save their scores with a modal at Game Over. Those scores are saved into the DB and viewable in a protected account page that shows only the user's personal high scores by game and on the Global High Scores page, viewable to anyone on the site.

- <strong>HTML Canvas:</strong> Each game utilizes the canvas tag of HTML to create the grids in which the games function. Some games work through front end JS files while others are built entirely in React!

- <strong>React-Bootstrap:</strong> Utilizes the [React-Bootstrap](https://react-bootstrap.github.io/) npm package to bring all of the functionality of React Modals, Buttons, Forms and more into a React development structure.

- <strong>Mobile Friendly(ish):</strong> All games render and function properly on mobile devices using on-screen buttons and directional arrows. It works but you might not be sitting at the top of the Global Leader Board 🤷‍♂️

### Future Development
- <strong>Multiplayer Games</strong> - Firebase user authentication provides a great framework to build in its Realtime Database functionalities to create games that could be played simultaneously in two user clients at the same time, against each other.

- <strong>Social Commenting and Sharing</strong>

- <strong>Mobile App</strong>

- <strong>More Games!</strong> - Frogger, Pong, and an RPG adventure game are all in the works.
