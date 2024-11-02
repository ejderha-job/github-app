import { memo, useCallback, useState } from "react"
import style from "./RepoList.module.css"
import { List } from "../../../Feature/List/ui/List"
import { Search } from "../../../Feature/Search/ui/Search"
import { Pagination } from "../../../Feature/Pagination/ui/Pagination"
import { useRepo } from "../hooks/hooks"

export const ListPage = memo(() => {
  const list = useRepo()
  const [value, setValue] = useState("")
  
  const handlerChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return <div className={style.wrapper}>
    <Search onChange={handlerChange} value={value} />
    <List repos={list} search={value} />
    <Pagination />
  </div>
})