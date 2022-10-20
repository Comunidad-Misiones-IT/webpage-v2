import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        body,
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
        <div className="body-font text-center p-6">
          <h1>Eventos proximos</h1>
            <h6 className="leading-relaxed">
              Enterate de lo que se viene y reviví los eventos pasados.
            </h6>
          <div className="p-4 flex flex-wrap text-left">
                  {allPostsData &&
                        allPostsData.map((post, index) => (
                          <Link to={"/eventos/" + post.slug.current} key={post.slug.current}>
                              <div className="border-2 flex flex-wrap border-gray-200 rounded-lg overflow-hidden my-1">
                                <div className="md:w-1/4 w-full">
                                  <img className="md:h-50 md:w-50 object-center" src={post.mainImage.asset.url} alt={post.title} title={post.title} />
                                </div>
                                <div className="md:w-3/4 w-full p-4">
                                  <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">{post.title}</h2>
                                  <BlockContent
                                    blocks={post.body}
                                    projectId={sanityClient.clientConfig.projectId}
                                    dataset={sanityClient.clientConfig.dataset}
                                  />
                                  <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                                    <p className="text-mit inline-flex items-center">
                                      Ver más
                                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                      </svg>
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </Link>
                        ))}
                        </div>
                      </div>
  );
}