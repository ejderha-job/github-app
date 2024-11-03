import { memo, useState } from "react"
import style from "./Pagination.module.css"
import cls from "classnames"

const pagesCount = 10

export const Pagination = memo(() => {
  const pages = Array(pagesCount).fill(0)
  const [page, setPage] = useState(1)
  const handlerPagination = (page:number) => () => {
    setPage(page)
  }
  
  return <div className={style.pagination}>
    {pages.map((_, index) => 
      <button 
      key={index} 
      className={cls([style.btn, page === index + 1 && style.btn_active])} 
      onClick={handlerPagination(index + 1)}>{index + 1}</button>)}
  </div>
})