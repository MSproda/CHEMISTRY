import { useEffect, useMemo, FC } from "react"
import { createPortal } from "react-dom"

type IProps = {
    children?: React.ReactNode
    parent?: string
}

export const Portal: FC<IProps> = ({ children, parent }) => {

    const el = useMemo(() => document.createElement("div"), [])
    el.classList.add('portal')

    useEffect(() => {
        const target = parent ? document.getElementById(parent) : document.getElementById('layout')

        target?.appendChild(el)

        return () => {
            target?.removeChild(el)
        }

    }, [el, parent])

    return createPortal(children, el)
}