import React, { FC, useState } from 'react'
import s from './basket-card-counter.module.scss'

type Props = {
    increaseQty: () => void
    decreaseQty: () => void
    count: number
}

export const BasketProductCounter: FC<Props> = ({ count, increaseQty, decreaseQty }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleIncreaseQty = () => {
        setIsActive(!isActive)
        increaseQty()
    }

    const handleDecreaseQty = () => {
        if (count !== 1) {
            setIsActive(!isActive)
            decreaseQty()
        }
    }

    return <div className={s.wrapper}>
        <div className={s.content}>
            <span onClick={handleIncreaseQty} className={s.plus}></span>
            <span className={isActive ? `${s.count} ${s.render}` : `${s.count} ${s.rerender}`}>{count}</span>
            <span style={{ opacity: count === 1 ? `.7` : '1' }} onClick={handleDecreaseQty} className={s.minus}></span>
        </div>
    </div>
}