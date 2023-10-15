import { useAppDispatch } from '@/core/hooks/store/use-typed-dispatch'
import { useTypedSelector } from '@/core/hooks/store/use-typed-selector'
import { IProduct } from '@/core/models/product.model'
import { setToggleBasketProduct } from '@/core/store/basket/basket.slice'
import { ProductViewModal } from '@/modals/product-view-modal/product-view-modal'
import { useState } from 'react'
import { ProductCard } from '../smart/cards/product-card/product-card'
import s from './products-list.module.scss'

export const ProductsList = ({ data }) => {
    const dispatch = useAppDispatch()
    const { items } = useTypedSelector(state => state.cart)

    const [modalAction, setModalAction] = useState(false)
    const [modalData, setModalData] = useState()
    console.log(items)

    const handleBasketToggleClick = (obj) => {
        dispatch(setToggleBasketProduct(obj))
    }

    const handleModalActions = (data) => {
        setModalAction(true)
        setModalData(data)
    }

    return <section className={s.wrapper}>
        <ul className={s.list}>
            {data.map((obj: IProduct, i) =>
                <li onClick={() => handleModalActions(obj)} className={s.card} key={i} >
                    <ProductCard
                        data={obj}
                        handleBasketToggleClick={handleBasketToggleClick}
                        basketIds={items}
                    />
                </li>
            )}
        </ul>

        <ProductViewModal open={modalAction} onClose={() => setModalAction(false)} data={modalData} basketIds={items} />
    </section>
}