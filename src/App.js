// import logo from './logo.svg';
import './App.css';
import Main from './Pages/main';
import { Route, Routes } from "react-router-dom";
import {useEffect} from "react";
import Team from "./Pages/team";
import Roadmap from "./Pages/roadmap";
import Quest from "./Pages/quest";
import Whitepaper from "./Pages/whitepaper";


function App() {
    useEffect(() => {
        console.log('hello, world')
    }, [])
  return (
      <>
          <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/team' element={<Team />} />
              <Route exact path='/roadmap' element={<Roadmap />} />
              <Route exact path='/quest' element={<Quest />} />
              <Route exact path='/whitepaper' element={<Whitepaper />} />
          </Routes>
      </>
  );
}

export default App;
