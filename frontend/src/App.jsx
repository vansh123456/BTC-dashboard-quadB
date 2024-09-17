import './App.css'
import { AppBar } from './components/appbar'
import { Middle } from './components/middle'
import { Table } from './components/table'

function App() {
  return (
    <div className='bg-gray-800'>
      <AppBar></AppBar>
      <Middle/>
      <Table/>
      <button type="button" class="text-teal hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal dark:text-teal dark:hover:text-white dark:hover:bg-teal dark:focus:ring-teal">Add hodlifno to home screen</button>
    </div>
  )
}

export default App
