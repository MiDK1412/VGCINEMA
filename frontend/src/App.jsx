import {Toaster, toast} from 'sonner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { BookingProvider } from "./contexts/booking_context";
import { AuthProvider } from "./contexts/auth_context";

import Navbar from "./components/navbar";
import AuthModal from "./components/auth/auth_modal"
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import MovieDetailPage from "./pages/movie_details_page"
import BookingPage from "./pages/booking_page"
import PaymentPage from "./pages/payment_page"

function App() {
  
   const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <AuthProvider>
        <BookingProvider>
          <BrowserRouter>
            <Navbar onOpenAuth={() => setShowAuthModal(true)} />
            <Routes>
              <Route 
                path ="/"
                element = {<HomePage/>}
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
            {/* Modal global */}
            <AuthModal />
          </BrowserRouter>
        </BookingProvider>
      </AuthProvider>
    </>
  );
}

export default App
