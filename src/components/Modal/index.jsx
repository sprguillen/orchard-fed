import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import styles from './Modal.module.css';

function Modal (props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className="p-4">
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="flex item-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  isOpen: PropTypes.boolean,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, 
}

export default Modal;
