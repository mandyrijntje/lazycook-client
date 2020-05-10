import request from "superagent";

const baseUrl = "http://localhost:4000";

function foundRecipe(uniqueRecipe) {
  return {
    type: "FOUND_RECIPE",
    payload: uniqueRecipe,
  };
}

export const findRecipe = (data, history) => (dispatch, getState) => {
  //console.log(data);
  const state = getState();
  const { userLogState } = state;
  return request
    .post(`${baseUrl}/kitchen/recipe`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .send({ ingredients: data, userId: userLogState.id })
    .then((response) => {
      console.log('please show me', response.body);
      const action = foundRecipe(response.body);
      dispatch(action);
    })
    // .then(() => history.push("/profile"))
    .catch(console.error);
};

function allRecipes(recipeData) {
  return {
    type: "ALL_RECIPES",
    payload: recipeData,
  };
}
export const getRecipes = () => (dispatch, getState) => {
  const state = getState();
  const { recipe } = state;
  if (!recipe.all.length) {
    request
      .get(`${baseUrl}/recipe`)
      .then((response) => {
        // console.log(`get recipes working`);
        const action = allRecipes(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function userRecipes(recipeData) {
  return {
    type: "USER_RECIPES",
    payload: recipeData,
  };
}

export const getRecipesForUser = (userParamId) => (dispatch, getState) => {
  const state = getState();
  if (!state.recipe.userRecipes.length) {
    request
      .get(`${baseUrl}/users/${userParamId}/recipe`)
      .then((response) => {
        const action = userRecipes(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// function newRecipe(newRecipeData) {
//   return {
//     type: "NEW_RECIPE",
//     payload: newRecipeData
//   };
// }

export const createRecipe = (data, history) => (dispatch, getState) => {
  const state = getState();
  const { userLogState } = state;
  const userId = userLogState.id;

  return request
    .post(`${baseUrl}/users/${userId}/recipe`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .send({ ...data, userId: userLogState.id })
    .then((response) => {
      // console.log(response.body);
      const action = userRecipes(response.body);
      dispatch(action);
    })
    .then(() => history.push("/profile"))
    .catch(console.error);
};

// function changeRecipe(newRecipe) {
//   return {
//     type: "CHANGE_RECIPE",
//     payload: newRecipe
//   };
// }

export function updateRecipe(id, update, history) {
  return async function (dispatch, getState) {
    const state = getState();

    const { userLogState } = state;
    try {
      const response = await request
        .put(`${baseUrl}/recipe/${id}`)
        .set("Authorization", `Bearer ${userLogState.jwt}`)
        .send({ ...update, userId: userLogState.id });
      const action = userRecipes(response.body);

      dispatch(action).then(() => history.push("/profile"));
    } catch (error) {
      console.error(error);
    }
  };
}

export const uniqueRecipeDelete = (id) => ({
  type: "RECIPE_DELETE_SUCCESS",
  payload: id,
});

export const deleteRecipe = (id) => (dispatch, getState) => {
  const state = getState();

  const { userLogState } = state;
  request
    .delete(`${baseUrl}/recipe/${id}`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .then((response) => {
      dispatch(uniqueRecipeDelete(id));
    })
    .catch(console.error);
};
