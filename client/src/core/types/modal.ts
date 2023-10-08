import { IProductParams } from "../models/product.model"

export type TypeSendEmailCodeFormModal = {
    open: boolean
    onClose: React.Dispatch<React.SetStateAction<any>>
    timer: number
    repeatSendCode: () => void
    handleSign: (code: string) => void
}

export type TypeWarnLogoutModal = {
    open: boolean
    onClose: any
    logout: any
}


export type TypeModal = {
    open: boolean
    onClose: () => void
    parent?: string
}

export type TypeDeleteWarnModal = {
    open: boolean
    onClose: () => void
    del: () => void
}

export type TypeSliderImagesModal = {
    open: boolean
    onClose: () => void
    data: any
}

export type TypeSettingsGenderModal = {
    open: boolean
    onClose: () => void
    changeGender: React.Dispatch<React.SetStateAction<string>>
}

export type TypeCheryInfoContentModal = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
}

export type TypeProductDescModal = {
    open: boolean
    onClose: () => void
    data: any
}

export type TypeProductParamsModal = {
    open: boolean
    onClose: () => void
    data: IProductParams[]
}