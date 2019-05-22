# JES | JavaScript Entertainment System
The JavaScript Entertainment System brings your favorite classic arcade games to the comfort of your own web browser! Play Tetris, Snake, Brickbreaker, Minesweeper, and Battleship. Create an account and log in to save your high-scores—you'll even get a chance to add your initials and see them on the Global Leader Board!

<strong>Live Application:</strong> [JES](https://retro-arcade.herokuapp.com/) <br>
<strong>Video Demonstration:</strong> [YouTube](https://www.youtube.com/watch?v=_Ocab5w_6NU&feature=youtu.be) <br>
  
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




## Primary Functionalities of <em>Yum(me)!</em>
- <strong>AJAX call:</strong> Pulls the value from the "search" term input and queries the mealdb API. The appropriate response object data is selected and then dynamically added as `data-attributes` to the `<a>` tag surrounding "Save to Favorites."

- <strong>POST request:</strong> When a user clicks 'Save to Favorites', jQuery selects pulls the data-attributes stored on the `<a>` link then sends that data as a POST request to be stored in the `Recipe` table.

- <strong>GET request</strong> - When a user logs in, all their saved recipes automatically appear on their Favorites page. This information is selected via their unique Firebase User ID from the `User` table.

- <strong>PUT Request </strong> - When a user adds comments to a saved recipe, the added comments are saved in the database. Upon reopening this saved recipe, they will be able to see all their comments!

- <strong>DELETE Request </strong> - A user has the ability to delete one of their favorite recipes.

- <strong>Input Validation</strong> - While minor at this time, if a user does not enter a search term, a notification will appear requesting they please enter a search term. 

### Future Development
- <strong>Database Efficiency</strong> - At this time, ingredients and measurements are each stored in strings which means we have duplicates! To be scalable, we would need to store each ingredient and each measurement once and then use foreign keys to access the correct data. 

- <strong>Improved Input Validation</strong> - This will eventually include the functionality of updating ingredients, measurements, and instructions in the "View Full" modal on the Favorites page. Additionally, when a user creates a recipe, we need to ensure that specific special characters are not allowed or more than one ingredient and measurement per space. It is critical that as the database structure changes so does the logic storing and retrieving information.

- <strong>Reduce Data</strong> - At this time there are no constraints on the number of results rendered to the page. Additionally, each card contains all requisite response object data `==` limitless data could be send to the page! Not good. Ideally, we would love to limit to 3 - 5 results and then include a "Next" button in the bottom right corner. Furthermore, this will also create a nicer user experience because they will not be overwhelmed with results, exhausted from choosing, and then being unstaisfied because they weren't sure if they picked the right one! #paradoxofchoice The user will be pleased with a few options, be energized by their easy choice, and then be even more sastisfied with it as they start cooking and eating!

- <strong>Better API for Search Page</strong> - The current api used for the Search page is very limited in the number and variety of recipes with only about 200 recipes to search through.

- <strong>Filter Recipes on Favorites Page</strong> - Add functionality to the Favorites page where in users could search by ingredient, cuisine or name of recipe, or have the option to filter alphabetically, date saved, or with a possible ranking feature. We could even include a "Top 5" most used. This could include creating different "cookbook" profiles, or print recipes to a physical cookbook (long-term).

- <strong>Improved UI/UX</strong> Most improvements are apparent after watching users try our application for the first time! The full value of our main concept - the ability to save "any recipe," update it and add comments to it, and also create your own recipes - is not realized within the first 30 seconds of signing up. This is a huge deal! One way we can correct this is to reconsider the flow of our design in addition to where design elements are placed and emphasized both in a laptop and mobile experience.

- <strong>Shared Accounts</strong> - Families could have accounts together for sharing family recipes!

- <strong>Social Commenting and Sharing</strong>

- <strong>Mobile App</strong>

<hr>

# The Creators

### [Nate Micinski](https://github.com/DearLorditsNate)
- <strong>Primary Contributions:</strong> Back end routing, JavaScript logic, Database Storage
- <strong>Soft Skills:</strong>
  * Leader
  * Distilling complex ideas
  * Enthusiasm & Communication
  * Presenting
  * Time Management
- <strong>Favorite Aspect:</strong>
> "`Create Your Own Recipe` functionality!"
- <strong>What I learned:</strong> 
> "<em>I learned a lot about building an MVC file structure and creating RESTful route conventions.<em>"

### [Hanna Lauth](https://github.com/hmlauth?tab=following)
- <strong>Primary Contributions:</strong> Front-End Design and Functionality including `Express.Handlebars` views, `View Full` and `Create Your Own Recipe` design and functionalities, Mobile-Responsiveness, README.md
- <strong>Soft Skills:</strong>
  * Leader
  * Presenting
  * Team Collaboration 
  * Planning & Time Management
  * Big Picture Conceptualization & Visualization
  * Ethusiasm & Communication 
- <strong>Favorite Aspect:</strong> 
> "The `View Full` modal and `Create Your Own Recipe` are my favorite features!"
- <strong>What I learned:</strong> 
> "<em>That both Bootstrap and Materialize have particular functionality when it comes to buttons and input fields... you must click on the exact right spot for it to work! We spent a good 4 hours trying to figure out why I couldn't log in or sign up on the deployed heroku app from my computer... come to find out I only needed to click exactly on the text and wait 2 seconds - BOOM! Signed In. On a more technical note, I learned about pulling user input from multiple input fields simuntaneously, furthered my understanding and comfortability with `CRUD`, `back-end`, and jQuery/JavaScript, learned how to make HTML elements editable (`contentedible`), and became best friends with Modals, GitHub, Bash, and Slack Channel threads.<em> "
  
### [Mike Wilkenson](https://github.com/MichaelWilkens)
- <strong>Primary Contributions:</strong> `Firebase` User Authentication, `Recipe` and `User` Models, 
- <strong>Soft Skills:</strong>
  * Eagerly embraces challenges
  * Communication & Teamwork
  * Presenting
- <strong>Favorite Aspect:</strong>
> "Personalized greetings based on Firebase uid"
- <strong>What I learned:</strong> 
> "<em>I became much more proficient with GitHub deployment and resolving merge conflicts. I also learned about user authentication with a third party user base.<em>"

### [Jenn Goldman](https://github.com/jenngoldman)
- <strong>Primary Contributions:</strong> Front-End Design including `Main` & `About Us` views, Photography, Mobile-Responsiveness, Color Palette
- <strong>Soft Skills:</strong>
  * Communication & Teamwork
  * Research
- <strong>Favorite Aspect:</strong>
> My team <3 
- <strong>What I learned:</strong> 
> "<em>Finally mastered the development workflow of GitHub in regards to creating branches and pull requests! Also, gained more familiarity with `Express.Handlebars.`<em>"