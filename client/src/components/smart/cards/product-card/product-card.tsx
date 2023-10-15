import { FC } from 'react'
import s from './product-card.module.scss'
import { useFormattingPrice } from '@/core/helpers/price'
import { IProduct } from '@/core/models/product.model'
import { ProductBasketBtn } from '@/components/ordinary/product-basket-btn/product-basket-btn'
import Image from 'next/image'

type Props = {
    data: IProduct
    handleBasketToggleClick: (data) => void
    basketIds: any[]
}

export const ProductCard: FC<Props> = ({ data, handleBasketToggleClick, basketIds }) => {
    const { id, image, price, name, discount } = data
    const priceWithDiscount = (discount / 100 * price) + price
    const { result: Price } = useFormattingPrice(price)
    const { result: PriceWithDiscount } = useFormattingPrice(priceWithDiscount)

    return <div
        className={s.wrapper}
    >

        <div className={s.img}>
            <Image
                fill={true}
                objectFit="scale-down"
                src={image}
                sizes='(max-width: 768px) 210px'
                alt="product"
                placeholder='blur'
                blurDataURL={image}
            />

            {discount && <div className={s.discount}>
                <span>{`-${discount}%`}</span>
            </div>}
        </div>

        <div className={s.content}>
            <p className={s.name}>{name}</p>

            <div className={s.actions}>
                <div className={s.price}>
                    {
                        !discount
                            ?
                            <p>{Price} ₽</p>
                            :
                            <p>{Price} ₽ <span>{PriceWithDiscount} ₽</span></p>
                    }
                </div>

                {
                    basketIds?.find(item => +item.product.id === +id)
                        ? <div
                            onClick={(e) => e.stopPropagation()}
                            className={s.cartIcon}>
                            <ProductBasketBtn
                                active={true}
                                handleClick={() => handleBasketToggleClick(data)}
                            />
                        </div>
                        : <div
                            onClick={(e) => e.stopPropagation()}
                            className={s.cartIcon}>
                            <ProductBasketBtn
                                active={false}
                                handleClick={() => handleBasketToggleClick(data)}
                            />
                        </div>
                }

            </div>
        </div>
    </div>
}