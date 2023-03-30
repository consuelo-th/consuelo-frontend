import React, { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/common/button";
import Spinner from "../../components/common/spinner";
import { getBlogs } from "../../services/blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getBlogs();
        setBlogs(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  (blogs);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>An error occured...</div>;
  }

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold text-primary-110">Blog</h1>
      </div>
      <div className="p-2 space-y-4">
        {blogs.map((blog, idx) => {
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              body={blog.body + blog.body + blog.body}
              image="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
