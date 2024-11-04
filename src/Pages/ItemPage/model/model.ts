import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { getRepoByNameFX } from "../../../Entity/Repo/api/getRepository";
import { Repository } from "../type/type";

export const ItemPageGate = createGate("ItemPageGate")

sample({
    clock: ItemPageGate.open,
    target: getRepoByNameFX
})

export const $repository = createStore<Repository|null>(null) 

$repository.on(getRepoByNameFX.doneData, (_, data)=> ({
    avatar:data.repository.owner.avatarUrl, 
    lastCommit:data.repository.defaultBranchRef.target.committedDate,
    description: data.repository.description,
    name: data.repository.name,
    stargazerCount: data.repository.stargazerCount,
    languages: [],
    nickname: data.repository.owner.nickname,
    profileLink: ""
}))