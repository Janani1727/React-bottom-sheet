import React, { useState } from 'react'

import "./App.css"
import BottomSheet from './pages/BottomSheet';
const App = () => {

    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const openBottomSheet = () => {

      setBottomSheetOpen(true);

    };

  
    const closeBottomSheet = () => {

      setBottomSheetOpen(false);

    };
 

 return (

  <div className="App" >
    <button style={{border:"1px solid black",marginTop:"22%",marginLeft:"43%",padding:"15px",fontSize:"18px",color:"white",backgroundColor:"rgb(230, 70, 96)",cursor:"pointer"}} onClick={openBottomSheet}>Open Bottom Sheet</button>
    <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}> 
    <div style={{marginTop:"25px"}}>
    
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
   
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni 
    </p>

     

    </div>

        
    </BottomSheet>
  </div>

  )
}

export default App