import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import LimitedParagraph from "./LimitedParagraph";

const EventDetails = () => {
  const { year, slug } = useParams();
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
  document.title = `${slug.split("-").join(" ")} | Event`;

  return (
    <div className={``}>
      {/* Event Details */}
      <div className="h-max xs:px-4 sm:px-10 md:px-20 ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-2">
            {Links.map((path) => (
              <li class="breadcrumb-item">
                <a
                  href={`/${
                    path == year
                      ? "events"
                      : path == slug
                      ? `events/${year}/${slug}`
                      : ""
                  }`}
                  className="font-bold"
                >
                  {path == ""
                    ? "HOME"
                    : path == slug
                    ? `${path.split("-").join(" ").toUpperCase()}`
                    : path.toUpperCase()}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="px-4 md:px-32 py-4 md:py-3 text-3xl font-extrabold text-center border-2 my-2">
          {data.event.title}
        </h1>
        <div className="max-h-max grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-28">
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
          <div className="w-full h-full md:h-full flex items-center col-span-1">
            <img src={data.event.coverPage.url} alt="" />
          </div>
        </div>
      </div>
      {/* Glimpses of event */}
      <div className=" my-2">
        <h3 className="my-2 font-bold text-xl text-center">
          Glimpses of event
        </h3>
        <div className="h-max px-10 md:px-32">
          {data.event.image.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-2">
              {data.event.image.map((pics, index) => (
                <img
                  key={index}
                  className="object-contain w-full h-30 max-w-full rounded-lg"
                  src={pics.url}
                  alt="gallery"
                />
              ))}
            </div>
          ) : (
            <h1>No image Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
