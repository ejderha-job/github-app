import { createStore } from "effector";
import { getRepoListFX } from "../../../Entity/Repo/api/getRepositoriesList";

export const $endCursor = createStore(null)
export const $hasPreviousPage = createStore(null)
export const $hasNextPage = createStore(null)
export const $startCursor = createStore(null)

$endCursor.on(getRepoListFX.doneData, (_, data) => data.search.pageInfo.endCursor)
$hasPreviousPage.on(getRepoListFX.doneData, (_, data) => data.search.pageInfo.hasPreviousPage)
$hasNextPage.on(getRepoListFX.doneData, (_, data) => data.search.pageInfo.hasNextPage)
$startCursor.on(getRepoListFX.doneData, (_, data) => data.search.pageInfo.startCursor)