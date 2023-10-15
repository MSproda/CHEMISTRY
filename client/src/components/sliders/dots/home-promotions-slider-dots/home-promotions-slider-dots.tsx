import { FC } from 'react'
import s from './home-promotions-slider-dots.module.scss'

export const HomePromotionsSliderDots: FC<{ instanceRef, currentSlide }> = ({ instanceRef, currentSlide }) => {

    return <div className={s.dots}>
        {[
            //@ts-ignore
            ...Array(instanceRef?.current?.track?.details?.slides?.length).keys(),
        ].map((idx) => {
            return (
                <button
                    key={idx}
                    onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                    }}
                    className={currentSlide === idx ? `${s.dot} ${s.active}` : `${s.dot}`}
                ></button>
            )
        })}
    </div>
}

