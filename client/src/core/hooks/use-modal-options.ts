import { useEffect, useRef, useState } from 'react'

export const useModalOptions = (open: boolean, onClose?: any, block: boolean = true) => {

    const [active, setActive] = useState(false)
    const backdrop = useRef(null)

    useEffect(() => {
        const { current } = backdrop;

        open && block && document.body.setAttribute('style', 'overflow: hidden;')
        !open && block && document.body.setAttribute('style', 'overflow: unset;')

        const transitionEnd = () => setActive(open)

        const clickHandler = (e: any) => ''

        if (current) {
            //@ts-ignore
            current.addEventListener("transitionend", transitionEnd)
            //@ts-ignore
            current.addEventListener("click", clickHandler)
        }

        if (open) {
            window.setTimeout(() => {
                setActive(open)
            }, 10)
        }

        return () => {
            if (current) {
                //@ts-ignore
                current.removeEventListener("transitionend", transitionEnd)
                //@ts-ignore
                current.removeEventListener("click", clickHandler)
            }
        }
    }, [open, onClose])

    return { active, backdrop }
}