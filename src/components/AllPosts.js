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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Eventos próximos</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              ¡Enterate de todas las novedades!
            </p>
          </div>
          <div className="p-1 flex flex-wrap items-start">
                  {allPostsData &&
                        allPostsData.map((post, index) => (
                          <Link to={"/eventos/" + post.slug.current} key={post.slug.current}>
                            <div key={index} className="m-4 border-2 flex flex-wrap border-gray-200 rounded-lg overflow-hidden">
                              <div className="md:w-1/2 w-full mb-6 flex-shrink-0 flex flex-col">
                                <img className="xl:h-22 xl:w-22 md:h-50 md:w-50 object-center" src={post.mainImage.asset.url} alt={post.title} title={post.title} />
                              </div>
                              <div className="md:w-1/2 w-full p-6">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                                <p className="leading-relaxed">{post.title}</p>
                                <a className="text-mit inline-flex items-center mt-4">Haz click para ver más
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            </Link>
                                ))}
                          </div>
                    </div>
  );
}
