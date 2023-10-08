import { BasketContainer } from '@/containers/basket/basket-container'
import PageLayout from '@/containers/layouts/page-layout'

const BasketPage = () => {

    return <PageLayout title='Корзина' ctx='корзина'>
        <div className='__container'>
            <BasketContainer />
        </div>
    </PageLayout>
}

export default BasketPage