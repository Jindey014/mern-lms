import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddBooks from './component/AddBooks'
import EditBooks from './component/editBooks'
import Booklist from './component/Booklist'
import Navigationbar from './component/Navigationbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" Component={Booklist} />
          <Route path="/edit/:id" Component={EditBooks} />
          <Route path="/create" Component={AddBooks} />
        </Routes>
      </Router>
    </>
  )
}

export default App
