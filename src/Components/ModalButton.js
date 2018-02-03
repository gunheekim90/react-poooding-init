import React ,{ Component }from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import CKEditorForm from './CKEditorForm';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

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
        zIndex          : 99999999,
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
        width                   : widthReponsiveValue
      },
      categoryButton : {
          code : {
            borderRadius            : '0px',
            background         : '#353535',
            border : 'none'
          },
          snippet : {
            borderRadius            : '0px',
            background        : 'white',
            border : 'none',
            marginLeft : '10px'
          }
        
      }
}

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen : false,
            contents : '',
            category : 'CODE',
            tag : ''
        }

        this.openModal = this.openModal.bind(this);
        this.pushData = this.pushData.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.changeCategory = this.changeCategory.bind(this);

    }

    pushData = () =>{
        console.log("push data")
    }

    changeCategory= (category) =>{
        console.log(this.categoryId.innerText);  
        this.setState({
            category : category
        })
        this.categoryId.innerText = category
        console.log(this.state.category)
    }

    updateContent = (newContent)=>{
        
        this.setState({
            content : newContent
        })

        console.log(this.state.content)
    }

    openModal(e) {
        e.preventDefault();
        ModalManager.open(
        
            <Modal
                style={customStyle}
                className={cx('ModalParent')}
                effect={Effect.SlideFromRight }>
                
                <div className={cx('ModalWrapper')}>
                    <h2 style={customStyle.title}>Code & Snippet</h2>
                    <hr/>
                    <button className={cx('btn btn-default')} style={customStyle.categoryButton.code} onClick={this.changeCategory.bind(this,'CODE')}>CODE</button>
                    <button className={cx('btn btn-default')} style={customStyle.categoryButton.snippet} onClick={this.changeCategory.bind(this,'SNIPPET')}>SNIPPET</button>
                    <span style={{marginLeft : '10px'}}>=> about...<span ref={span => this.categoryId = span}>CODE</span></span>

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
 
export default ModalButton;