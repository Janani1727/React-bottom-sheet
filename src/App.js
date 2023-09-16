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

  <div className="App">
    <button style={{border:"1px solid black",marginTop:"22%",marginLeft:"45%",padding:"10px"}} onClick={openBottomSheet}>Open Bottom Sheet</button>
    <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}> 
    <p style={{marginTop:"25px"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis accusantium 
      nostrum accusamus commodi architecto, praesentium autem quam voluptatem 
      iusto magni provident distinctio itaque mollitia quia nihil fugiat, possimus dicta?

    </p>

        
    </BottomSheet>
  </div>

  )
}

export default App