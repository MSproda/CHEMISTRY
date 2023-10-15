import { FC, useState } from 'react'
import s from './product-view-baket-btn.module.scss'

export interface IBasketBtn {
    price: string
    active?: boolean
    handleClick: () => void
}

export const ProductViewBasketBtn: FC<IBasketBtn> = ({ price, active, handleClick }) => {
    const [isActive, setIsActive] = useState(active)
    const [blocked, setBlocked] = useState(false)

    const fnAddToBasket = async () => {
        if (!blocked) {
            setIsActive(!isActive)
            setBlocked(true)

            handleClick()

            setTimeout(() => {
                setBlocked(false)
            }, 700)
        }
    }

    return <div className={s.wrapper}>
        <div onClick={() => fnAddToBasket()} className={!isActive ? `${s.content} ${s.contentActive}` : `${s.content}`}>
            {
                active ? <span>В корзине</span> : <div>
                    <span className={s.text}>В корзину</span>
                    <span className={s.price}>{price} ₽</span>
                </div>
            }
        </div>
    </div>
}