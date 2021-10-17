import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
// import useForm from '../../hooks/form';

function TodoForm(props) {

  const [item, setItem] = useState({})

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value } )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({})
  }


  return (
    <>
    <Card>
        <Card.Title>Count Cals</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control size="lg" type="number" name="weight" required  placeholder="Weight" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control name="height_ft" type="number" placeholder="ft" onChange={handleChange}/>
                <Form.Control name="height_in" type="number" placeholder="in" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control name="age" type="number" placeholder="Age" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" size="sm" name="gender" required onChange={handleChange}>
                  <option>Please select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Activity Level</Form.Label>
                <Form.Control as="select" size="sm" name="activity" required onChange={handleChange}>
                  <option>Please select your activity level</option>
                  <option value="1.2">No exercise</option>
                  <option value="1.375">Light exercise/sports 1-3 days/week</option>
                  <option value="1.55">Moderate exercise/sports 3-5 days/week</option>
                  <option value="1.725">Hard exercise/sports 6-7 days a week</option>
                  <option value="1.9">Very hard exercise/sports / physical job or 2x training</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" size="lg" type="submit">Submit</Button>
          </Form>
        </Card.Body>
    </Card>
    </>
  )
}

export default TodoForm;

// import React, { useEffect, useState } from 'react'

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import useForm from '../../hooks/form.js';

// function CaloriesForm(props) {
//   const [ handleSubmit, handleChange ] = useForm(calculate)

//   function calculate(form){
//     props.handleSubmit(form);
//   }

//   return (
//     <>
//     <Card>
//       <Card.Title>Daily Calories Intake</Card.Title>
//       <Card.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group>
//             <Form.Label>Weight</Form.Label>
//             <Form.Control size="lg" name="weight" required onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Height</Form.Label>
//             <Form.Control size="lg" name="height" required onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Age</Form.Label>
//             <Form.Control size="lg" name="age" required onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Sex</Form.Label>
//             <Form.Control as="select" size="sm" name="gender" required onChange={handleChange}>
//               <option>Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </Form.Control>
//           </Form.Group>
//           <Button variant="primary" size="lg" type="submit">Submit</Button>

//         </Form>
//       </Card.Body>
//     </Card>
//     </>
//   )
// };

// export default CaloriesForm;