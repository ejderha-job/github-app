import { memo } from "react"
import style from "./List.module.css"
import { Repo } from "../../../Entity/Repo/ui/Repo"
import { Repository } from "../../../Entity/Repo/type/repo"

interface ListProps {
    search: string
    repos: Repository[]
}

export const List = memo(({ search, repos }: ListProps) => {

return <div className={style.table}>
        {repos.map((repo) => <Repo 
        defaultBranchRef={repo.defaultBranchRef}
        name={repo.name}
        stargazerCount={repo.stargazerCount}
        url={repo.url}
        />)}
    </div>
})