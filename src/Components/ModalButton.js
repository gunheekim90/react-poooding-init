import React ,{ Component }from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import CKEditorForm from './CKEditorForm';
import TagInput from './TagInput';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import ToggleButton from 'react-toggle-button'

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
      }
}

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen : false,
            contents : '',
            category : true,
            tag : ''
        }

        this.openModal = this.openModal.bind(this);
        this.pushData = this.pushData.bind(this);

    }

    pushData = () =>{
        console.log("push data")
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
                    <ToggleButton
                        value={ this.state.category || false }
                        onToggle={(value) => {
                            this.setState({
                            category: !value,
                            })
                        }} />
                    <hr/>
                    <CKEditorForm/>

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