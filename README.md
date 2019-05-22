# JES | JavaScript Entertainment System
The JavaScript Entertainment System brings your favorite classic arcade games to the comfort of your own web browser! Play Tetris, Snake, Brickbreaker, Minesweeper, and Battleship. Create an account and log in to save your high-scores—you'll even get a chance to add your initials and see them on the Global Leader Board!

<strong>Live Application:</strong> [JES](https://js-entertainment-system.herokuapp.com/) <br>
  
### Technologies Used
- Full MERN stack application
- React front end
- `Node` and `Express` server
- Backed by a `MongoDB Database` with a `Mongoose ODM`
- `Firebase` user authentication
- Create and Read routes for storing and accessing user high scores
- HTML `canvas` to create games
- MVC file structure
- Heroku deployment

## Primary Functionalities of <em>JES</em>
- <strong>AJAX call:</strong> Pulls the value from the "search" term input and queries the mealdb API. The appropriate response object data is selected and then dynamically added as `data-attributes` to the `<a>` tag surrounding "Save to Favorites."

- <strong>POST request:</strong> When a user clicks 'Save to Favorites', jQuery selects pulls the data-attributes stored on the `<a>` link then sends that data as a POST request to be stored in the `Recipe` table.

- <strong>GET request</strong> - When a user logs in, all their saved recipes automatically appear on their Favorites page. This information is selected via their unique Firebase User ID from the `User` table.

- <strong>PUT Request </strong> - When a user adds comments to a saved recipe, the added comments are saved in the database. Upon reopening this saved recipe, they will be able to see all their comments!

- <strong>DELETE Request </strong> - A user has the ability to delete one of their favorite recipes.

- <strong>Input Validation</strong> - While minor at this time, if a user does not enter a search term, a notification will appear requesting they please enter a search term. 

### Future Development
- <strong>Multiplayer Games</strong> - Firebase user authentication provides a great framework to build in its Realtime Database functionalities to create games that could be played simultaneously in two user clients at the same time, against each other.

- <strong>Social Commenting and Sharing</strong>

- <strong>Mobile App</strong>

- <strong>More Games!</strong> - Frogger, Pong, and an RPG adventure game are all in the works.