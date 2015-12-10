import React from 'react';

class Band extends React.Component {
  render () {
    return (
      <div className="bandItem">
        <h4>
          {this.props.name}
        </h4>
        <span>December 11th - Nashvegas</span>
        <span>Status: 5 years until show</span>
      </div>
    )
  }
}

export default Band;
