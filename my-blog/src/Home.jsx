import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      author: "Muni",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      author: "Raja",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      author: "Muni",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
