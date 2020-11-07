import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="p-4">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/eventos/" + post.slug.current} key={post.slug.current}>
              <span className="p-4">
                <h1>
                  <strong>{post.title}</strong>
                </h1>
              </span>
              <span key={index}>
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  title={post.title}
                  width={240}
                />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
