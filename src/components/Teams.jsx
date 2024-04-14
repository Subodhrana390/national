import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import ProgOfficer from "../assets/Jasvir.jpg";
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

  document.title = "Team | National Service Scheme";
  return (
    <div className="w-full">
      <div className="w-full px-16 py-4">
        <h1 className="font-semibold text-2xl ">
          Our <span className="underline">Team</span>
        </h1>
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
          <div className="col-span-1 flex flex-col justify-center items-center gap-2">
            <img
              src={ProgOfficer}
              alt=""
              className="h-[150px] w-[150px] bg-[#34A2DD] aspect-square rounded-full object-cover"
            />
            <div className="img-content text-center">
              <h1 className="font-semibold">Prof. Jasvir Singh Grewal</h1>
              <h3 className="font-semibold">Programme Officer</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-h-min px-10 md:px-20 flex flex-wrap justify-center items-center gap-8">
        {data.posts.map((Element) => (
          <div>
            <h1 className="text-center pt-10 font-bold text-2xl underline">
              {Element.name}
            </h1>
            <div className="flex justify-center md:justify-start flex-wrap gap-5">
              {Element.member.map((item) => (
                <div
                  className="img h-[150px]  md:h-[180px] w-[140px] my-3
                 md:my-6"
                >
                  <img
                    src={item.image.url}
                    className="w-full bg-[#34A2DD] aspect-square rounded-full object-cover"
                    alt=""
                    loading="lazy"
                  />
                  <p className="faculty_name text-center py-1 text-sm font-semibold">
                    {item.name}
                  </p>
                  <p className="col-span-full text-center pb-2 text-sm">
                    {item.branch}
                  </p>
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
