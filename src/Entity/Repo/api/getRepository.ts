import { createEffect } from "effector"
import { graphQLRequest } from "../../../Shared/api/api"

const getRpositoryByName = (query:string) => `query getRepositoryInfo{
  repository(${query}){
    owner {
      avatarUrl
      nickname:login
    }
    name
    description
    stargazerCount
    languages(first:10){
      nodes{
        name
      }
    }
    defaultBranchRef {
      target {
        ... on Commit {
          committedDate
          }
        }
      }
  }
}`

export const getRepoByNameFX = createEffect(async (query:string) => graphQLRequest(getRpositoryByName(query)))