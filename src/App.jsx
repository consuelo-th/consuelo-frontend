import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './pages/Blog';
import Blogs from './pages/AllBlogs';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import SelfAffirmation from './pages/SelfAffirmation';
import MentalHealthTips from './pages/MentalHealthTips';
import Forum from './pages/Forum';
import Profile from './pages/Profile';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="self-affirmation" element={<SelfAffirmation />}/>
          <Route path="mental-health-tips" element={<MentalHealthTips />}/>
          <Route path="forum" element={<Forum />}/>
          <Route path="blogs" element={<Blogs />}/>
          <Route path="blog/:id" element={<Blog />}/>
          <Route path="community" />
        </Route>
        
        <Route path="/me" element={<Profile />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
  )
    
}

export default App