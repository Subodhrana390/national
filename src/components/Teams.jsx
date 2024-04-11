import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import ProgOfficer from "../assets/jasveer.jpg";

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
  return (
    <div className="w-full">
      <div className="px-12 py-5">
        <h1 className="">Our Team</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 my-2 gap-5">
          <div className="col-span-1 text-justify">
            Meet the dedicated team driving positive change at Guru Nanak Dev
            Engineering College's NSS Society. Led by our esteemed Programme
            Officer and Faculty Advisor, our Convenor, Co-Convenor, Secretary
            and passionate postholders, work tirelessly to shape impactful
            community initiatives. Each member brings unique skills and
            commitment to our mission, uniting to make a meaningful impact on
            society. Explore our team's profiles to discover the faces behind
            the vision, driving our NSS initiatives forward. Together, we strive
            to create a more compassionate and socially responsible world. Join
            us on this transformative journey! Prof. Jasvir Singh Grewal
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center gap-5">
            <img
              src={ProgOfficer}
              alt=""
              width={200}
              height={200}
              className=""
            />
            <div className="img-content text-center">
              <h1>Prof. Jasvir Singh Grewal</h1>
              <h3>Programme Officer</h3>
            </div>
          </div>
        </div>
      </div>
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
