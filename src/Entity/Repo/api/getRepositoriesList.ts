import { createEffect } from "effector"
import { graphQLRequest } from "../../../Shared/api/api"

const getRepositories = (pagination:string) => `query {
	search(query:"is:public", type:REPOSITORY ${pagination}) {
  pageInfo{
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
    }  
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

export const getRepoListFX = createEffect(async (pagination: string) => graphQLRequest(getRepositories(pagination)))