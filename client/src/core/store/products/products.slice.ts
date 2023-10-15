import { IProduct } from "@/core/models/product.model"
import { createSlice } from "@reduxjs/toolkit"

interface ProductsSliceState {
    items: IProduct[]
}

const initialState: ProductsSliceState = {
    items: [
        { id: 1, name: 'Средство чистящее Dr.Aktiv "Антиналет" для удаления налета, известковых отложений, ржавчины, накипи 500 мл спрей', price: 144.07, discount: 5, image: '/images/dr-antinalet.webp' },
        { id: 2, name: 'Средство чистящее Dr.Aktiv Антижир Стеклокерамика для удаления жира и нагара 500 мл спрей, для стеклокерамики, жироудалитель, универсальное', price: 131.49, discount: 5, image: '/images/dr-antizhir-keramika.webp' },
        { id: 3, name: 'Средство чистящее Dr.Aktiv Антижир для удаления жира, нагара, копоти 500 мл спрей', price: 131.49, discount: 5, image: '/images/dr-antizhir.webp' },
        { id: 4, name: 'Средство для мытья окон, зеркал и стеклянных поверхностей Dr.Aktiv Лимонная свежесть 500 мл спрей', price: 118.90, discount: 5, image: '/images/dr-okna-i-zerkala.webp' },
        { id: 5, name: 'Универсальное чистящее средство Dr.Aktiv 0,75 л антибактериальное, гель для чистки туалета, для ванны, для кафеля, для пола, для белья, отбеливатель', price: 106.33, discount: 5, image: '/images/dr-unitaz.webp' },
        { id: 6, name: 'Туалетная бумага "Новинка Эко" 4/1, 2 слоя, белая, целлюлозное сырье (уп*12)', price: 48.91, image: '/images/tualetnaya-bumaga-eco.jpg' },
        { id: 7, name: 'Туалетная бумага "Мягкоff" 16мб 4/1, 2 слоя, белая, (уп*12)', price: 67.25, image: '/images/tualetnaya-bumaga-myagkoff.webp' },
        { id: 8, name: 'Emily Style Ватные диски 80шт, (уп*35)', price: 52.27, image: '/images/vatnie-diski-80.webp' },
        { id: 9, name: 'Ватные диски Emily Style, 3 уп. по 120 шт, (уп*35)', price: 70.28, image: '/images/vatnie-diski-120.webp' },
        { id: 10, name: 'Emily Style Ватные палочки 100шт пакет, (уп*52)', price: 20.36, image: '/images/vatnie-palochki-100.webp' },
        { id: 11, name: 'Салфетки влажные Emily Style Тропические фрукты универсальные 15шт, (уп*82)', discount: 5, price: 14.78, image: '/images/vlazhnie-salfetki-tropic-15.webp' },
        { id: 12, name: 'Emily Style UE-001 Влажные салфетки Ягодный микс 15шт, (уп*82)', price: 14.78, discount: 5, image: '/images/vlazhnie-salfetki-miks-15.webp' },
        { id: 13, name: 'Emily Style Универсальные салфетки магия клубники и мицеллярной воды 15шт, (уп*82)', discount: 5, price: 14.78, image: '/images/vlazhnie-salfetki-klubnika-15.webp' },
        { id: 14, name: 'Emily Style Промо влажные салфетки для семьи BUBBLE FRESH ЭКОНОМ 100+20шт с клапаном, (уп*12)', discount: 5, price: 86.31, image: '/images/vlazhnie-salfetki-buble-120.webp' },
        { id: 15, name: 'Салфетки влажные 100шт + 20шт с крышкой Tropic Эконом Emily Style, (уп*12)', price: 86.31, discount: 5, image: '/images/vlazhnie-salfetki-tropic-120.webp' },
        { id: 16, name: 'Салфетки влажные 100шт + 20шт с крышкой Tropic Эконом Emily Style, (уп*12)', price: 86.31, discount: 5, image: '/images/vlazhnie-salfetki-tropic-120.webp' },
        { id: 17, name: 'EXXE Дезодорант мужской спрей MEN POWER 150мл, (уп*24)', price: 113.44, image: '/images/m-dezodorant-power.webp' },
        { id: 18, name: 'EXXE Дезодорант мужской спрей FRESH Ледяная свежесть 150мл, (уп*24)', price: 113.44, image: '/images/m-dezodorant-fresh.webp' },
        { id: 19, name: 'EXXE Дезодорант мужской спрей MEN ENERGY 1шт 150мл, (уп*24)', price: 113.44, image: '/images/m-dezodorant-energy.webp' },
        { id: 20, name: 'EXXE Дезодорант мужской спрей VIBE MEN 1шт 150мл, (уп*24)', price: 113.44, image: '/images/m-dezodorant-vibe.webp' },
        { id: 21, name: 'EXXE MEN шампунь д/всех типов волос "Тонизирующий" FRESH, 400мл (уп*12)', price: 127.62, image: '/images/shampoo-fresh.webp' },
        { id: 22, name: 'EXXE Men Шампунь для волос Укрепляющий Energy 400мл (уп*12)', price: 127.62, image: '/images/shampoo-energy.webp' },
        { id: 23, name: 'Emily Style Прокладки критика 10шт Нормал Премиум (уп*36)', price: 87.16, discount: 5, image: '/images/prokladki-normal-10.webp' },
        { id: 24, name: 'Emily Style Прокладки критика 8шт Супер Премиум (уп*36)', price: 81.68, discount: 5, image: '/images/prokladki-premium-8.webp' },
        { id: 25, name: 'Emily Style Прокладки критика 7шт Найт Премиум (уп*36)', price: 81.36, discount: 5, image: '/images/prokladki-night-7.webp' },
        { id: 26, name: 'Гель для душа EXXE "Манго и орхидея", 400 мл (уп*12)', price: 95.23, image: '/images/exxe-gel-mango-i-orhideya.webp' },
        { id: 27, name: 'EXXE Гель для душа 400 мл бергамот и вербена (уп*12)', price: 95.23, image: '/images/exxe-gel-bergamot-i-verbena.webp' },
        { id: 28, name: 'EXXE Дезодорант женский спрей Свежесть и нежность Fruit kiss, 150 мл (уп*12)', price: 102.41, image: '/images/w-dezodorant-kiss.webp' },
        { id: 29, name: 'EXXE Дезодорант женский спрей. Silk effect. Нежность шёлка, 150 мл (уп*12)', price: 102.41, image: '/images/w-dezodorant-silk.webp' },
        { id: 30, name: 'EXXE Дезодорант женский спрей. Тропическая свежесть Tropical freshness, 150 мл (уп*12)', price: 102.41, image: '/images/w-dezodorant-tropic.webp' },
        { id: 31, name: 'EXXE Дезодорант женский спрей Пудра и нежность Powder touch, 150 мл (уп*12)', price: 102.41, image: '/images/w-dezodorant-powder.webp' },
        { id: 32, name: 'EXXE, Жидкое мыло EXXE, Манго и орхидея, 500 мл, (уп*12)', price: 77.94, image: '/images/exxe-zhidkoe-milo-mango-orhideya.webp' },
        { id: 33, name: 'Жидкое мыло EXXE, Кокос и ваниль, 500 мл (уп*12)', price: 77.94, image: '/images/exxe-zhidkoe-milo-mango-kokos-vanil.webp' },
        { id: 34, name: 'Жидкое мыло EXXE, "Бергамот и вербена", 500 мл (уп*12)', price: 77.94, image: '/images/exxe-zhidkoe-milo-bergamot-verbena.webp' },
        { id: 35, name: 'EXXE Зубная паста Максимальная защита от кариеса Max-in-one 100г (уп*12)', price: 50.42, image: '/images/exxe-zubnaya-pasta-max-zashita.webp' },
        { id: 36, name: 'EXXE Зубная паста Тройная защита tri-active 100мл (уп*12)', price: 58.29, image: '/images/exxe-zubnaya-pasta-tri-active.webp' },
        { id: 37, name: 'EXXE Зубная паста Таурин и папаин Отбеливающий комплекс и защита от кариеса 100мл (уп*12)', price: 55.14, image: '/images/exxe-zubnaya-pasta-natural.webp' },
        { id: 38, name: 'EXXE Зубная щетка, luxury, мягкая, Уголь (уп*48)', price: 39.58, image: '/images/zubnaya-shetka-luxury.webp' },
        { id: 39, name: 'EXXE Зубная щетка Classic Суперочищающая, средней жесткости (уп*48)', price: 35.33, image: '/images/zubnaya-shetka-classic.webp' },
        { id: 40, name: 'Зубная щетка EXXE Extra Макс эффект, жесткая (уп*48)', price: 36.96, image: '/images/zubnaya-shetka-extra.webp' },
        { id: 41, name: 'EXXE Шампунь Vitamin Pro Объём и сияние, 400 мл (уп*12)', price: 111.33, image: '/images/shampoo-vitamin-pro.webp' },
        { id: 42, name: 'Губка Master Fresh, Поролон, 5 шт. (уп*72)', price: 36.26, image: '/images/gubki-posuda-maxi-5.webp' },
        { id: 43, name: 'Master FRESH Губки для мытья посуды универсальные, 10 шт (уп*72)', price: 53.61, image: '/images/gubki-posuda-universal-10.webp' },
        { id: 44, name: 'Подвесной блок для унитаза ХВОЯ, 1шт Master FRESH (уп*24)', price: 82.32, image: '/images/podvesnoi-blok-xvoya-1.webp' },
        { id: 45, name: 'Подвесной блок для унитаза ЛАВАНДА, 1шт Master FRESH (уп*24)', price: 82.32, image: '/images/podvesnoi-blok-lavanda-1.webp' },
    ],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }
})

export const { } = productsSlice.actions
export default productsSlice.reducer