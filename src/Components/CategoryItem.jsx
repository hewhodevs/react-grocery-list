import React from "react";

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemCheckboxChange = this.handleItemCheckboxChange.bind(this);
    this.handleItemNameChange = this.handleItemNameChange.bind(this);
  }

  handleItemCheckboxChange() {
    // callback function to toggle the checkbox state
    let itemIndex = this.props.index;
    this.props.handleItemCheckboxChange(itemIndex);
  }

  handleItemNameChange(event) {
    // callback function to update the item name
    let itemIndex = this.props.index;
    let itemName = event.target.value;
    this.props.handleItemNameChange(itemIndex, itemName);
  }

  render() {
    return (
      <div className="list_item_container">
        <input
          type="checkbox"
          className="list-item-checkbox"
          onChange={this.handleItemCheckboxChange}
          checked={this.props.checked}
        />
        <input
          type="text"
          value={this.props.name}
          onChange={this.handleItemNameChange}
        />
      </div>
    );
  }
}
