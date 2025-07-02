import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import LogoFT from '../../assets/images/common/logo-v.png';

const Footer: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <footer>
            <div className="top-footer-wrap">
                <div className="top-footer-box">
                    <div className="footer-util-box">
                        <ul>
                            <li>
                                <a className="active" href="#a" target="_blank" title="개인정보 처리방침" rel="noopener noreferrer">
                                    개인정보처리방침
                                </a>
                            </li>
                            <li>
                                <a href="#a" target="_blank" title="이메일무단수집거부" rel="noopener noreferrer">
                                    이메일무단수집거부
                                </a>
                            </li>
                            <li>
                                <a href="#a" target="_blank" title="영상정보처리기기 운영 · 관리방침" rel="noopener noreferrer">
                                    영상정보처리기기운영 · 관리방침
                                </a>
                            </li>
                            <li>
                                <div className="footer-related-box">
                                    <div className="related-box-wrap" ref={dropdownRef}>
                                        <button
                                            className={`related-site-title ${isOpen ? "active" : ""}`}
                                            onClick={handleToggle}
                                            title="교내 주요 서비스"
                                        >
                                            교내 주요 서비스
                                        </button>
                                        {isOpen && (
                                            <ul className="related-site">
                                                <li><Link className="item" to="#a" title="바로가기">한경국립대학교</Link></li>
                                                <li><Link className="item" to="#a" title="바로가기">학사시스템</Link></li>
                                                <li><Link className="item" to="#a" title="바로가기">사이버캠퍼스</Link></li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-footer-wrap">
                <div className="bottom-footer-box">
                    <div className="footer-content">
                        <div className="footer-inner">
                            <div className="footer-inner-box">
                                <div className="footer-logo-box">
                                    <span className="footer-logo">
                                        <img src={LogoFT} alt="한경대로고" />
                                    </span>
                                </div>
                                <div className="footer-info-box">
                                    <div className="info-box">
                                        <div className="info01">(주)Andwise Jiniworks</div>
                                        <div className="info02">
                                            (06097) 서울시 강남구 선릉로112길 39 진영빌딩 3층<br />
                                            <span className="sp-01">
                                                TEL:
                                                <a href="tel:+82-70-7095-9792" title="전화걸기">
                                                    &nbsp;+82-70-7095-9792
                                                </a>
                                            </span>
                                            <span>
                                                &nbsp;Email:
                                                <a href="mailto:sales@andwise.com" title="이메일 보내기">
                                                    &nbsp;sales@andwise.com
                                                </a>
                                            </span>
                                        </div>
                                        <div className="info03">Copyright © 2008 - 2024 Andwise Inc. All rights reserved.</div>
                                    </div>
                                </div>
                                <div className="footer-related-box">
                                    <div className="sns-box">
                                        <ul>
                                            <li className="in">
                                                <a href="#a" target="_blank" title="Instagram" rel="noopener noreferrer">
                                                    <span className="hide">Instagram</span>
                                                </a>
                                            </li>
                                            <li className="yt">
                                                <a href="#a" target="_blank" title="Youtube" rel="noopener noreferrer">
                                                    <span className="hide">Youtube</span>
                                                </a>
                                            </li>
                                            <li className="bl">
                                                <a href="#a" target="_blank" title="Blog" rel="noopener noreferrer">
                                                    <span className="hide">Blog</span>
                                                </a>
                                            </li>
                                            <li className="fb">
                                                <a href="#a" target="_blank" title="Facebook" rel="noopener noreferrer">
                                                    <span className="hide">Facebook</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
