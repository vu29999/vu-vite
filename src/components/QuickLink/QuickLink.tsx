import React, { useEffect, useRef } from "react";
import "./QuickLink.css";
import { Link } from 'react-router-dom';
import dataQuick from '../../assets/fake-data/data-Quick';

interface QuickItem {
    title: string[];
    link: string;
    img: string;
}

const QuickLink: React.FC = () => {
    const quickBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            document.documentElement.classList.remove('no-js');
        }, 10);

        if ((window as any).App?.TableScroll?.init) {
            (window as any).App.TableScroll.init();
        }

        const $sideBar = quickBoxRef.current;
        if (!$sideBar) return;

        const sideBarOffsetTop = $sideBar.offsetTop;
        const defaultTop = sideBarOffsetTop;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const stopPosition = 2700;

            if (scrollY > stopPosition) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${stopPosition}px`;
            } else if (scrollY > sideBarOffsetTop) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${scrollY + 60}px`;
            } else {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${defaultTop}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="quick-box" ref={quickBoxRef}>
            <p>QUICK LINK</p>
            {dataQuick.map((item: QuickItem, index: number) => {
                const isExternal = item.link.startsWith('http');

                const linkContent = (
                    <span
                        dangerouslySetInnerHTML={{ __html: item.title.join('<br />') }}
                    />
                );

                const linkStyle = {
                    background: `url(${item.img}) no-repeat center top 10px`,
                };

                return (
                    <ul key={item.title.join('-')}>
                        <li>
                            {isExternal ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="새창열기"
                                    style={linkStyle}
                                >
                                    {linkContent}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    title="새창열기"
                                    style={linkStyle}
                                >
                                    {linkContent}
                                </Link>
                            )}
                        </li>
                    </ul>
                );
            })}
            <button
                className="btn-top"
                title="상단으로"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                TOP
            </button>
        </div>
    );
};

export default QuickLink;
