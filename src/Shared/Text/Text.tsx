import { memo, PropsWithChildren } from "react";
import style from "./Text.module.css";

interface TextProps extends PropsWithChildren {}

export const Text = memo(({children}: TextProps) => {
    return (
        <p className={style.text}>{children}</p>
    )
})