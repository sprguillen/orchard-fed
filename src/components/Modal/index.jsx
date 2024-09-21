import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import styles from './Modal.module.css';

function Modal (props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  isOpen: PropTypes.boolean.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, 
}

export default Modal;
