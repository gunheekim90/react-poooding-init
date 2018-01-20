import React ,{ Component }from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Modal from 'react-modal';
import CKEditorForm from './CKEditorForm';

const cx = classNames.bind(styles);
const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0, 0, 0, 0.5)'
    },
    content : {
      position                   : 'absolute',
      top                        : '40px',
      left                       : '40px',
      right                      : '40px',
      bottom                     : '40px',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'
  
    }
};

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen : false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
     
     afterOpenModal() {
      
    }
     
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() { 
        return (  

              <div>
                <button onClick={this.openModal} className={cx("ModalButtonStyle")}><p>+</p></button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName={{
                        base: 'myOverlayClass',
                        afterOpen: 'myOverlayClass_after-open',
                        beforeClose: 'myOverlayClass_before-close'
                      }}
                >
        
                <h3>New Code Snippets!</h3>
                
                <div>TAG : I am a modal</div>
                <br/><br/>
                
                <CKEditorForm/>
                <div className={cx('closeModalButtonWrraper')}>
                
                <button className={cx('PushStyle')}>Push</button>
                <button onClick={this.closeModal} className={cx('closeModalStyle')}>Close</button>
                
                
                </div>
                
                
                </Modal>
            </div>

        )
    }
}
 
export default ModalButton;