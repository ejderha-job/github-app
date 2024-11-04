import { memo } from "react"
import style from "./Repo.module.css"
import { Repository } from "../type/repo"
import { Link } from "react-router-dom"
import { Text } from "../../../Shared/Text/Text"
import { Title } from "../../../Shared/Title/Title"

interface RepositoryProps extends Repository {}

export const Repo = memo((props:RepositoryProps) => {
    const {defaultBranchRef, name, stargazerCount, url} = props
    const path = url.split("github.com")[1]
    return <Link to={`repo${path}`} className={style.repo}>
      <Title>{name}</Title>
      <Text>Звёзды: {stargazerCount}</Text> 
      <Text>{defaultBranchRef?.target?.committedDate}</Text>
      <a href={url}>{url}</a>
    </Link>
  })