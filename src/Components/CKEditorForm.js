import CKEditor from "react-ckeditor-component";
import React, { Component } from 'react';

class CKEditorForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            content: 'content',
        }
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.afterPaste = this.afterPaste.bind(this);
    }
 
    updateContent(newContent) {
        console.log("updateContent")
        this.setState({
            content: newContent
        })
    }
    
    onChange(evt){
    //   console.log("onChange fired with event info: ", evt);
    //   console.log(newContent)
    //   this.setState({
    //     content: newContent
    //   })
      var newContent = evt.editor.getData();

        this.props.updateContent(newContent);
    }
    
    onBlur(evt){
    //   console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
    //   console.log("afterPaste event called with event info: ", evt);
    }
 
    render() {
        return (
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              config = {{toolbar:'basic',toolbarCanCollapse :'true',hide : 'true'}}
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />
        )
    }
}

export default CKEditorForm;