import {FaTimes} from 'react-icons/fa'
import { GlobalContext } from './context'
const Modal = () => {
  const {modalClose,modal} = GlobalContext()
  return (
    <div className={modal?'modal-overlay show-modal':'modal-overlay'}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={modalClose}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}
export default Modal