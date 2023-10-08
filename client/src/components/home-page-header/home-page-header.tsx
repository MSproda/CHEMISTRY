import { BasketHeaderPageSvg, PhoneHeaderPageSvg } from '@/assets/icons'
import { useTypedSelector } from '@/core/hooks/store/use-typed-selector'
import { BASKET_ROUTE } from '@/core/routes'
import Link from 'next/link'
import s from './home-page-header.module.scss'

export const HomePageHeader = () => {
    const { totalCount } = useTypedSelector(state => state.cart)

    return <div className={s.wrapper}>
        <div className={s.phone}>
            <a href="+79964198036">
                <PhoneHeaderPageSvg />
            </a>
        </div>
        <div className={`${s.logo} main-gradient`}>
            <span>Кемистри</span>
        </div>
        <Link href={BASKET_ROUTE} className={s.basket}>
            <BasketHeaderPageSvg />
            <span className={s.counts}>{totalCount}</span>
        </Link>
    </div>
}