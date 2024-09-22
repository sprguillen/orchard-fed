import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import styles from './Modal.module.css';

function Modal (props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div>
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.boolean,
}

export default Modal;
