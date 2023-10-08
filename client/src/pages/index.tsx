import { NextPage } from "next"
import PageLayout from "@/containers/layouts/page-layout"
import { HomePageHeader } from "@/components/home-page-header/home-page-header"
import { ProductsList } from "@/components/products-list/products-list"

const HomePage: NextPage = () => {

  return <PageLayout title='CHEMISTRY' ctx="CHEMISTRY">

    <div id='home-page' className="relative pt-[60px]">
      <HomePageHeader />
      <ProductsList />
    </div>

  </PageLayout>

}

export default HomePage
