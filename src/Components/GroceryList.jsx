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
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3267/3267132.svg"
        },
        {
          name: "Vegetables",
          enabled: true,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3267/3267279.svg"
        },
        {
          name: "Dairy",
          enabled: true,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3267/3267226.svg"
        },
        {
          name: "Canned Goods",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/372/372954.svg"
        },
        {
          name: "Frozen Foods",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/2458/2458102.svg"
        },
        {
          name: "Meat",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3267/3267187.svg"
        },
        {
          name: "Seafood",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3267/3267210.svg"
        },
        {
          name: "Deli",
          enabled: true,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/992/992756.svg"
        },
        {
          name: "Condiments",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3142/3142503.svg"
        },
        {
          name: "Snacks",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3142/3142682.svg"
        },
        {
          name: "Bread",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/992/992747.svg"
        },
        {
          name: "Cereal",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/992/992755.svg"
        },
        {
          name: "Baking",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/2917/2917629.svg"
        },
        {
          name: "Drinks",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/2738/2738730.svg"
        },
        {
          name: "Baby Items",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3081/3081902.svg"
        },
        {
          name: "Personal",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3082/3082046.svg"
        },
        {
          name: "Health",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/2754/2754831.svg"
        },
        {
          name: "Toiletries",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3142/3142620.svg"
        },
        {
          name: "Household",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/3022/3022961.svg"
        },
        {
          name: "Other1",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/787/787159.svg"
        },
        {
          name: "Other2",
          enabled: false,
          items: [],
          icon: "https://image.flaticon.com/icons/svg/787/787159.svg"
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
