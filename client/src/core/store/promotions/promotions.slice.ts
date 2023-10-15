import { createSlice } from "@reduxjs/toolkit"

interface PromotionsSliceState {
    promotionsCards: any[],
    p1: any[],
    p2: any[],
    p3: any[],
}

const initialState: PromotionsSliceState = {
    promotionsCards: [
        { id: 1, link: 1, image: '/promotions/2.webp' },
        { id: 2, link: 2, image: '/promotions/1.jpg' },
        { id: 3, link: 3, image: '/promotions/3.webp' },
    ],
    p1: [
        { id: 1, name: 'Средство чистящее Dr.Aktiv "Антиналет" для удаления налета, известковых отложений, ржавчины, накипи 500 мл спрей', price: 144.07, discount: 5, image: '/images/dr-antinalet.webp' },
        { id: 2, name: 'Средство чистящее Dr.Aktiv Антижир Стеклокерамика для удаления жира и нагара 500 мл спрей, для стеклокерамики, жироудалитель, универсальное', price: 131.49, discount: 5, image: '/images/dr-antizhir-keramika.webp' },
        { id: 3, name: 'Средство чистящее Dr.Aktiv Антижир для удаления жира, нагара, копоти 500 мл спрей', price: 131.49, discount: 5, image: '/images/dr-antizhir.webp' },
        { id: 4, name: 'Средство для мытья окон, зеркал и стеклянных поверхностей Dr.Aktiv Лимонная свежесть 500 мл спрей', price: 118.90, discount: 5, image: '/images/dr-okna-i-zerkala.webp' },
        { id: 5, name: 'Универсальное чистящее средство Dr.Aktiv 0,75 л антибактериальное, гель для чистки туалета, для ванны, для кафеля, для пола, для белья, отбеливатель', price: 106.33, discount: 5, image: '/images/dr-unitaz.webp' },
    ],
    p2: [
        { id: 23, name: 'Emily Style Прокладки критика 10шт Нормал Премиум (уп*36)', price: 87.16, discount: 5, image: '/images/prokladki-normal-10.webp' },
        { id: 24, name: 'Emily Style Прокладки критика 8шт Супер Премиум (уп*36)', price: 81.68, discount: 5, image: '/images/prokladki-premium-8.webp' },
        { id: 25, name: 'Emily Style Прокладки критика 7шт Найт Премиум (уп*36)', price: 81.36, discount: 5, image: '/images/prokladki-night-7.webp' },
    ],
    p3: [
        { id: 11, name: 'Салфетки влажные Emily Style Тропические фрукты универсальные 15шт, (уп*82)', price: 14.78, discount: 5, image: '/images/vlazhnie-salfetki-tropic-15.webp' },
        { id: 12, name: 'Emily Style UE-001 Влажные салфетки Ягодный микс 15шт, (уп*82)', price: 14.78, discount: 5, image: '/images/vlazhnie-salfetki-miks-15.webp' },
        { id: 13, name: 'Emily Style Универсальные салфетки магия клубники и мицеллярной воды 15шт, (уп*82)', price: 14.78, discount: 5, image: '/images/vlazhnie-salfetki-klubnika-15.webp' },
        { id: 14, name: 'Emily Style Промо влажные салфетки для семьи BUBBLE FRESH ЭКОНОМ 100+20шт с клапаном, (уп*12)', price: 86.31, discount: 5, image: '/images/vlazhnie-salfetki-buble-120.webp' },
        { id: 15, name: 'Салфетки влажные 100шт + 20шт с крышкой Tropic Эконом Emily Style, (уп*12)', price: 86.31, discount: 5, image: '/images/vlazhnie-salfetki-tropic-120.webp' },
        { id: 16, name: 'Салфетки влажные 100шт + 20шт с крышкой Tropic Эконом Emily Style, (уп*12)', price: 86.31, discount: 5, image: '/images/vlazhnie-salfetki-tropic-120.webp' },
    ],
}

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {
    }
})

export const { } = promotionsSlice.actions
export default promotionsSlice.reducer