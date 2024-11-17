import React from 'react';
import SSideBar from './Components/SSideBar';
import NavBar from './Components/NavBar';
import MainSection from './Components/MainSection.jsx';
import './App.css'

export default function App(){
  return(
    <>     
      <div className="app-container">
            <SSideBar />      
            <MainSection /> 
      </div> 
    </>
  );
}






// import React from 'react';
// import List from './List.jsx'

// export default function App(){
//   const Fruits = [ {id: 1, name: "Apple", calories: 100},
//                     {id: 2, name: "Mango", calories: 120},
//                     {id: 3, name: "Papaya", calories: 90}
//                   ]

//   const Vegetables = [
//     {id: 1, name: "Raddish", calories: 100},
//     {id: 2, name: "Carrot", calories: 120},
//     {id: 3, name: "Cabbage", calories: 90}
//   ]                
//   return(
//     <>
//       {Fruits.length > 0  && <List context="Fruits" items={Fruits}/>}
//       {Vegetables.length > 0 && <List context="Vegetables" items={Vegetables}/>}
//     </>
//   );
// }

