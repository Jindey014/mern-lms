import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { getBooks } from '../service/api'
import { Link } from 'react-router-dom'

const Booklist = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    getAllBooks()
  }, [])

  const getAllBooks = async () => {
    const response = await getBooks()
    setBooks(response.data)
  }

  return (
    <div style={{ width: '81%', margin: '0 auto' }}>
      <h3>Booklist</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} style={{ cursor: 'pointer' }}>
              <td>{book.bookname}</td>
              <td>{book.authname} </td>
              <td style={{ width: '300px' }}>
                <Link to={`/edit/${book._id}`}>
                  <Button variant="primary" style={{ marginRight: '20px' }}>
                    Edit
                  </Button>
                </Link>
                <Button variant="primary">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Booklist
