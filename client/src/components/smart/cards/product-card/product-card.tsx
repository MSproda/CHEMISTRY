import { FC } from 'react'
import s from './product-card.module.scss'
import { useFormattingPrice } from '@/core/helpers/price'
import { IProduct } from '@/core/models/product.model'
import { ProductBasketBtn } from '@/components/ordinary/product-basket-btn/product-basket-btn'
import Image from 'next/image'

type Props = {
    data: IProduct
    handleBasketToggleClick: (data) => void
}

export const ProductCard: FC<Props> = ({ data, handleBasketToggleClick }) => {
    const { image, price, name } = data
    const { result: Price } = useFormattingPrice(price)

    return <div
        className={s.wrapper}
    >

        <div className={s.img}>
            <Image
                fill={true}
                objectFit="cover"
                src={image}
                sizes='(max-width: 768px) 210px'
                alt="product"
                placeholder='blur'
                blurDataURL={image}
            />
        </div>

        <div className={s.content}>
            <p className={s.name}>{name}</p>

            <div className={s.actions}>
                <p className={s.price}>{Price} ₽</p>

                <div
                    onClick={(e) => e.stopPropagation()}
                    className={s.cartIcon}>
                    <ProductBasketBtn
                        active={false}
                        handleClick={() => handleBasketToggleClick(data)}
                    />
                </div>

            </div>
        </div>
    </div>
}