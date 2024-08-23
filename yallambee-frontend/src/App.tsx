import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import CreateProfilePage from './pages/CreateProfilePage.tsx'; // Import the Create Profile Page

function App() {
  return (
    <Router>
      <Header>
        <NavBar /> {/* NavBar is nested inside Header */}
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-profile" element={<CreateProfilePage />} /> {/* Add this route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
