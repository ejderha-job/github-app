import { useGate, useUnit } from "effector-react"
import { repoList, repoListComponent } from "../model/repoList"

export const useRepo = () => {
    useGate(repoListComponent)
    
    return useUnit(repoList)
  }