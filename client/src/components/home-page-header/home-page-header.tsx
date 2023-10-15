import { BasketHeaderPageSvg, PhoneHeaderPageSvg } from '@/assets/icons'
import { useTypedSelector } from '@/core/hooks/store/use-typed-selector'
import { useScrollHide } from '@/core/hooks/use-scroll-hide'
import { BASKET_ROUTE } from '@/core/routes'
import Link from 'next/link'
import s from './home-page-header.module.scss'

export const HomePageHeader = () => {
    const { totalCount } = useTypedSelector(state => state.cart)
    const { isHide } = useScrollHide(260)

    return <div className={isHide ? `${s.wrapper} ${s.wrapperActive} bg-header-gradient` : `${s.wrapper} bg-header-gradient`}>
        <div className={s.content}>
            <div className={s.logo}>
                <span>Кемистри</span>
            </div>

            <div className={s.phone}>
                <a href="tell:+79964198036">
                    <PhoneHeaderPageSvg />
                </a>
            </div>

            <Link href={BASKET_ROUTE} className={s.basket}>
                <BasketHeaderPageSvg />
                <span className={s.counts}>{totalCount}</span>
            </Link>
        </div>
    </div>
}