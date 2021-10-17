import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './results.js';


// import './todo2.scss';




function ToDo(props) {
  


  const [list, setList] = useState([])

 
  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    item && setList([...list, item])

  }

  // useEffect(() => {
  //   let list = [
  //     { _id: 1, weight: 100, height_ft: 10, height_in: 3, gender: 'Male', age: 25}
  //   ];

  //   setList(list)
    
  // }, [])


  let fullDate = () => {
    let date = new Date();
    let day = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]
    let weekDay = days[date.getDay()]
    return `${weekDay} / ${day}th ${month}`
  }

  return (
    <>
    <header>
      {/* <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav> */}
      
    </header>

    <main>
      <h2>
        Calculate your BMR and daily calorie estimates
      </h2>

      <section className="main">

      <div>
        <TodoForm handleSubmit={_addItem}/>
      </div>

      <div>
        <TodoList list={list} />
      </div>
    </section>

    </main>

    </>

  )
}

export default ToDo;
