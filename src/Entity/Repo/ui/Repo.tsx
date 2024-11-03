import { memo } from "react"
import style from "./Repo.module.css"
import { Repository } from "../type/repo"
import { Link } from "react-router-dom"
import { Text } from "../../../Shared/Text/Text"

interface RepositoryProps extends Repository {}

export const Repo = memo((props:RepositoryProps) => {
    const {defaultBranchRef, name, stargazerCount, url, id} = props
    
    return <Link to={`repo/${id}`} className={style.repo}>
      <Text>Название: {name}</Text>
      <Text>Звёзды: {stargazerCount}</Text> 
      <Text>{defaultBranchRef?.target?.committedDate}</Text>
      <a href={url}>{url}</a>
    </Link>
  })