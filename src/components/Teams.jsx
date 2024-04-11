import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";

const Teams = () => {
  const query = gql`
    query MyQuery {
      posts(first: 15) {
        name
        member {
          ... on Member {
            id
            name
            branch
            image {
              url
            }
          }
        }
        slug
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  if (loading) return <Loader />;
  if (error) return <pre>{error.message}</pre>;

  console.log(data);
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        {data.posts.map((Element) => (
          <div>
            <h1 className="text-center mb-5">{Element.name}</h1>
            <div className="flex justify-center flex-wrap gap-5">
              {Element.member.map((item) => (
                <div className="img h-40 w-40">
                  <img
                    src={item.image.url}
                    className="rounded w-full "
                    alt=""
                    loading="lazy"
                  />
                  <p className="faculty_name">{item.name}</p>
                  <p className="col-span-full">{item.branch}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
