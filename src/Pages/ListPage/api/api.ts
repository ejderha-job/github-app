import { createEffect } from "effector"
import { graphQLRequest } from "../../../Shared/api/api"

const getRepositories = `query {
	search(query:"is:public", type:REPOSITORY, first:10){
    edges {
      node {
        ... on Repository {
          name
          stargazerCount
          url
          id
          defaultBranchRef {
            target {
              ... on Commit {
                committedDate
              }
            }
          }
        }
      }
    }
  }
}`

export const getRepoListFX = createEffect(async () => graphQLRequest(getRepositories))