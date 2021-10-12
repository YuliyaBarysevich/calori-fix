import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from '../../hooks/form.js';

function CaloriesForm(props) {
  const [ handleSubmit, handleChange ] = useForm(calculate)

  function calculate(form){
    props.handleSubmit(form);
  }

  return (
    <>
    <Card>
      <Card.Title>Daily Calories Intake</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control size="lg" name="weight" required onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control size="lg" name="height" required onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control size="lg" name="age" required onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sex</Form.Label>
            <Form.Control as="select" size="sm" name="gender" required onChange={handleChange}>
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">Submit</Button>

        </Form>
      </Card.Body>
    </Card>
    </>
  )
};

export default CaloriesForm;