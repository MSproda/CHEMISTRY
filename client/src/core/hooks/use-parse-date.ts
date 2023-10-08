const data = [
    { mounth: 'января', qn: '01' },
    { mounth: 'февраля', qn: '02' },
    { mounth: 'марта', qn: '03' },
    { mounth: 'апреля', qn: '04' },
    { mounth: 'мая', qn: '05' },
    { mounth: 'июня', qn: '06' },
    { mounth: 'июля', qn: '07' },
    { mounth: 'августа', qn: '08' },
    { mounth: 'сентября', qn: '09' },
    { mounth: 'октября', qn: '10' },
    { mounth: 'ноября', qn: '11' },
    { mounth: 'декабря', qn: '12' }
]

export const useParseDate = (date: string, exact: boolean) => {
    if (exact === false) {
        const mounth = date.split('T')[0].toString().split('-')[1]
        const day = date.split('T')[0].toString().split('-')[2]
        const year = date.split('T')[0].toString().split('-')[0]


        for (const el of data) {
            if (el.qn === mounth) {
                const result = `${day} ${el.mounth} ${year} г.`
                return result
            }
        }
    } else {
        const result = `${date.split('T')[0].split('-').reverse().join('-')}г`
        return result
    }
}