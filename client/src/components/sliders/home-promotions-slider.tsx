import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { HomePromotionsSliderDots } from './dots/home-promotions-slider-dots/home-promotions-slider-dots'

export const HomePromotionsSlider = ({ data }) => {
    const { push } = useRouter()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 1,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
            rtl: false,
            mode: 'snap',
            slides: {
                origin: "center",
                perView: 1.3,
                spacing: 15,
            },
            breakpoints: {
                '(min-width: 467.98px)': {
                    slides: {
                        origin: "center",
                        perView: 1.45,
                        spacing: 15,
                    },
                },
                '(min-width: 590.98px)': {
                    slides: {
                        origin: "center",
                        perView: 1.6,
                        spacing: 15,
                    },
                },
                '(min-width: 767.98px)': {
                    slides: {
                        origin: "center",
                        perView: 2,
                        spacing: 15,
                    },
                },
                '(min-width: 991.98px)': {
                    slides: {
                        origin: "center",
                        perView: 2.3,
                        spacing: 15,
                    },
                },
            }
        }
    )

    const items = data && data.map((slide) => <li
        onClick={() => push(`/promotion/${slide.link}`)}
        className='keen-slider__slide relative cursor-pointer rounded-xl overflow-hidden'
        key={slide.id}
    >
        <Image
            fill={true}
            objectFit='cover'
            src={slide.image}
            sizes='(max-width: 768px) 480px'
            alt="product"
            className='pointer-events-none'
            placeholder='blur'
            blurDataURL={slide.image}
        />
    </li>)

    return <div className="fixed top-[65px] left-0 w-full max-w-full min-[767.98px]:static z-[1]">
        <div className="relative">
            <div className="relative mb-2.5">
                <ul ref={sliderRef} className="keen-slider h-[180px] 
            min-[467.98px]:h-[200px] min-[590.98px]:h-[240px] min-[767.98px]:h-[260px] min-[991.98px]:h-[310px]">
                    {items}
                </ul>
            </div>
            {loaded && instanceRef.current && <HomePromotionsSliderDots instanceRef={instanceRef} currentSlide={currentSlide} />}

        </div>
    </div>
}