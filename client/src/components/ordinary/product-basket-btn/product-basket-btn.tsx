import { ProductBasketFillSvg, ProductBasketSvg } from '@/assets/icons'
import React, { FC, useState } from 'react'
import s from './product-basket-btn.module.scss'

export const ProductBasketBtn: FC<{ active: boolean, handleClick: () => void }> = ({ active, handleClick }) => {

    const [isActive, setIsActive] = useState(active)
    const [blocked, setBlocked] = useState(false)

    const handleBasketToggleClick = () => {
        if (!blocked) {
            setIsActive(!isActive)
            setBlocked(true)

            handleClick()

            setTimeout(() => {
                setBlocked(false)
            }, 700)
        }
    }

    return <div onClick={handleBasketToggleClick} className={isActive ? `${s.wrapper} ${s.active}` : `${s.unActive} ${s.wrapper}`}>

        {isActive
            ? <ProductBasketFillSvg />
            : <ProductBasketSvg />}

    </div>
}