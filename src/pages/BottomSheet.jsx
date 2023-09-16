import React, { useState } from 'react';
import "../App.css"

const BottomSheet = ({ isOpen, onClose, children }) => {
  const [dragStartY, setDragStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [sheetY, setSheetY] = useState(0);
  const sheetClassName = isOpen ? 'bottom-sheet open' : 'bottom-sheet';

  const handleDragStart = (e) => {
    setDragStartY(e.clientY);
    setDragging(true);
  };

  const handleDrag = (e) => {
    if (!dragging) return;
  
    requestAnimationFrame(() => {
      const deltaY = e.clientY - dragStartY;
      const newSheetY = sheetY + deltaY;
  
      setSheetY(newSheetY);
      setDragStartY(e.clientY);
    });
  };

  const handleDragEnd = () => {
    setDragging(false);

    // Determine the snap point based on the position after dragging
    let snapPoint = 'closed';
    
    if (sheetY < -150 && sheetY > -300) {     
        snapPoint = 'half';
      } else if (sheetY <= -450) {
        snapPoint = 'open';
       
      }else if(sheetY>0){
        snapPoint="closed"
      }

    // Adjust the position to snap to the nearest snap point
    switch (snapPoint) {

      case 'closed':
        setSheetY(0);
        break;
      case 'half':
        setSheetY(-300); // Adjust the value as needed
        break;
      case 'open':
        setSheetY(-600); // Adjust the value as needed
        break;
      default:
        break;
    }
  };

  return (

    <div
      className={sheetClassName}
      style={{ transform: `translateY(${sheetY}px)` }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >

      <div className="bottom-sheet-content">
        <div className="fixed">
          <button  onClick={onClose} className="close-button"></button>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;

