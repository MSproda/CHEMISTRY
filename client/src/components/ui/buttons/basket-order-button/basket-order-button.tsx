import { FC } from 'react'
import s from './basket-order-button.module.scss'

type Props = {
    onClick: () => void
    counts: number
    totalPrice: number
}

export const BasketOrderButton: FC<Props> = ({ onClick, counts, totalPrice }) => {

    return <div onClick={onClick} className={s.btn}>
        <span className={s.btnName}>Оформить заказ</span>
        <div className={s.orderInfo}>
            <span className={s.orderCounts}>{counts} шт.,</span>
            <span className={s.orderTotal}>{totalPrice} ₽</span>
        </div>
    </div>
}