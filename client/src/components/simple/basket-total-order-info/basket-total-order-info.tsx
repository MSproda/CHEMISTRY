import { FC } from 'react'
import s from './basket-total-order-info.module.scss'

type Props = {
    counts: number
    price: number
}

export const BasketTotalOrderInfo: FC<Props> = ({ counts, price }) => {

    return <div className={s.wrapper}>
        <h5 className={s.title}>Ваша корзина</h5>

        <div className={s.counts}>
            <p className={s.name}>количество товаров <span>({counts})</span></p>
        </div>

        <div className={s.counts}>
            <span className={s.name}>сумма заказа</span>
            <span className={s.dots}></span>
            <span className={s.price}>{price} ₽</span>
        </div>
    </div>
}