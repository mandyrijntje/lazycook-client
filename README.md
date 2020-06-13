# :fork_and_knife: LazyCook :fork_and_knife: (Client)

If you HAVE to cook, but you're feeling lazy, we got you.
Welcome to LazyCook.

CONS: Zero awards in the app making department <br>
PROS: Will teach you how to make toast

# Features

### For Users

- Kitchen: Generates recipes based on ingredients selected by you <br>(Beta version, can do limited ingredient combinations for now. Go to the 'Recipes' link in the navigation bar and you will find some ingredient combinations from the recipes that you can test. It's a bit round-the-bush, but I'm expanding the database with my limited culinary talent so bear with me.)
- Store: Users can add ingredients to their cart to buy them <br>(Work in progress)
- Recipes: Displays a list of recipes by users of the site
- Profile: A user can see their recipes in a list, and can create/update/delete their recipe

### For Guests

- Store: Guests can shop for products at the store <br>(Work in progress)

## Setting up (local)

### Client
- React version
  - ^16.13.1 or similar, I'm not the boss of you :D
- Redux version
  - ^4.0.5 or similar

### Server
- Node version
  - ^12.16.1 or similar
- Express version
  - ^4.17.1 or similar
- Sequelize version
  - ^5.21.5 or similar
- PostgresQL version
  - ^7.18.2 or similar

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
    Log in at localhost:3000/login, sign up using the Join button


5. **Enjoy your lazy lunch.**
