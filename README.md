# :fork_and_knife: LazyCook :fork_and_knife: (Client)

If you HAVE to cook, but you're feeling lazy, we got you.
Welcome to LazyCook.

CONS: Zero awards in the app making department <br>
PROS: Will teach you how to make toast

# Features

### For Users

- Kitchen: Generates recipes based on ingredients selected by you <br>(Beta version, can do limited ingredient combinations for now. Go to the 'Recipes' link in the navigation bar and you will find some ingredient combination ideas there that you can test. It's a bit round-the-bush, but I'm expanding the database with my limited culinary talent so bear with me.)
- Store: Users can add optional ingredients to their cart to shop <br>(Functionality to be created)
- Recipes: Displays a list of recipes by users of the site
- Profile: A user can see their recipes in a list, and can create a recipe

### For Guests

- Store: Guests can shop for products at the store <br>(Functionality to be created)

## Setting up (local)

### Client
- React version
  - ^16.13.1
- Redux version
  - ^4.0.5

### Server
- Node version
  - ^12.16.1
- Express version
  - ^4.17.1
- Sequelize version
  - ^5.21.5
- PostgresQL version
  - ^7.18.2

## Installation

0. **Clone the repositories** <br>
[Clone the server here!](https://github.com/messmonte/lazycook-server)
1. **Install all dependencies** ->


    ```
    npm install
    ```

2. **Start the server** ->


    ```
    npm run dev
    ```

3. **Create, load schema and seed the database** ->


    ```
    node seeds/recipeingredient.js
    ```

4. **Start server and generate a recipe**


    ```
    npm start
    ```
    Log in at localhost:3000/login, sign up using the Join link


5. **Enjoy your lazy lunch.**
