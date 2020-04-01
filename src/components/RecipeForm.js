import React, { Component } from "react";
import { useState } from "react";
import MultiSelect from "react-multi-select-component";

export default function RecipeForm(props) {
  const options = props.databaseIngredients.map(ingredient => {
    return { id: ingredient.id, value: ingredient.id, label: ingredient.name };
  });
  const name = props.databaseIngredients.map(ingredient => ingredient.id); //why this?

  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.values.name}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">Image </label>
        <input
          className="form-control"
          type="text"
          name="imageUrl"
          onChange={props.onChange}
          value={props.values.imageUrl}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">Step1</label>
        <input
          className="form-control"
          type="text"
          name="step1"
          onChange={props.onChange}
          value={props.values.step1}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">has Dairy</label>
        <input
          className="form-control"
          type="checkbox"
          name="hasDairy"
          onChange={props.onCheck}
          value={props.values.hasDairy}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">Is Vegan</label>
        <input
          className="form-control"
          type="checkbox"
          name="isVegan"
          onChange={props.onCheck}
          value={props.values.isVegan}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">Is Vegetarian</label>
        <input
          className="form-control"
          type="checkbox"
          name="isVegetarian"
          onChange={props.onCheck}
          value={props.values.isVegetarian}
        />
      </div>
      <div className="form-group col-sm-12">
        <label className="col-sm-2">has Nuts</label>
        <input
          className="form-control"
          type="checkbox"
          name="hasNuts"
          onChange={props.onCheck}
          value={props.values.hasNuts}
        />
      </div>
      <MultiSelect
        placeholder="Select an ingredient"
        name={name}
        options={options}
        value={props.ingredients}
        onChange={props.onSelect}
        labelledBy={"Select"}
      />
      <button type="submit" className="btn btn-dark">
        Save
      </button>
    </form>
  );
}
