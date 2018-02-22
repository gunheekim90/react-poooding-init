import React, { Component } from 'react';

class Input extends React.Component {
    _handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        console.log('do validate');
      }
    }
  
    render() {
      return <input type="text" onKeyPress={this._handleKeyPress} />
    }
}