import { EmptyBasketSvg } from '@/assets/icons'
import { BasketTotalOrderInfo } from '@/components/simple/basket-total-order-info/basket-total-order-info'
import EmptyContent from '@/components/simple/page-empty-content/page-empty-content'
import { BasketProductCard } from '@/components/smart/cards/basket-product-card/basket-product-card'
import PageHeader from '@/components/smart/headers/mobile/page-header'
import { BasketOrderButton } from '@/components/ui/buttons/basket-order-button/basket-order-button'
import { useAppDispatch } from '@/core/hooks/store/use-typed-dispatch'
import { useTypedSelector } from '@/core/hooks/store/use-typed-selector'
import { IProduct } from '@/core/models/product.model'
import { setDecreaseQty, setIncreaseQty, setToggleBasketProduct } from '@/core/store/basket/basket.slice'
import s from './basket-container.module.scss'

export const BasketContainer = () => {
    const dispatch = useAppDispatch()
    const { items, totalPrice, totalCount } = useTypedSelector(state => state.cart)

    const handleBasketProductDelete = (product: IProduct) => {
        dispatch(setToggleBasketProduct(product))
    }

    const handleIncreaseQtyClick = async (id: number) => {
        dispatch(setIncreaseQty(id))
    }

    const handleDecreaseQtyClick = async (id: number) => {
        dispatch(setDecreaseQty(id))
    }

    return <div className={s.wrapper}>
        <PageHeader prev={true} title='Корзина' />

        {items.length > 0 ?
            <div className={s.content}>

                <div className={s.leftbox}>
                    <ul className={s.items}>
                        {items.map((obj) =>
                            <BasketProductCard
                                data={obj}
                                key={obj.product.id}
                                handleBasketToggleClick={handleBasketProductDelete}
                                handleIncreaseQtyClick={handleIncreaseQtyClick}
                                handleDecreaseQtyClick={handleDecreaseQtyClick}
                            />
                        )}
                    </ul>
                </div>

                <div className={s.rightbox}>
                    <div className={s.totalbox}>
                        <BasketTotalOrderInfo
                            counts={totalCount}
                            price={totalPrice}
                        />

                        <BasketOrderButton
                            onClick={() => { }}
                            counts={totalCount}
                            totalPrice={totalPrice}
                        />
                    </div>
                </div>
            </div>
            :
            <EmptyContent
                icon={<EmptyBasketSvg />}
                title='Товары не добавлены в корзину.'
                subTitle='Откройте каталог и выбирайте лучшие товары'
                btn={true}
            />
        }
    </div>
}