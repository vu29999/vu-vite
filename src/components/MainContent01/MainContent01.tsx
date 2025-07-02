import React, { useRef } from 'react';
import "./MainContent01.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import dataMainNotice from '../../assets/fake-data/data-MainNotice';
import dataMainGallery from '../../assets/fake-data/data-MainGallery';
import { Swiper as SwiperType } from 'swiper';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';

const MainContent01: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="main-content-wrap01">
            <div className="main-content-box01">
                <div className="main-mini-wrap main-top">
                    <div className="main-mini-box main-mini-box01">
                        <div className="main-title">
                            <Link to="#a">
                                <h3>공지사항</h3>
                            </Link>
                        </div>
                        <ul className="mini-board-content">
                            {dataMainNotice.notice.map((item: any) => (
                                <li key={item.id}>
                                    <span className={`category ${item.categoryClass}`}>{item.category}</span>
                                    <Link to={item.link} title={item.title}>{item.title}</Link>
                                    <p className="board-right">{item.date}</p>
                                </li>
                            ))}
                        </ul>
                        <Link className="btn-more" to="#a" title="더보기">
                            <img src={new URL("../../assets/images/common/ico-plus.png", import.meta.url).href} alt="더보기" />
                        </Link>
                    </div>
                    <div className="main-mini-box main-mini-box02">
                        <div className="main-title">
                            <Link to="#a">
                                <h3>행사일정</h3>
                            </Link>
                        </div>
                        <ul className="mini-board-content">
                            {dataMainNotice.schedule.map((item: any) => (
                                <li key={item.id}>
                                    <span className="date">&nbsp;{item.date}</span>
                                    <Link to={item.link} title={item.title}>&nbsp;{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <Link className="btn-more" to="#a" title="더보기">
                            <img src={new URL("../../assets/images/common/ico-plus.png", import.meta.url).href} alt="더보기" />
                        </Link>
                    </div>
                </div>
                <div className="main-mini-wrap main-bot">
                    <div className="mini-slide-content">
                        <div className="mini-slide-left">
                            <h3>포토갤러리</h3>
                            <p className="slide-des">Photo Gallery</p>
                            <div className="btn-more">
                                <Link to="#" title="more">more
                                    <span>
                                        <img src={new URL("../../assets/images/common/ico-arrow-right.png", import.meta.url).href} alt="more" />
                                    </span>
                                </Link>
                            </div>
                            <div className="slide-arrow">
                                <button ref={prevRef} className="swiper-button-prev">
                                    <img src={new URL("../../assets/images/common/icon-left-sl.png", import.meta.url).href} alt="icon left" />
                                </button>
                                <div ref={paginationRef} className="swiper-pagination-unique"></div>
                                <button ref={nextRef} className="swiper-button-next">
                                    <img src={new URL("../../assets/images/common/icon-right-sl.png", import.meta.url).href} alt="icon right" />
                                </button>
                            </div>
                        </div>
                        <div className="mini-slide-right">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar]}
                                loop={false}
                                spaceBetween={40}
                                slidesPerView={3.6}
                                speed={800}
                                pagination={{
                                    el: paginationRef.current,
                                    clickable: true,
                                }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                scrollbar={{
                                    el: ".swiper-scrollbar-01",
                                    hide: true,
                                }}
                                // onInit={(swiper: SwiperType) => {
                                //     swiper.params.navigation.prevEl = prevRef.current;
                                //     swiper.params.navigation.nextEl = nextRef.current;
                                //     swiper.params.pagination.el = paginationRef.current;

                                //     swiper.navigation.init();
                                //     swiper.navigation.update();

                                //     swiper.pagination.init();
                                //     swiper.pagination.render();
                                //     swiper.pagination.update();
                                // }}
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
                                {dataMainGallery.map((item: any) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="mini-slide-box">
                                            <Link to={item.link} target="_blank" title={item.title}>
                                                <div className="slide-img">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <div className="slide-txt">
                                                    <h4 className="slide-title">{item.title}</h4>
                                                    <p className="slide-title-sub">{item.date}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-scrollbar-01"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent01;
