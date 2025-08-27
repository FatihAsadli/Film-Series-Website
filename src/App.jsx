
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Movieshows from './pages/movieshows/Movieshows';
import Support from './pages/support/Support';
import Subscription from './pages/subscription/Subscription';
import Movieopen from './pages/movie-open/Movieopen';
import Showmovie from './pages/show-movie/Showmovie';
import LoadingScreen from './components/loadingscreen/LoadingScreen';

const AppWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movieshows />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/movieopen" element={<Movieopen />} />
        <Route path="/show/:id" element={<Showmovie />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
