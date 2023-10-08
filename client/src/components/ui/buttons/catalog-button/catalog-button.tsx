import { FC } from 'react'
import s from './catalog-button.module.scss'

export const CatalogButton: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <button className={s.btn}>{children}</button>
} 