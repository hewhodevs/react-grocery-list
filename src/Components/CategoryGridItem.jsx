import React from "react";

export default class CategoryMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleCategory() {
    let name = this.props.name;
    this.props.toggleCategory(name);
  }

  render() {
    return (
      <div
        className={`category-menu-item-container ${
          this.props.enabled ? "enabled" : ""
        }`}
      >
        <div className="grid-item">
          <button onClick={this.toggleCategory}>
            <p>{this.props.name}</p>
          </button>
        </div>
      </div>
    );
  }
}
