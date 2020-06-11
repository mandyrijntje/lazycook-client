import request from "superagent";

const baseUrl = "http://localhost:4000";

function tipRecipe(tip) {
  return {
    type: "TIP_RECIPE",
    payload: tip,
  };
}

export const getTipRecipe = (data, history) => (dispatch, getState) => {
  const state = getState();
  const { userLogState } = state;
  return request
    .post(`${baseUrl}/kitchen/recipe`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .send({ ingredients: data, userId: userLogState.id })
    .then((response) => {
      dispatch(tipRecipe(response.body));
    })
    .catch(console.error);
};

function resettedRecipe(val) {
  return {
    type: "TIP_RECIPE",
    payload: val,
  };
}

export const resetRecipe = (data, history) => (dispatch) => {
  dispatch(resettedRecipe([]));
};

function foundRecipe(uniqueRecipe) {
  return {
    type: "FOUND_RECIPE",
    payload: uniqueRecipe,
  };
}

export const findRecipe = (data, history) => (dispatch, getState) => {
  const state = getState();
  const { userLogState } = state;
  return request
    .post(`${baseUrl}/kitchen/recipe`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .send({ ingredients: data, userId: userLogState.id })
    .then((response) => {
      const action = foundRecipe(response.body);
      dispatch(action);
    })
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
        const action = allRecipes(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function userRecipes(recipeData) {
  return {
    type: "NEW_RECIPE",
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
  console.log("wga");
  const state = getState();
  const { userLogState } = state;

  return request
    .post(`${baseUrl}/recipe`)
    .set("Authorization", `Bearer ${userLogState.jwt}`)
    .send({ ...data, userId: userLogState.id })
    .then((response) => {
      console.log("yeww", response.body);
      const action = userRecipes({
        user: userLogState,
        body: response.body,
      });
      dispatch(action);
    })
    .then(() => history.push("/profile"))
    .catch(console.error);
};

function changeRecipe(newRecipe) {
  return {
    type: "CHANGE_RECIPE",
    payload: newRecipe,
  };
}

export const updateRecipe = (id, update, history) => {
  return async function (dispatch, getState) {
    const state = getState();

    const { userLogState } = state;
    try {
      const response = await request
        .put(`${baseUrl}/recipe/${id}`)
        .set("Authorization", `Bearer ${userLogState.jwt}`)
        .send({ ...update, userId: userLogState.id });
      console.log("its a me mario,", response.body);
      const action = changeRecipe({
        user: userLogState,
        body: response.body,
      });

      dispatch(action);
      // history.push("/profile");
    } catch (error) {
      console.error(error);
    }
  };
};

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
      console.log("hey");
      dispatch(
        uniqueRecipeDelete({
          user: userLogState,
          body: id,
        })
      );
    })
    .catch(console.error);
};
