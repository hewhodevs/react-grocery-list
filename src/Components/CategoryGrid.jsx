import React from "react";
import CategoryGridItem from "./CategoryGridItem";

export default class CategoryMenu extends React.Component {
  render() {
    return (
      <div className="category-menu-container">
        <div className="category-grid-container">
          {this.props.categories.map((category, index) => {
            return (
              <CategoryGridItem
                key={`category-grid-item-${index}`}
                id={`category-grid-item-${index}`}
                name={category.name}
                enabled={category.enabled}
                icon={category.icon}
                toggleCategory={this.props.toggleCategory}
              />
            );
          })}
        </div>
        <div className="category-menu-bar">
          <div>
            <button
              className="button done-button"
              onClick={this.props.toggleCategoryGrid}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
