import React from "react";
import Category from "./Category";

export default class CategoryList extends React.Component {
  // return a list of Category components to render
  // return a list of Category components to render
  render() {
    let enabledCategories = this.props.categories
      .filter((category) => category.enabled)
      .map((category, index) => {
        return <Category key={`category-${index}`} name={category.name} />;
      });
    return <div>{enabledCategories}</div>;
  }
}
