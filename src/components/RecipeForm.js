import React from "react";
import "./RecipeForm.css";
import MultiSelect from "react-multi-select-component";

export default function RecipeForm(props) {
  const options = props.databaseIngredients.map((ingredient) => {
    return { id: ingredient.id, value: ingredient.id, label: ingredient.name };
  });
  const name = props.databaseIngredients.map((ingredient) => ingredient.id);

  return (
    <form className="pt-5 pb-1 sizeForm" onSubmit={props.onSubmit}>
      <div className="form-group edit-form col-sm-12">
        <label className=" label-text">Name</label>
        <input
          className="form-control input-box"
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.values.name}
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className=" label-text">Image link</label>
        <input
          className="form-control input-box"
          type="text"
          name="imageUrl"
          onChange={props.onChange}
          value={props.values.imageUrl}
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className=" label-text">Step1</label>
        <input
          className="form-control input-box"
          type="text"
          name="step1"
          onChange={props.onChange}
          value={props.values.step1}
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className=" label-text">Step2 (Optional)</label>
        <input
          className="form-control input-box"
          type="text"
          name="step2"
          onChange={props.onChange}
          value={
            props.values.step2 === null || props.values.step2 === ""
              ? ""
              : props.values.step2
          }
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className=" label-text">Step3 (Optional)</label>
        <input
          className="form-control input-box"
          type="text"
          name="step3"
          onChange={props.onChange}
          value={
            props.values.step3 === null || props.values.step3 === ""
              ? ""
              : props.values.step3
          }
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className=" label-text">Step4 (Optional)</label>
        <input
          className="form-control input-box"
          type="text"
          name="step4"
          onChange={props.onChange}
          value={
            props.values.step4 === null || props.values.step4 === ""
              ? ""
              : props.values.step4
          }
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className="label-text">Step5 (Optional)</label>
        <input
          className="form-control input-box"
          type="text"
          name="step5"
          onChange={props.onChange}
          value={
            props.values.step5 === null || props.values.step5 === ""
              ? ""
              : props.values.step5
          }
        />
      </div>
      <div className="form-group edit-form col-12">
        <label className="label-text">Step6 (Optional)</label>
        <input
          className="form-control input-box"
          type="text"
          name="step6"
          onChange={props.onChange}
          value={
            props.values.step6 === null || props.values.step6 === ""
              ? ""
              : props.values.step6
          }
        />
      </div>
      <div className="booleans">
        <div className="form-group col-3 tickBox">
          <label className=" mb-0">Vegan</label>
          <input
            className="form-control "
            type="checkbox"
            name="isVegan"
            onChange={props.onCheck}
            value={props.values.isVegan}
          />
        </div>
        <div className="form-group col-3 tickBox ">
          <label className=" mb-0 isVeg">Vegetarian</label>
          <input
            className="form-control "
            type="checkbox"
            name="isVegetarian"
            onChange={props.onCheck}
            value={props.values.isVegetarian}
          />
        </div>
        <div className="form-group col-3 tickBox">
          <label className=" mb-0">Dairy</label>
          <input
            className="form-control"
            type="checkbox"
            name="hasDairy"
            onChange={props.onCheck}
            value={props.values.hasDairy}
          />
        </div>
        <div className="form-group col-3 tickBox">
          <label className=" mb-0">Nuts</label>
          <input
            className="form-control"
            type="checkbox"
            name="hasNuts"
            onChange={props.onCheck}
            value={props.values.hasNuts}
          />
        </div>
      </div>
      <MultiSelect
        className="ingSelect"
        placeholder={"Select an ingredient"}
        name={name}
        options={options}
        value={props.ingredients}
        onChange={props.onSelect}
        labelledBy={"Select"}
      />
      <div className='buttonDiv'><button type="submit" className="btn btn-dark mt-3 doneButton">
        Done
      </button></div>
    </form>
  );
}
