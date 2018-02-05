import React ,{ Component }from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import CKEditorForm from './CKEditorForm';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import AutoTextFieldGroup from './AutoTextFieldGroup.js'
import {connect} from 'react-redux';
const cx = classNames.bind(styles);
const mediaQuery = window.matchMedia('(min-width: 768px)');
console.log(mediaQuery.matches);
var widthReponsiveValue;
if(mediaQuery.matches){
    widthReponsiveValue = '60%';
}else{
    widthReponsiveValue = '100%';
}

var customStyle = {
    title : {
        backgroundColor : '#282D4F'
    },
    buttomGroup : {
        backgroundColor : '#282D4F',
        float : 'right',
        padding : '10px'
    },
    overlay: {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        zIndex          : 0.5,
        overflow        : 'hidden',
        perspective     :  1300,
        backgroundColor : 'rgba(0, 0, 0, 0.3)'
      },
      content: {
        position                : 'relative',
        margin                  : '15% auto',
        border                  : 'none',
        background              : '#282D4F',
        overflow                : 'auto',
        borderRadius            : '4px',
        outline                 : 'none',
        boxShadow               : '0 5px 10px rgba(0, 0, 0, .3)',
        width                   : widthReponsiveValue,
        marginTop              : '70px'
      },
      categoryButton : {
          code : {
            borderRadius            : '0px',
            background         : '#353535',
            border : 'none',
            color : '#fff',
            textShadow : 'none'
          },
          snippet : {
            borderRadius            : '0px',
            background        : 'white',
            border : 'none',
            marginLeft : '15px',
            color : '#000',
            textShadow : 'none'
          },
          movie : {
            borderRadius            : '0px',
            background        : 'darkgreen',
            border : 'none',
            marginLeft : '15px',
            color : '#fff',
            textShadow : 'none'
          }
        
      },
      collapse : {
        backgroundColor : 'orange',
        color : '#fff',
        outline : "none",
        border : "none",
        padding : "5px"
      }
}

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen : false,
            content : '',
            category : 'CODE',
            tag : '',
            title : '',
            authId : '',
            date : ''
        }

        this.openModal = this.openModal.bind(this);
        this.pushData = this.pushData.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.weightUp = this.weightUp.bind(this);
        this.weightDown = this.weightDown.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }

    pushData = async () =>{
        console.log("push data")
        console.log(this.state)
        if(this.props.isAuthenticated){
            var date = new Date();
            var currentDate = Number(date.getFullYear())+"-"+Number(date.getMonth()+1)+"-"+Number(date.getDate())+" "+Number(date.getHours())+":"+Number(date.getMinutes());
            await this.setState({
                authId : this.props.user.email,
                date : currentDate
            })
            await this.props.pushData(this.state).then((res)=>{
                console.log("저장 한 다음의 결과");
                console.log(res)
                localStorage.removeItem('newContent')
            })
        }else{
            alert("You first Sign in")
        } 
    }

    changeCategory= (category) =>{
        // console.log(this.categoryId.innerText);  
        this.setState({
            category : category
        })
        this.categoryId.innerText = category
        // console.log(this.state.category)
    }

    weightUp=(e)=>{
        // console.log("weightUp");
        e.currentTarget.style.fontWeight = '700';
    }

    weightDown=(e)=>{
        // console.log("weightDown");
        e.currentTarget.style.fontWeight = '300';
    }

    updateContent = (newContent)=>{

        localStorage.setItem("newContent",newContent);
        this.setState({
            content : newContent
        })
        // console.log(this.state.content)
    }

    updateTag = (newTag) =>{
        // console.log("Update Tag")
        // console.log(newTag)
        this.setState({
            tag : newTag
        })
    }

    updateTitle = (newTitle) =>{
        // console.log(newTitle);
        this.setState({
            title : newTitle
        })
    }

    openModal(e) {
        e.preventDefault();
        ModalManager.open(
        
            <Modal
                style={customStyle}
                className={cx('ModalParent')}
                effect={Effect.SlideFromRight }>
                
                <div className={cx('ModalWrapper')}>
                    <h2 style={customStyle.title} ref={h2 => this.categoryId = h2}>Category</h2>
                    <hr/>
                    <button data-toggle="collapse" data-target="#demo" style={customStyle.collapse}>SETTING</button>
                    <div id="demo" class="collapse" style={{marginTop : "10px"}}>
                        <button 
                        className={cx('btn btn-default')} 
                        style={customStyle.categoryButton.code} 
                        onClick={this.changeCategory.bind(this,'CODE')}
                        onMouseOver={this.weightUp.bind(this)}
                        onMouseOut={this.weightDown.bind(this)}

                        >CODE</button>
                        <button 
                            className={cx('btn btn-default')} 
                            style={customStyle.categoryButton.snippet} 
                            onClick={this.changeCategory.bind(this,'SNIPPET')}
                            onMouseOver={this.weightUp.bind(this)}
                            onMouseOut={this.weightDown.bind(this)}
                        >SNIPPET</button>

                        <button 
                            className={cx('btn btn-default')} 
                            style={customStyle.categoryButton.movie} 
                            onClick={this.changeCategory.bind(this,'MOVIE')}
                            onMouseOver={this.weightUp.bind(this)}
                            onMouseOut={this.weightDown.bind(this)}
                        >MOVIE</button>

                          <AutoTextFieldGroup update={this.updateTag} name="Tag"/>
                          <AutoTextFieldGroup update={this.updateTitle} name="Title"/>
                    </div>
                    
                    <hr/>
                    <CKEditorForm updateContent={this.updateContent}/>

                    <div style={customStyle.buttomGroup}>
                        <button onClick={this.pushData} className={cx('modalPushButton')}>Push</button>
                        <button onClick={ModalManager.close} className={cx('modalCloseButton')}>Close</button>
                    </div>
                </div>

            </Modal>
        
        
        
    );
    }

    render() { 
       
        widthReponsiveValue = '100%';
        return (  

              <div>
                <button onClick={this.openModal} className={cx("ModalButtonStyle")}><p>+</p></button>

            </div>

        )
    }
}
 
// export default NavigationBar;
function mapStateToProps(state) {
  return {
    isAuthenticated : state.Auth.get('isAuthenticated'),
    user : state.Auth.get('user')
  };
}

export default connect(mapStateToProps,null)(ModalButton);