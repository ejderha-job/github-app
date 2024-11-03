import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { getRepoListFX } from "../api/api";

export const repoListComponent = createGate("repoListComponent")

export const $repoList = createStore([])

sample({
    clock: repoListComponent.open,
    filter(src) {
        return !src.length
    },
    source: $repoList,
    target: getRepoListFX
})

$repoList.on(getRepoListFX.doneData, (_, data) => data.search.edges.map(el => el.node) )