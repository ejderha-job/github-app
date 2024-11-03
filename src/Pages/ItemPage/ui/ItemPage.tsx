import { memo } from "react";
import style from "./ItemPage.module.css";
import { useNavigate } from "react-router-dom";
import { useRepository } from "../hooks/useRepository";

export const ItemPage = memo(() => {
    const repository = useRepository()
    const nav = useNavigate()
    const handlerClick = () => {
        nav(-1)
    }
    console.log({repository});
    if (!repository) {
        return null
    }

    return <div className={style.container}>
        <header className={style.header}>
            <button onClick={handlerClick} className={style.home}>go to the list</button>
        </header>
        <div className={style.body}>
            <div className={style.author}>
                <div>
                    <img src={repository.avatar} alt="repo-owner-avatar" className={style.avatar} />
                </div>
                <div>
                    Автор репозитория: <b>{repository.nickname}</b>
                </div>
            </div>
            <div className={style.repository}>
                <div>
                    Имя репозитория: <b>{repository.name}</b>
                </div>
                <div>
                    Описание репозитория: <b>{repository.description}</b>
                </div>
                <div>
                    Звёзды репозитория: <b>{repository.stargazerCount}</b>
                </div>
                <div>
                    Дата последнего коммита: <b>{repository.lastCommit}</b>
                </div>
            </div>
        </div>
    </div>
})