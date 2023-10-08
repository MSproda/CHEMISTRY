import s from './product-view-modal.module.scss'
import React from "react"
import { Portal } from '@/core/utils/portal'
import { TypeSliderImagesModal } from '@/core/types/modal'
import { useModalOptions } from '@/core/hooks/use-modal-options'
import { ArrowSvg } from '@/assets/icons'
import Image from 'next/image'
import { ProductViewBasketBtn } from '@/components/product-view-baket-btn/product-view-baket-btn'
import { useFormattingPrice } from '@/core/helpers/price'
import { useAppDispatch } from '@/core/hooks/store/use-typed-dispatch'
import { setToggleBasketProduct } from '@/core/store/basket/basket.slice'

export const ProductViewModal: React.FC<TypeSliderImagesModal> = ({ open, onClose, data }) => {
    const dispatch = useAppDispatch()

    const { active } = useModalOptions(open, onClose)
    const { result: $price } = useFormattingPrice(data?.price)

    const handleToggleBasket = () => {
        dispatch(setToggleBasketProduct(data))
    }

    return (
        <>
            {(open || active) && (
                <Portal>
                    <div className={active && open ? `${s.active} ${s.wrapper}` : `${s.wrapper}`}>
                        <div className={s.header}>
                            <div onClick={onClose} className={s.img}><ArrowSvg /></div>
                            <div className={s.name}>{data.name}</div>
                        </div>

                        <div className={s.image}>
                            <Image
                                fill={true}
                                objectFit="cover"
                                src={data.image}
                                sizes='(max-width: 768px) 480px'
                                alt="product"
                                placeholder='blur'
                                blurDataURL={data.image}
                            />
                        </div>

                        <div className={s.button}>
                            <ProductViewBasketBtn
                                price={$price && $price}
                                handleClick={handleToggleBasket}
                            />
                        </div>
                    </div>
                </Portal>
            )}
        </>
    )
}
