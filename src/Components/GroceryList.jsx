import React from "react";
import CategoryGrid from "./CategoryGrid";
import CategoryList from "./CategoryList";
import "./styles.scss";

export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategoryMenu: false,
      categories: [
        {
          name: "Fruit",
          enabled: true,
          items: []
        },
        {
          name: "Vegetables",
          enabled: true,
          items: []
        },
        {
          name: "Dairy",
          enabled: true,
          items: []
        },
        {
          name: "Canned Goods",
          enabled: false,
          items: []
        },
        {
          name: "Frozen Foods",
          enabled: false,
          items: []
        },
        {
          name: "Meat",
          enabled: false,
          items: []
        },
        {
          name: "Fish",
          enabled: false,
          items: []
        },
        {
          name: "Deli",
          enabled: true,
          items: []
        },
        {
          name: "Condiments",
          enabled: false,
          items: []
        },
        {
          name: "Snacks",
          enabled: false,
          items: []
        },
        {
          name: "Bread",
          enabled: false,
          items: []
        },
        {
          name: "Cereal",
          enabled: false,
          items: []
        },
        {
          name: "Baking",
          enabled: false,
          items: []
        },
        {
          name: "Drinks",
          enabled: false,
          items: []
        },
        {
          name: "Baby Items",
          enabled: false,
          items: []
        },
        {
          name: "Personal",
          enabled: false,
          items: []
        },
        {
          name: "Health",
          enabled: false,
          items: []
        },
        {
          name: "Toiletries",
          enabled: false,
          items: []
        },
        {
          name: "Household",
          enabled: false,
          items: []
        },
        {
          name: "Other1",
          enabled: false,
          items: []
        },
        {
          name: "Other2",
          enabled: false,
          items: []
        }
      ]
    };
    this.toggleCategoryGrid = this.toggleCategoryGrid.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleCategoryGrid() {
    this.setState((prevState) => {
      return {
        showCategoryMenu: !prevState.showCategoryMenu
      };
    });
  }

  toggleCategory(categoryName) {
    // get the category object that was toggled
    let categoryToggled = this.state.categories.find(
      (category) => category.name === categoryName
    );
    // change its enabled property
    categoryToggled.enabled = !categoryToggled.enabled;
    this.setState({ categoryToggled });
  }

  render() {
    // use conditional rendering to display the CategoryMenu
    // we check the state to see if its been toggled on / off
    if (this.state.showCategoryMenu) {
      return (
        <div className="grocery-list-container">
          <CategoryGrid
            toggleCategoryGrid={this.toggleCategoryGrid}
            toggleCategory={this.toggleCategory}
            categories={this.state.categories}
          />
        </div>
      );
    } else {
      // else display the grocery list itself
      return (
        <div className="grocery-list-container">
          <h1>Grocery List</h1>
          <div className="category-list-container">
            <CategoryList
              categories={this.state.categories}
              addItemToCategory={this.addItemToCategory}
            />
          </div>
          <div className="menu-items-container">
            <div className="menu-item">
              <button>clear</button>
            </div>
            <div className="menu-item">
              <button onClick={this.toggleCategoryGrid}>
                choose categories
              </button>
            </div>
            <div className="menu-item">
              <button>done</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
