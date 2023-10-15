import { ProductsList } from "@/components/products-list/products-list"
import PageHeader from "@/components/smart/headers/mobile/page-header"
import PageLayout from "@/containers/layouts/page-layout"
import { useTypedSelector } from "@/core/hooks/store/use-typed-selector"
import { useRouter } from "next/router"

const PromotionPage = () => {
    const { query: { id } } = useRouter()
    const { p1, p2, p3 } = useTypedSelector(state => state.promotions)

    return <PageLayout ctx='' title="продукт" >
        <PageHeader prev={true} title='Акция' />

        <div className="__container pt-[60px]">
            <ProductsList data={+id == 1 ? p1 : +id == 2 ? p2 : p3} />
        </div>
    </PageLayout>
}

export default PromotionPage