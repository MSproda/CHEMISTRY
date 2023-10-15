import { IProductParams } from "../models/product.model"

export type TypeModal = {
    open: boolean
    onClose: () => void
    parent?: string
}

export type TypeSliderImagesModal = {
    open: boolean
    onClose: () => void
    data: any
    basketIds: any[],
}