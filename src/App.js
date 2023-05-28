import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/home'
import About from './views/about'
import Project from './views/project'


function App() {
  return (
    <Router>
<Routes>
  <Route path={'/'}  element={<Home/>}/>
 <Route path={'/about'}  element={<About/>}/>
 <Route path={'/projects'}  element={<Project/>}/> 
</Routes>

    </Router>
  );
}

export default App;
