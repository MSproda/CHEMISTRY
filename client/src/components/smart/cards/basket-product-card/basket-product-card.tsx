import { DeleteSvg } from '@/assets/icons'
import { BasketProductCounter } from '@/components/ordinary/basket-card-counter/basket-card-counter'
import { useFormattingPrice } from '@/core/helpers/price'
import { IBasketProduct } from '@/core/models/basket.model'
import { IProduct } from '@/core/models/product.model'
import Image from 'next/image'
import s from './basket-product-card.module.scss'

type Props = {
    data: IBasketProduct
    handleBasketToggleClick: (product: IProduct) => void
    handleIncreaseQtyClick: (id: number) => void
    handleDecreaseQtyClick: (id: number) => void
}

export const BasketProductCard: React.FC<Props> = ({ data, handleBasketToggleClick, handleDecreaseQtyClick, handleIncreaseQtyClick }) => {
    const { quantity, product } = data

    const discountTotal = product.price * quantity

    const { result: totalPrice } = useFormattingPrice(discountTotal)
    const { result: Price } = useFormattingPrice(product.price)

    return <li onClick={(e) => e.stopPropagation()} className={s.wrapper}>
        <div className={s.container}>

            <div className={s.content}>
                <div className={s.img}>
                    <Image
                        fill={true}
                        objectFit='scale-down'
                        src={product.image}
                        sizes='(max-width: 768px) 210px'
                        alt="product"
                        placeholder='blur'
                        blurDataURL={product.image}
                    />
                </div>

                <div className={s.info}>

                    <div className={s.price}>

                        <p>{Price} ₽</p>
                    </div>

                    <span lang="ru" className={s.name}>{product.name}</span>

                    <BasketProductCounter
                        count={quantity}
                        increaseQty={() => handleIncreaseQtyClick(product.id)}
                        decreaseQty={() => handleDecreaseQtyClick(product.id)}
                    />

                    <div className={s.actions}>
                        <div className={s.total}>Итого: <span>{totalPrice} ₽</span></div>

                        <span onClick={() => handleBasketToggleClick(product)} className={s.delete}>
                            <DeleteSvg />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </li>
}