import { gql } from 'apollo-boost';

const getRepoListQuery = function (searchKey: string) {
  const dQuery = `
      query {
        search(
          query: "name: ${searchKey}",
          type: REPOSITORY,
          first: 15
        ) {
          repositoryCount
          repos: edges {
            repo: node {
              ... on Repository {
                owner {
                  id
                  login   
                  avatarUrl
                }
                name
                url
                description
                primaryLanguage { 
                  name 
                }
              }
            }
          }
        }
      }
    `;

  console.log(dQuery);

  return gql`${dQuery}`;
}

export default getRepoListQuery;