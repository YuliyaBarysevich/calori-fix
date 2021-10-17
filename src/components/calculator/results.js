import React, { useState, useContext } from 'react';
import { SettingContext } from '../../context/context.js'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';


function Result(props) {

  // const height_final = props.list.map((item) => {
  //   console.log(typeof item.height_ft)
  //   console.log(typeof item.height_in)
  //   return (item.height_ft * 12) + item.height_in;
  // })


  const bmr = props.list.map((item) => {
    let total_height = (parseInt(item.height_ft) * 12) + parseInt(item.height_in);
    console.log(total_height)
    if (item.gender === "Male"){
      return 66 + (6.23 * parseInt(item.weight)) + (12.7 * total_height) - (6.8 * parseInt(item.age))
    } else {
      return 655 + (4.35 * item.weight) + (4.7 * total_height) - (4.7 * item.age)
    }
  })


  const dailyCal = props.list.map(item => {
    console.log(parseInt(item.activity))
    return Math.floor(bmr[0] * parseFloat(item.activity))
  })


  

  // const bmr = 66 + (6.23 * props.list.weight) + (12.7 * ((props.list.height_ft * 12) + props.list.height_in)) - (6.8 * props.list.age)


    return (
      <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item key={item._id}>
        
              <p>Current weight: {item.weight}</p>
              <p>Height: {item.height_ft} ft {item.height_in} in</p>
              <p>Age: {item.age}</p>
              <p>Gender: {item.gender}</p>
              <p>BMR: {bmr}</p>
              <p>Daily Calories Intake: {dailyCal}</p>
              
            
        </ListGroup.Item>
      ))}
    </ListGroup>
      
    )
}

export default Result;

// import React, { useState, useContext, useEffect } from 'react';
// import { SettingContext } from '../../context/context';
// import Pagination from './pagination';


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Toast from 'react-bootstrap/Toast';
// import Badge from 'react-bootstrap/Badge';

// const caloriesAPI = 'https://barysevich-server-api.herokuapp.com/api/v1/calories';

// function DisplayCalories(props) {
//   const context = useContext(SettingContext);
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredList = props.list.sort((leftItem, rightItem) => {
//     if(rightItem.weight > leftItem.weight){
//       return -1;
//     }else if(rightItem.weight < leftItem.weight){
//       return 1;
//     }else{
//       return 0;
//     }
//   })

//   const indexOfLastTask = currentPage * context.displayCount;
//   const indexOfFirstTask = indexOfLastTask - context.displayCount;
//   const currentTasks = filteredList.slice(indexOfFirstTask, indexOfLastTask);
//   context.setTotalTasks(filteredList.length);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <section className="list">
//       <ul>
//         {currentTasks.map(item => (
//           <li key={item._id} >
//             <Toast>
//               <Toast.Header closeButton={false}>
//                 <strong>Gender: {item.gender}</strong>
//               </Toast.Header>
//               <Toast.Body >
//                 <p> Weight: {item.weight}</p>
//                 <p>Height: {item.height}</p>
//                 <p>Age: {item.age} </p>
//               </Toast.Body>
//             </Toast>
//           </li>
//         ))}
//       </ul>
//       <Pagination
//       tasksPerPage={context.displayCount}
//       totalTasks={context.totalTasks}
//       paginate={paginate} />
//   </section>
  
// )
// }

// export default DisplayCalories;