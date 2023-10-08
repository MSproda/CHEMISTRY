import { useState } from 'react'

export const useDisplayImage = () => {
    const [result, setResult] = useState<any>("")

    function uploader(e: any) {

        const imageFile = e.target.files[0]

        const reader = new FileReader()

        reader.addEventListener("load", (e) => {
            setResult(e?.target?.result)
        })

        reader.readAsDataURL(imageFile)
    }

    return { result, uploader }
}