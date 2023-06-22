import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { addBook } from '../service/api'

const defaultValue = {
  bookname: '',
  authname: '',
}

const AddBooks = () => {
  const [book, setBook] = useState(defaultValue)

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  const submitHandler = async () => {
    await addBook(book)
    window.location.href = '/'
  }

  return (
    <div className="formContainer" style={{ width: '81%', margin: '0 auto' }}>
      <h3>Create New Booklist</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => onValueChange(e)}
            required
            name="bookname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => onValueChange(e)}
            required
            name="authname"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => submitHandler()}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddBooks
