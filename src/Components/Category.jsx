import React from "react";
import CategoryItem from "./CategoryItem";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false,
      items: [],
      itemsAcquired: 0
    };
    this.toggleContentVisible = this.toggleContentVisible.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleItemCheckboxChange = this.handleItemCheckboxChange.bind(this);
    this.handleItemNameChange = this.handleItemNameChange.bind(this);
  }

  toggleContentVisible() {
    // called at onClick of accordion button
    // toggles contentVisible between true and false
    this.setState((prevState) => {
      return { contentVisible: !prevState.contentVisible };
    });
  }

  addItem() {
    let prevItems = [...this.state.items];
    // add item to beginning of the array so it shows as
    // the top most item when the category re-renders
    let newItems = [{ name: "", quantity: 0, acquired: false }, ...prevItems];
    this.setState({
      items: newItems
    });
  }

  handleItemCheckboxChange(itemIndex) {
    // handle check box ticking here
    let checkedCount = 0;
    let prevItems = [...this.state.items];
    prevItems[itemIndex].acquired = !prevItems[itemIndex].acquired;
    prevItems.forEach((item) => {
      if (item.acquired) {
        checkedCount++;
      }
    });
    this.setState({
      items: prevItems,
      itemsAcquired: checkedCount
    });
  }

  handleItemNameChange(itemIndex, itemName) {
    let prevItems = [...this.state.items];
    prevItems[itemIndex].name = itemName;
    this.setState({
      items: prevItems
    });
  }

  render() {
    // Handle Category expand and collapse animation
    // item height is 50px, border width is 3px;
    let myStyle;
    let items = [...this.state.items];

    // height for add button + items
    // used for the transition on opening / closing the category
    let heightVal = 50 + items.length * 50;
    if (this.state.contentVisible) {
      myStyle = {
        height: `${heightVal}px`,
        opacity: "1",
        visibility: "visible",
        transition: "height 0.3s ease-out"
      };
    } else {
      myStyle = {
        height: "0px",
        transition: "height 0.3s ease-in"
      };
    }

    // Create the item List
    let itemList = <div></div>;
    if (items.length > 0) {
      itemList = items.map((item, index) => {
        return (
          <CategoryItem
            key={`item-${index}`}
            index={index}
            itemIndex={index}
            handleItemCheckboxChange={this.handleItemCheckboxChange}
            handleItemNameChange={this.handleItemNameChange}
            checked={item.acquired}
            name={item.name}
          />
        );
      });
    }

    // Handle Item Count display and style
    let itemCount = <div></div>;
    let itemCountStyle = {
      backgroundColor: "#ed4542"
    };
    if (items.length > 0) {
      if (items.length - this.state.itemsAcquired === 0) {
        // if we have items and have acquired them all
        // return tick icon
        itemCount = <p>&#10004;</p>;
        itemCountStyle = {
          backgroundColor: "#0d9e53"
        };
      } else {
        // else return count of remaining items yet to acquire
        itemCount = items.length - this.state.itemsAcquired;
      }
    } else {
      // case where we have yet to add any items to the category
      itemCount = 0;
      itemCountStyle = {
        backgroundColor: "#bfbfbf"
      };
    }

    // The expanded Category Content, Add button + CategoryItems
    let accordionContent = (
      <div className="accordion_content" style={myStyle}>
        <div className="list_item_container">
          <button onClick={this.addItem} className="add-item-button">
            +
          </button>
          <label className="add-item-button-label">Add Item</label>
        </div>
        {itemList}
      </div>
    );

    return (
      <div className="category-container">
        <div className="category-item-count-container">
          <div className="category-item-count-total" style={itemCountStyle}>
            {itemCount}
          </div>
        </div>
        <div className="accordion_container">
          <div className="accordion">
            {/* when button clicked, toggle the contentVisible value in our state*/}
            <button
              type="button"
              className="accordion_title"
              onClick={this.toggleContentVisible}
            >
              <img
                alt={`${this.props.name} icon`}
                className="category-list-item-icon"
                src={this.props.icon}
              />
              <p>{this.props.name}</p>
            </button>
          </div>
          {accordionContent}
        </div>
      </div>
    );
  }
}
