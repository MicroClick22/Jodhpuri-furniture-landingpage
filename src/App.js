import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <Home/>}> </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
