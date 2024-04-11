import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
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
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export { getPosts };
