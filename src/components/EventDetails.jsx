import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import LimitedParagraph from "./LimitedParagraph";
import { useState } from "react";

const EventDetails = () => {
  const { year, slug } = useParams();
  const [fullScreenOpen, setFullScreenOpen] = useState(false);

  const query = gql`
    query MyQuery($slug: String!) {
      event(where: { slug: $slug }) {
        title
        shortdesc
        desc
        date
        venue
        image {
          url
        }
        coverPage {
          url
        }
        startingTime
        endingTime
        guest
        year
      }
    }
  `;

  const { data, loading, error } = useQuery(query, { variables: { slug } });
  if (loading) return <Loader />;
  if (error) return <pre>{error.message}</pre>;

  let Links = window.location.pathname.split("/");
  console.log(Links);

  return (
    <div className={``}>
      {/* Event Details */}
      <div className="h-max px-10 md:px-28 ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-2">
            {Links.map((path) => (
              <li class="breadcrumb-item">
                <a href={`/${path}`} className="font-bold">
                  {path == "" ? "HOME" : path.toUpperCase()}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="px-4 md:px-32 py-4 md:py-3 text-3xl font-extrabold text-center border-2 my-2">
          {data.event.title}
        </h1>
        <div className="max-h-max grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-32">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold my-2">About The Event</h3>
            <LimitedParagraph
              textStyle="text-black text-justify py-2 font-semibold "
              text={data.event.desc}
              maxWords={100}
            ></LimitedParagraph>
            <div>
              <h3>
                <span className=" font-serif font-bold my-2 text-2xl">
                  Event Details
                </span>
              </h3>
              <ul>
                <li className="font-bold">Date: {data.event.date}</li>
                <li className="font-bold">
                  Time: {new Date(data.event.startingTime).toLocaleTimeString()}{" "}
                  - {new Date(data.event.endingTime).toLocaleTimeString()}
                </li>
                <li className="font-bold">Venue : {data.event.venue}</li>
                <li className="font-bold">Guest : {data.event.guest}</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full md:h-[250px] col-span-1">
            <img src={data.event.coverPage.url} alt="" />
          </div>
        </div>
      </div>
      {/* Glimpses of event */}
      <div className="">
        <h3 className="my-5 font-bold text-xl text-center">
          Glimpses of event
        </h3>
        <div className="h-max px-10 md:px-32">
          {data.event.image.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
              {data.event.image.map((pics, index) => (
                <img
                  key={index}
                  className="object-contain w-full h-30 max-w-full rounded-lg"
                  src={pics.url}
                  alt="gallery"
                  // onClick={() => {
                  //   document.getElementById("fullScreenView").src = pics.url;
                  //   setFullScreenOpen(!fullScreenOpen);
                  // }}
                />
              ))}
            </div>
          ) : (
            <h1>No image Found</h1>
          )}
        </div>
        {/* FullScreen photo */}
        {/* <div
          className={` relative bg-[rgba(0,0,0,.9)] z-20 ${
            fullScreenOpen ? "block" : "hidden"
          } flex justify-center items-center`}
        >
          <img
            src=""
            alt="img"
            className="padding-[px] max-w-[50%] max-h-[50%]"
            id="fullScreenView"
          />
          <div
            className="absolute top-10 right-10 w-10 h-10 text-white"
            onClick={() => setFullScreenOpen(!fullScreenOpen)}
          >
            X
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventDetails;
