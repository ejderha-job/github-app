import { useGate, useUnit } from "effector-react";
import { $repository, ItemPageGate } from "../model/model";
import { Repository } from "../type/type";
import { useParams } from "react-router-dom";

type useRepositoryType = () => Repository | null

export const useRepository:useRepositoryType = () => {
    const {author, title} = useParams()
    useGate(ItemPageGate, {author, title})
    return useUnit($repository)
}