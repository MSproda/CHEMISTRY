export const useFormattingPrice = (price: number) => {
    const result = price && price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return { result }
}

export const usePriceWithDiscount = (price: number, discount: number) => {
    const priceWithDiscount = Math.floor(+price / 100 * (100 - +discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return { priceWithDiscount }
}