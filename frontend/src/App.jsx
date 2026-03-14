import {Toaster, toast} from 'sonner';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path ="/"
            element = {<HomePage/>}
          />
          <Route 
            path ="*"
            element = {<LoginPage/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
