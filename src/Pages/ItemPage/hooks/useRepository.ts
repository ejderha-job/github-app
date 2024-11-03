import { useGate, useUnit } from "effector-react";
import { $repository, ItemPageGate } from "../model/model";
import { Repository } from "../type/type";

type useRepositoryType = () => Repository | null

export const useRepository:useRepositoryType = () => {
    useGate(ItemPageGate)
    return useUnit($repository)
}