import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "tag": category->title,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Cargando...</div>;

  return (
    <div className="p-12 flex flex-wrap items-start">
      <div className="border-2 flex flex-wrap border-gray-200 rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-full">
          <img className="h-25 w-25 object-center" src={urlFor(postData.mainImage).url()} alt="blog" />
        </div>
        <div className="md:w-1/2 w-full p-6">
          <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">{postData.title}</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{postData.title}</h2>
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
          <br/>
          ¡No te lo pierdas!
          <br/>
          www.comit.ar
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
            <a href="https://www.youtube.com/channel/UCLhrmyFEehkHytx89La2ENQ" className="text-indigo-500 inline-flex items-center">
              Ver evento
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div> 
          <a className="inline-flex items-center">
            <img alt="blog" src={urlFor(postData?.authorImage).width(100).url()} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">{postData.name}</span>
              <span className="text-gray-500 text-sm">AUTOR DEL POST</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
