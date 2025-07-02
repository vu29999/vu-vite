import { useRef } from 'react';
import "./MainVisual.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dataVisual from '../../assets/fake-data/data-MainVisual';
import { Link } from 'react-router-dom';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MainVisual = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="main-visual-wrap">
            <div className="main-visual-box">
                <div className="main-visual-content">
                    <div className="custom-navigation">
                        <button ref={prevRef} className="swiper-button-prev custom-nav">‹</button>
                        <button ref={nextRef} className="swiper-button-next custom-nav">›</button>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        speed={800}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper: SwiperType) => {
                            if (
                                prevRef.current &&
                                nextRef.current &&
                                swiper.params.navigation &&
                                typeof swiper.params.navigation === 'object'
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}

                    >
                        {dataVisual.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="main-visual-item">
                                    <div className="main-visual-left">
                                        <Link className="main-visual-link" to={item.link} title="new window">
                                            <img src={item.img} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="main-visual-right">
                                        <h4>{item.title}</h4>
                                        <div className="main-visual-desc">
                                            <p><span>{item.description}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MainVisual;
