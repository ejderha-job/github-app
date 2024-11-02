import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { getRepoListFX } from "../api/api";

export const repoListComponent = createGate("repoListComponent")

sample({
    clock: repoListComponent.open,
    target: getRepoListFX
})

export const repoList = createStore([])

repoList.on(getRepoListFX.doneData, (_, data) => data.data.data.search.edges.map(el => el.node) )