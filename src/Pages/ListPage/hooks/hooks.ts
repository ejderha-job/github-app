import { useGate, useUnit } from "effector-react"
import { $repoList, repoListComponent } from "../model/repoList"
import { getRepoListFX } from "../../../Entity/Repo/api/getRepositoriesList"

export const useRepo = () => {
    useGate(repoListComponent)
    return useUnit({list:$repoList, isLoading:getRepoListFX.pending})
  }