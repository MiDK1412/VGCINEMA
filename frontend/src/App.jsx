import {Toaster, toast} from 'sonner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "./contexts/booking_context";

import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import MovieDetailPage from "./pages/movie_details_page"
import BookingPage from "./pages/booking_page"
import PaymentPage from "./pages/payment_page"

function App() {
  
  return (
    <>
      <BookingProvider>
        <BrowserRouter>
          <Routes>
            <Route 
              path ="/"
              element = {<HomePage/>}
            />
            <Route 
              path ="/login"
              element = {<LoginPage/>}
            />
            <Route 
              path ="/movie/:id"
              element = {<MovieDetailPage/>}
            />
            <Route 
              path ="/booking/:id"
              element = {<BookingPage/>}
            />
            <Route 
              path ="/payment"
              element = {<PaymentPage/>}
            />
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </>
  );
}

export default App
