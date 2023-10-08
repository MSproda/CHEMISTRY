import { ArrowSvg } from '@/assets/icons'
import { useRouter } from 'next/router'
import { FC } from 'react'
import s from './page-header.module.scss'

export interface IPageHeader {
    prev?: boolean
    link?: string
    title: string
    icon?: any
    iconLink?: string
}

const PageHeader: FC<IPageHeader> = ({ prev, title, link, icon, iconLink }) => {
    const { back, replace } = useRouter()

    const fnLink = () => {
        if (!link) {
            back()
        } else {
            link && replace(link)
        }
    }

    return <div className={s.wrapper}>

        {prev && <div onClick={fnLink} className={s.arrow}><ArrowSvg /></div>}

        <h1 className={s.title}>{title}</h1>

        {icon && <div onClick={() => iconLink && replace(iconLink)} className={s.icon}>{icon}</div>}

    </div>
}

export default PageHeader