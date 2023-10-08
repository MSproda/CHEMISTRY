import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const useScrollHide = (top: number) => {
    const { pathname } = useRouter()

    const [isHide, setIsHide] = useState(false)

    useEffect(() => {
        if (pathname === '/') {
            let prevScroll = window.pageYOffset
            let currentScroll
            const page = document.getElementById('home-page')?.clientHeight

            const fnScroll = () => {
                currentScroll = window.pageYOffset

                if (page) {
                    if (currentScroll > prevScroll && currentScroll > top) setIsHide(true)

                    if (currentScroll < prevScroll) setIsHide(false)
                }

                prevScroll = currentScroll
            }

            window.addEventListener('scroll', fnScroll, { passive: true })
            return () => window.removeEventListener('scroll', fnScroll)
        }
    }, [])

    return { isHide }
}