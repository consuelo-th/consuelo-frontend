import React from "react";
import { Routes, Route } from "react-router-dom";
import getUser from "./services/user";
import "./App.css";
import { 
  Landing,
  Auth,
  Layout, 
  AdminBlog, 
  AdminBlogs, 
  AdminHome, 
  Profile,
  Community,
  AdminSelfAffirmation, 
  FeedbackandReviews, 
  AdminMentalHealthTips, 
  BasicHome,
  BasicBlog,
  BasicBlogs,
  BasicSelfAffirmation,
  BasicMentalHealthTips,
  NoPage,
  Logout
} from "./index";
import Protected from "./pages/Protected";
import BasicLayout from "./layout/BasicLayout";
import ABoutUs from "./pages/landingPages/AboutUs";
import Blog from "./pages/landingPages/Blog";

function App() {
  const user = getUser();

  

  return (
    
    <Routes>
      <Route element={<BasicLayout />}>
        <Route index element={<Landing />} />
        <Route exact path="about" element={<ABoutUs />} />
        <Route exact path="blog" element={<Blog />} />
      </Route>  
      <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={
          <Protected>
            <Layout />
          </Protected>
        }>
          <Route index element={user.isAdmin ? <AdminHome /> : <BasicHome />} />
          <Route path="home" element={user.isAdmin ? <AdminHome /> : <BasicHome />} />
          <Route path="self-affirmation" element={user.isAdmin ? <AdminSelfAffirmation /> : <BasicSelfAffirmation />} />
          <Route path="mental-health-tips" element={user.isAdmin ? <AdminMentalHealthTips /> : <BasicMentalHealthTips />} />
          <Route path="community" element={<Community />} />
          <Route path="blogs" element={user.isAdmin ? <AdminBlogs /> : <BasicBlogs />} />
          <Route path="blog/:id" element={user.isAdmin ? <AdminBlog /> : <BasicBlog />} />
          <Route path="feedbacks" element={<FeedbackandReviews />} />
        </Route>
        <Route path="/me" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
