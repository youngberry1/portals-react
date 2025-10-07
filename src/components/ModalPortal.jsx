import { createPortal } from 'react-dom';

export default function ModalPortal({ isOpen, onClose, children }) {
   if (!isOpen) return null;

   return createPortal(
      <div className='modal-overlay' onClick={onClose}>
         <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>,
      document.body
   );
}
