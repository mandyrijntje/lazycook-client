import request from "superagent";

const baseUrl = "http://localhost:4000";

function allIngredients(ingredientData) {
  return {
    type: "ALL_INGREDIENTS",
    payload: ingredientData
  };
}
export const getIngredients = () => (dispatch, getState) => {
  const state = getState();
  const { ingredient } = state;
  if (!ingredient.all.length) {
    request
      .get(`${baseUrl}/ingredient`)
      .then(response => {
        // console.log(`get ings working`)
        const action = allIngredients(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};