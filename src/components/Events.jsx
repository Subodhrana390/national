import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import LimitedParagraph from "./LimitedParagraph";

const Events = () => {
  const [year, setYear] = useState("2022");

  const query = gql`
    query MyQuery($year: String!) {
      events(where: { year: $year }) {
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
        guest
        slug
        year
      }
    }
  `;

  const { data, loading, error } = useQuery(query, {
    variables: { year },
  });
  if (loading) return <Loader />;

  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="w-full h-full px-10  py-3 md:py-20">
      <h1 className="text-2xl font-bold py-5"> Recents Events</h1>
      <div className="Selection">
        <label htmlFor="year" className="font-bold text-xl">
          Years
        </label>
        <select
          name="year"
          id="year"
          className="ml-2 border-2"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="h-full">
        {data.events.length === 0
          ? "No Events Found"
          : data.events.map((event) => (
              <div key={event.id} className="grid grid-cols-3 gap-2 py-2">
                <div className="col-span-1 w-full  h-full md:h-[200px]">
                  <img
                    src={event.coverPage.url}
                    alt=""
                    className=" w-full h-full object-contain"
                  />
                </div>
                <div className="col-span-2">
                  <LimitedParagraph
                    text={event.shortdesc}
                    maxWords={30}
                    textStyle="text-[8px] md:text-xl font-normal mb-2"
                  />
                  <a
                    href={`/eventdetails/${event.year}/${event.slug}`}
                    className="bg-blue-600 p-1 rounded-sm text-[8px] md:text-xs font-bold"
                  >
                    Readmore
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Events;
