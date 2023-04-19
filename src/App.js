import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route index element={<PersonList/>}/>
        <Route path="footer" element={<Footer/>}/>
        <Route path="header" element={<Header/>}/>
        <Route path="todo" element={<Todo/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
