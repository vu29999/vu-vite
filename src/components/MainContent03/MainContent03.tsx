
import "./MainContent03.css";
// import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dataMainSocial from '../../assets/fake-data/data-MainSocial'

import { Scrollbar, Navigation, Pagination } from 'swiper/modules';

const MainContent03 = () => {

    return (
        <>
            <div className="main-content-wrap03">
                <div className="main-content-box03">
                    <div className="main-mini-content">
                        <div className="wrap-sns">
                            <div className="box-sns-left">
                                <h3>전주대SNS</h3>
                                <div className="tag-group">
                                    <div><span>#전주대학교</span><span>#홍보</span></div>
                                    <div><span>#SNS</span><span>#블로그</span><span>#유튜브</span></div>
                                </div>
                                <div className="icon-group">
                                    <a href="#a" target="_blank" title="한경국립대학교 원격교육지원센터">
                                        <img src={new URL("../../assets/images/common/ico-instagram.png", import.meta.url).href} alt="icon instagram" width="32" height="32" />
                                    </a>
                                    <a href="#a" target="_blank" title="Facebook">
                                        <img src={new URL("../../assets/images/common/ico-facebook.png", import.meta.url).href} alt="icon facebook" width="32" height="32" />
                                    </a>
                                </div>
                            </div>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar]}
                                loop={false}
                                spaceBetween={40}
                                slidesPerView={3.6}
                                speed={800}
                                navigation={false}
                                pagination={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                scrollbar={{
                                    // hide: false,
                                    // draggable: true,
                                    el: ".swiper-scrollbar-02",
                                    hide: true,
                                }}
                                breakpoints={{
                                    1: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 20,
                                    },
                                    500: {
                                        slidesPerView: 1.6,
                                        spaceBetween: 20,

                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 20,

                                    },
                                    1200: {
                                        slidesPerView: 2.6,
                                        spaceBetween: 40,
                                    },
                                    1500: {
                                        slidesPerView: 3.6,
                                        spaceBetween: 40,
                                    },
                                }}
                            >
                                {dataMainSocial.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="sns-slider">
                                            <a href={item.link} target="_blank" title={`new window ${item.title}`} rel="noopener noreferrer">
                                                <div className={`icon ${item.iconClass}`}>
                                                    <img src={item.iconImg} alt="icon instagram" width="32" height="32" />
                                                    <p>{item.iconTitle}</p>
                                                </div>
                                                <div className="box-slider">
                                                    <div className="image"><img src={item.img} alt={item.title} /></div>
                                                    <ul>
                                                        <li>
                                                            {item.hashtags.map((tag, index) => (
                                                                <span key={index}>{tag}</span>
                                                            ))}
                                                        </li>
                                                        <li>{item.title}</li>
                                                        <li>{item.desc}</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-scrollbar-02"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent03;