import { memo, PropsWithChildren } from "react"
import style from "./Title.module.css"

interface TitleProps extends PropsWithChildren {}

export const Title = memo(({children}: TitleProps) => {
    return (
        <div className={style.title}>{children}</div>
    )
})