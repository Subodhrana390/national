import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import FullScreenImage from "./FullScreenImage";
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
  return (
    <>
      {/* Event Details */}
      <div className="h-max">
        <h1 className=" px-4 md:px-32 py-4 md:py-10">{data.event.title}</h1>
        <div className="max-h-max grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-32">
          <div className="col-span-2">
            <h3>About The Event</h3>
            <LimitedParagraph
              text={data.event.desc}
              maxWords={100}
            ></LimitedParagraph>
            <div>
              <h3>🌸 Event details🌸</h3>
              <ul>
                <li>Date: {data.event.date}</li>
                <li>
                  Time: {new Date(data.event.startingTime).toLocaleTimeString()}{" "}
                  - {new Date(data.event.endingTime).toLocaleTimeString()}
                </li>
                <li>Venue : {data.event.venue}</li>
                <li>guest : {data.event.guest}</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full md:h-[250px] col-span-1">
            <img src={data.event.coverPage.url} alt="" />
          </div>
        </div>
      </div>
      {/* Glimpses of event */}
      <div>
        <h3 className="my-5 font-bold text-xl text-center">
          Glimpses of event
        </h3>
        <div className="h-max px-10 md:px-32">
          {data.event.image.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
              {data.event.image.map((pics) => (
                <FullScreenImage
                  imgStyle="object-contain w-full h-30 max-w-full rounded-lg"
                  src={pics.url}
                  alt="gallery-photo"
                />
              ))}
            </div>
          ) : (
            <h1>No image Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default EventDetails;
