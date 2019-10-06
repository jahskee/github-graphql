import { gql } from 'apollo-boost';

const getFollowersQuery = function (ownerId: string) {
  const dQuery = `
    query{
      node(id: \"${ownerId}\") {
        ... on User {
           followers (first: 100) {
             nodes {
               name
             }
           }
         }
       }
    }
  `;
  console.log(dQuery);
  return gql`${dQuery}`;
}

export default getFollowersQuery;