export const handleInputMaskPhone = (e: React.FormEvent<HTMLInputElement>, state: React.Dispatch<React.SetStateAction<string>>) => {
    let clearVal,
        matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.currentTarget.value.replace(/\D/g, "")

    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.currentTarget.value = ''
            return
        }
    }

    if (def.length >= val.length) val = def

    e.currentTarget.value = matrix.replace(/./g, function (a: string) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    })

    state(e.currentTarget.value)
}

export const handleInputMaskCode = (e: React.FormEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    let clearVal,
        matrix = "___-___",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.currentTarget.value.replace(/\D/g, "")

    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.currentTarget.value = ''
            return
        }
    }

    if (def.length >= val.length) val = def

    e.currentTarget.value = matrix.replace(/./g, function (a: string) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    })

    setValue(e.currentTarget.value)
}