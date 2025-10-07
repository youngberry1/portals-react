import { useState, useRef } from 'react';
import ModalPortal from './components/ModalPortal';
import DropdownPortal from './components/DropdownPortal';
import TooltipPortal from './components/TooltipPortal';
import './App.css';
export default function App() {
   const [isModalOpen, setModalOpen] = useState(false);
   const [isDropdownOpen, setDropdownOpen] = useState(false);
   const [tooltip, setTooltip] = useState(null);
   const [name, setName] = useState('');
   const infoRef = useRef();

   const showTooltip = () => {
      const rect = infoRef.current.getBoundingClientRect();
      setTooltip({
         top: rect.top - 40,
         left: rect.left - 30,
         text: 'User info section',
      });
   };

   return (
      <div className='app-container'>
         <header>
            <h1>🌙 Night Dashboard</h1>
            <div className='user-section'>
               <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
                  ☰ Menu
               </button>
               <DropdownPortal
                  isOpen={isDropdownOpen}
                  onClose={() => setDropdownOpen(false)}
               />
            </div>
         </header>

         <main>
            <section className='profile-card'>
               <h2>User Profile</h2>
               {name && <p>Name: {name}</p>}
               <p
                  ref={infoRef}
                  onMouseEnter={showTooltip}
                  onMouseLeave={() => setTooltip(null)}
               >
                  Hover for info ℹ️
               </p>
               {tooltip && (
                  <TooltipPortal
                     text={tooltip.text}
                     position={{ top: tooltip.top, left: tooltip.left }}
                  />
               )}
               <button onClick={() => setModalOpen(true)}>Edit Profile</button>
            </section>
         </main>

         <ModalPortal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h2>Edit Profile</h2>
            {name && <p>Current Name: {name}</p>}
            <input
               type='text'
               placeholder='Your name...'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setModalOpen(false)}>Save</button>
         </ModalPortal>
      </div>
   );
}
