"use client";
import React, { useEffect } from "react";

const Comments = () => {
  useEffect(() => {
    if (window && document) {
      var d = document,
        s = d.createElement("script");
      s.src = "https://johnnyvishnevskiy-com.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h3 className="text-4xl font-bold text-center mb-4">Comments</h3>
      <p className="text-xl text-center mb-4">
        Please leave your comments below!
      </p>
      <div id="disqus_thread"></div>
    </div>
  );
};

export default Comments;
