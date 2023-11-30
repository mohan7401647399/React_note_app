import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import Notes from './Component/Notes/Notes';
import Tasks from './Component/Tasks/Tasks';
import Archive from './Component/Archive/Archive';
import Bin from './Component/Bin/Bin';
import EditNotes from './Component/Notes/EditNotes';

function App() {
  return (
    <div className="row w-100 h-100">
      <div className='col-4 p-2 w-25 h-100'>
        <Sidebar />
      </div>
      <div className='col-8 p-2 w-75 bg-body-secondary h-100'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/search' Component={Search} />
          <Route path='/notes' Component={Notes}>
          </Route>
          <Route path='/edit/:id' Component={EditNotes}></Route>
          <Route path='/tasks' Component={Tasks} />
          <Route path='/Archive' Component={Archive} />
          <Route path='/bin' Component={Bin} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
