import { useEffect } from 'react'

export const useOverflowBlock = () => {

    useEffect(() => {
        const id = document.getElementsByClassName('layout')[0]
        id && id.classList.add('block')

        return () => id && id.classList.remove('block')
    }, [])

}