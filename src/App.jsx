
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./HomeButton/login";
import AddMovie from "./HomeButton/AddMovie";
import Window from "./movie/window";
import About from "./HomeButton/about";
import Watchlist from "./HomeButton/watchlist";
import Home from "./movie/home";


export default function App() {


 
  return (
 
    
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/log" element={<Home/>}/> 
      <Route path="/addmovie" element={<AddMovie/>}/>
     <Route path="/windo" element={<Window />} />
      <Route path="/MovieList" element={<Window/>}/>
      <Route path="/about" element={<About/>}/>
        <Route path="/watchlist" element={<Watchlist/>} />
      {/* <Route path="/watchlist" element={<Watchlist/>}/> */}
     
   
    </Routes>
   </BrowserRouter>
   
  )
}