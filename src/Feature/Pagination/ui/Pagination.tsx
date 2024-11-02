import { memo, useState } from "react"
import style from "./Pagination.module.css"

export const Pagination = memo(() => {
  const pages = Array(10).fill(0)
  const [page, setPage] = useState(1)
  const handlerPagination = (page:number) => () => {
    setPage(page)
  }
  return <div>
    {pages.map((_, index) => <button key={index} className={style.btn_active} style={{backgroundColor: page === index + 1 ? 'black' : undefined}} onClick={handlerPagination(index + 1)}>{index}</button>)}
  </div>
})