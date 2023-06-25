import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { addBook, editBook, getBook } from '../service/api'
import { useParams } from 'react-router-dom'
import { FormControl, FormGroup, InputLabel, Input } from '@mui/material'

const defaultValue = {
  bookname: '',
  authname: '',
}

const EditBooks = () => {
  const [book, setBook] = useState(defaultValue)

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }
  const { id } = useParams()

  useEffect(() => {
    loadBookDetails()
  }, [])

  const loadBookDetails = async () => {
    const response = await getBook(id)
    setBook(response.data)
    console.log(response.data)
  }

  const submitHandler = async () => {
    await editBook(book, id)
    window.location.href = '/'
  }

  return (
    <div className="formContainer" style={{ width: '81%', margin: '0 auto' }}>
      <h3>Edit Book Details</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            value={book.bookname}
            onChange={(e) => onValueChange(e)}
            required
            name="bookname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            value={book.authname}
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

export default EditBooks
