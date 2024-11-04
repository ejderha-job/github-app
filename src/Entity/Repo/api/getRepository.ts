import { createEffect } from "effector"
import { graphQLRequest } from "../../../Shared/api/api"

const getRpositoryByName = `query getRepositoryInfo{
  repository(owner:"sindresorhus", name:"awesome"){
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

export const getRepoByNameFX = createEffect(async () => graphQLRequest(getRpositoryByName))