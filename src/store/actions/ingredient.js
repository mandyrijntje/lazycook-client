import request from "superagent";

const baseUrl = "http://localhost:4000";

function allIngredients(ingredientData) {
  return {
    type: "ALL_INGREDIENTS",
    payload: ingredientData,
  };
}
export const getIngredients = () => (dispatch, getState) => {
  const state = getState();
  const { ingredient } = state;
  if (!ingredient.all.length) {
    request
      .get(`${baseUrl}/ingredient`)
      .then((response) => {
        const action = allIngredients(response.body.ingredients);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function allCategories(categoryData) {
  return {
    type: "ALL_CATEGORIES",
    payload: categoryData,
  };
}
export const getCategories = () => (dispatch, getState) => {
  const state = getState();
  const { ingredient } = state;
  if (!ingredient.categories.length) {
    request
      .get(`${baseUrl}/category`)
      .then((response) => {
        const action = allCategories(response.body.categories);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function categoryIngredients(data) {
  return {
    type: "CATEGORY_INGREDIENTS",
    payload: data,
  };
}

export const getIngredientsForCategory = (categoryId) => (
  dispatch,
  getState
) => {
  // const state = getState();

  request
    .get(`${baseUrl}/category/${categoryId}/ingredient`)
    .then((response) => {
      const action = categoryIngredients(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
