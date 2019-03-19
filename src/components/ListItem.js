import React, { Component } from 'react';

class ListItem extends Component {
  handleItemDelete(index) {
    this.props.itemDelete(index);
  }

  render() {
    return (
      <ul className="list-group">
        {
          this.props.list.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
          ))
        }
      </ul>
    );
  }
}

export default ListItem;