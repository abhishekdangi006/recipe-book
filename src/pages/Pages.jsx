import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Searchresult from './Searchresult';
import Recipe from './Recipe';

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searchresult/:search' element={<Searchresult/>} />
        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </div>
  )
}

export default Pages;
