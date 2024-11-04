import { memo, useState } from "react"
import style from "./Pagination.module.css"
import cls from "classnames"
import { getRepoListFX } from "../../../Entity/Repo/api/getRepositoriesList"
import { useUnit } from "effector-react"
import { $endCursor, $hasNextPage, $hasPreviousPage, $startCursor } from "../model/pagination"

const pagesCount = 10

export const Pagination = memo(() => {
  const [endCursor, hasPreviousPage, hasNextPage, startCursor] = useUnit([$endCursor, $hasPreviousPage, $hasNextPage, $startCursor])
  const pages = Array(pagesCount).fill(0)
  const [page, setPage] = useState(1)
  const handlerPagination = (newPage:number) => () => {
    const isSamePage = newPage === page
    if (isSamePage) return
    const isNextPage = newPage > page
    if (isNextPage && hasNextPage) {
      getRepoListFX("first: 10, after: " + JSON.stringify(endCursor))
      setPage(prev => prev + 1)
    } else {
      if (hasPreviousPage) {
        getRepoListFX("last: 10, before: " + JSON.stringify(startCursor))
        setPage(prev => prev - 1)
      }
    }
  }
  
  return <div className={style.pagination}>
    {pages.map((_, index) => 
      <button 
      key={index} 
      className={cls([style.btn, page === index + 1 && style.btn_active])} 
      onClick={handlerPagination(index + 1)}>{index + 1}</button>)}
  </div>
})