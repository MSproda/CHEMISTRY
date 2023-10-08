import { CatalogButton } from '@/components/ui/buttons/catalog-button/catalog-button'
import Link from 'next/link'
import { FC } from 'react'
import s from './page-empty-content.module.scss'

export type EmptyContentProps = {
    icon: any
    title?: string
    subTitle?: string
    btn?: boolean
}

const EmptyContent: FC<EmptyContentProps> = ({ icon, title, subTitle, btn }) => {

    return <div className={s.wrapper}>
        <div className={s.img}>{icon}</div>

        <h3 className={s.title}>{title}</h3>

        {subTitle && <span className={s.subTitle}>{subTitle}</span>}

        {btn && <Link href='/' className={s.btn}><CatalogButton>Перейти в каталог</CatalogButton></Link>}
    </div>
}

export default EmptyContent