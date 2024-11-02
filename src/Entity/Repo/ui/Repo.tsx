import { memo } from "react"
import style from "./Repo.module.css"
import { Repository } from "../type/repo"
import { Link } from "react-router-dom"

interface RepositoryProps extends Repository {}

export const Repo = memo((props:RepositoryProps) => {
    const {defaultBranchRef, name, stargazerCount, url, id} = props
    return <Link to={`repo/${id}`} className={style.repo}>
      <div>{name}</div>
      <div>{stargazerCount}</div> 
      <div>{defaultBranchRef?.target?.committedDate}</div>
      <a href={url}>{url}</a>
    </Link>
  })