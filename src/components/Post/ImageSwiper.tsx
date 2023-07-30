// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import styles from "./ImageSwiper.module.css"

import { useState } from 'react';
import { Image } from '@/states/model/base';

interface ImageSwiperProps {
    images: Image[];
}
const ImageSwiper = (props: ImageSwiperProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log("images:", props.images)
    return (
        <>
            <Swiper
                style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }
                }
                loop={true}
                navigation={true}
                spaceBetween={10}
                // slidesPerView={3}
                // thumbs={{ swiper: thumbsSwiper }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="postImageSwiperSlide"
            >
                {
                    props.images.map((img) =>
                        <SwiperSlide>
                            <img alt="" src={img.url} />
                        </SwiperSlide>
                    )
                }
                <SwiperSlide >
                    {/* <div className="bg-purple-300 w-full h-120"> */}
                    <img className='object-contain w-full h-96 hover:object-scale-down mx-auto' alt="" src="https://via.placeholder.com/400X800?text=1" />
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=8" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=9" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/500?text=10" />
                </SwiperSlide>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="postImageSwiperThumbSlide"
            >
                {props.images.map((img) => <SwiperSlide>
                    <img alt="" src={img.url} />
                </SwiperSlide>
                )}
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=8" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=9" />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" src="https://via.placeholder.com/100?text=10" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default ImageSwiper;