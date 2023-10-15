import { NextPage } from "next"
import PageLayout from "@/containers/layouts/page-layout"
import { HomePageHeader } from "@/components/home-page-header/home-page-header"
import { ProductsList } from "@/components/products-list/products-list"
import { HomePromotionsSlider } from "@/components/sliders/home-promotions-slider"
import { useTypedSelector } from "@/core/hooks/store/use-typed-selector"

const HomePage: NextPage = () => {

  const { promotionsCards } = useTypedSelector(state => state.promotions)
  const { items } = useTypedSelector(state => state.products)

  return <PageLayout title='CHEMISTRY' ctx="CHEMISTRY">

    <div id='home-page' className="relative pt-[280px] pb-[15px] bg-header-gradient">

      <HomePageHeader />
      <HomePromotionsSlider data={promotionsCards} />
      <div className="relative py-[10px] px-3 bg-[#fff] z-[5] rounded-2xl 
          min-[590.98px]:rounded-t-lg-[20px] 
          min-[767.98px]:rounded-bl-[0px] min-[767.98px]:rounded-br-[0px] min-[991.98px]:py-[20px] min-[991.98px]:px-[15px]"
      >
        <ProductsList data={items} />
      </div>
    </div>

  </PageLayout>
}

export default HomePage
