import React , {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
 

const customStyle = {
  input : {
    color : '#000',
    borderRadius : '10px',
    borderStyle : 'none',
    outline : 'none',
    padding : '5px',
    width : "100%"
  }
}

class AutoTextFieldGroup extends Component {
  constructor(props){
    super(props)
    this.state = {
      options : ["Javascript", "Spring", "ubuntu", "server","react"],
      value : ''
    }

    this.update = this.update.bind(this);
  }

  update(evt){
    // console.log("In AutoTextFieldGroup");
    // console.log(evt.target.value);
    this.setState({
      value : evt.target.value
    })
    this.props.update(evt.target.value);

  }

  render(){
   
    return (
      <div style={{marginTop : '10px'}}>
      <span>{this.props.name} : </span><input 
        style={customStyle.input}
        onChange={evt => this.update(evt)}
        value={this.state.value}
      />
      </div>
    )
  }
}

export default AutoTextFieldGroup