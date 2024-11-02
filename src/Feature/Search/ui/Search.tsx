import { ChangeEvent, memo } from "react"
import style from "./Search.module.css"

interface SearchProps {
    value: string
    onChange: (e: string) => void
  }
  
  export const Search = memo(({onChange, value}: SearchProps) => {
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value)
    }
    
    return <div>
      <input type="text" value={value} className={style.search} onChange={handlerChange} />
    </div>  
  })