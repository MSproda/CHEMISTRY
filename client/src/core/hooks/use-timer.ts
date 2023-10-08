import { useState, useEffect } from 'react'

export const useTimer = (time: number, open: boolean) => {
    const [timer, setTimer] = useState(time)

    useEffect(() => {
        if (open) {
            const myInterval = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1)
                }
                if (timer === 0) {
                    clearInterval(myInterval)
                }
            }, 1000)
            return () => {
                clearInterval(myInterval)
            }
        }
    })

    return { timer, setTimer }
}
