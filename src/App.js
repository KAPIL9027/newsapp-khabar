
import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar"
import {useState} from "react"
import Spinner from "./Components/Spinner"

function App() {
  const [progress,setProgress] = useState(0);
  return (
   <>
   <BrowserRouter>
   
   <Navbar/>
   <LoadingBar
    height={3}
    color='#f11946'
    progress={progress} 
   />
   <Routes>
   <Route path = "/" element={<News setProgress = {setProgress} key="general" category="general"/>}></Route>
    <Route path = "/general" element={<News setProgress = {setProgress} key="general" category="general"/>}></Route>
    <Route path = "/business" element={<News setProgress = {setProgress} key="business" category="business"/>}></Route>
    <Route path = "/entertainment" element={<News setProgress = {setProgress} key="entertainment" category="entertainment"/>}></Route>
    <Route path = "/health" element={<News setProgress = {setProgress} key="health" category="health"/>}></Route>
    <Route path = "/science" element={<News setProgress = {setProgress} key="science" category="science"/>}></Route>
    <Route path = "/sports" element={<News setProgress = {setProgress} key="science" category="sports"/>}></Route>
    <Route path = "/technology" element={<News setProgress = {setProgress} key="technology" category="technology"/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
