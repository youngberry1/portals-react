import { createPortal } from 'react-dom';

export default function TooltipPortal({
   text,
   position = { top: 0, left: 0 },
}) {
   return createPortal(
      <div
         className='tooltip'
         style={{ top: position.top, left: position.left }}
      >
         {text}
      </div>,
      document.body
   );
}
