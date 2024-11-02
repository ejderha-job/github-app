import { memo } from "react"
import style from "./Repo.module.css"
import { Repository } from "../type/repo"

interface RepositoryProps extends Repository {}

export const Repo = memo((props:RepositoryProps) => {
    const {defaultBranchRef, name, stargazerCount, url} = props
    return <div className={style.repo}>
      <div>{name}</div>
      <div>{stargazerCount}</div> 
      <div>{defaultBranchRef?.target?.committedDate}</div>
      <a href={url}>{url}</a>
    </div>
  })