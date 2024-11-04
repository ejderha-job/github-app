import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { getRepoListFX } from "../../../Entity/Repo/api/getRepositoriesList";
import { Repository } from "../../../Entity/Repo/type/repo";

export const repoListComponent = createGate("repoListComponent")

export const $repoList = createStore<Repository[]>([])

sample({
    clock: repoListComponent.open,
    fn: () => "first: 10",
    filter: (src) => !src.length,
    source: $repoList,
    target: getRepoListFX
})

$repoList.on(getRepoListFX.doneData, (_, data) => data.search.edges.map(el => el.node) )