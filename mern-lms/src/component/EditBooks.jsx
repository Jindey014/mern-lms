import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'

const EditBooks = () => {
  const [bookName, setBookname] = useState('')
  const [authorName, setAuthorname] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const book = {
      bookname: bookName,
      authorname: authorName,
    }

    window.location.href = '/'
    console.log(book)
  }

  return (
    <div className="formContainer" style={{ width: '81%', margin: '0 auto' }}>
      <h3>Edit Booklist</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            value={bookName}
            onChange={(e) => setBookname(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            value={authorName}
            onChange={(e) => setAuthorname(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  )
}

export default EditBooks
