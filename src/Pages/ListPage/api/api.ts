import axios from "axios"
import { createEffect } from "effector"

const query = `query {
	search(query:"is:public", type:REPOSITORY, first:10){
    edges{
      node{
        ... on Repository {
          name
          stargazerCount
          url
          id
          defaultBranchRef{
            target{
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

export const getRepoListFX = createEffect(async () => axios.post(import.meta.env.VITE_API, { query }, 
  { headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`}}
))