import { createPortal } from 'react-dom';
export default function DropdownPortal({ isOpen, onClose }) {
   if (!isOpen) return null;

   return createPortal(
      <div className='dropdown-menu'>
         <p>Profile</p>
         <p>Settings</p>
         <p onClick={onClose}>Logout</p>
      </div>,
      document.body
   );
}
