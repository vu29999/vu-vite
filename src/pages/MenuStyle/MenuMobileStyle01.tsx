import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

// Types
type SubSubItem = {
    title: string;
    path: string;
};

type SubItem = {
    title: string;
    path: string;
    subSub?: SubSubItem[];
};

type MenuItem = {
    title: string;
    path: string;
    sub?: SubItem[];
};

type MenuMobileStyle01Props = {
    menuData: MenuItem[];
};

const MenuMobileStyle01 = ({ menuData }: MenuMobileStyle01Props) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
    const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
    const location = useLocation();

    const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

    useEffect(() => {
        menuData.forEach((menuItem, index) => {
            if (isActive(menuItem.path)) {
                setOpenMobileIndex(index);
                setOpenSubIndex(null);
            }

            menuItem.sub?.forEach((subItem, subIndex) => {
                if (isActive(subItem.path)) {
                    setOpenMobileIndex(index);
                    setOpenSubIndex(subIndex);
                }

                subItem.subSub?.forEach((subSubItem) => {
                    if (isActive(subSubItem.path)) {
                        setOpenMobileIndex(index);
                        setOpenSubIndex(subIndex);
                    }
                });
            });
        });
    }, [location.pathname, menuData, isActive]);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.classList.add("open-menu");
        } else {
            document.body.classList.remove("open-menu");
        }

        return () => {
            document.body.classList.remove("open-menu");
        };
    }, [isMobileOpen]);

    return (
        <>
            <button className="mobi-toggle hamburger01" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <img
                    src={new URL('../../assets/images/common/hamburger-ico.png', import.meta.url).href}
                    alt="메뉴 열기"
                    className="hamb-one"
                />
            </button>

            {isMobileOpen && (
                <div className="mobile-menu">
                    <div className="m-gnb-top">
                        <ul>
                            <li>
                                <Link className="login" to="#a" title="로그인">
                                    로그인
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <button className="mobi-toggle hamburger02" onClick={() => setIsMobileOpen(false)}>
                        <img
                            src={new URL('../../assets/images/common/hamburger-close.png', import.meta.url).href}
                            alt="메뉴 닫기"
                            className="hamb-two"
                        />
                    </button>

                    <div className="m-gnb-mid">
                        <ul className="dep1">
                            {menuData.map((menuItem, index) => {
                                const hasSub = Array.isArray(menuItem.sub) && menuItem.sub.length > 0;
                                const isMenuItemActive =
                                    isActive(menuItem.path) ||
                                    menuItem.sub?.some((sub) => isActive(sub.path)) ||
                                    menuItem.sub?.some((sub) =>
                                        sub.subSub?.some((subSub) => isActive(subSub.path))
                                    );

                                return (
                                    <li
                                        key={index}
                                        className={[
                                            hasSub ? "has-sub" : "",
                                            isMenuItemActive ? "active" : "",
                                            openMobileIndex === index ? "open" : "",
                                        ].join(" ").trim()}
                                    >
                                        {hasSub ? (
                                            <a
                                                href="#!"
                                                title={menuItem.title}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (openMobileIndex !== index) {
                                                        setOpenMobileIndex(index);
                                                    }
                                                }}
                                            >
                                                {menuItem.title}
                                            </a>
                                        ) : (
                                            <Link to={menuItem.path} onClick={() => setIsMobileOpen(false)} title={menuItem.title}>
                                                {menuItem.title}
                                            </Link>
                                        )}

                                        <ul className={`dep2 ${openMobileIndex === index ? "open" : ""}`}>
                                            {menuItem.sub?.map((subItem, subIndex) => {
                                                const isSubActive =
                                                    isActive(subItem.path) ||
                                                    subItem.subSub?.some((subSubItem) => isActive(subSubItem.path));

                                                return (
                                                    <li
                                                        key={subIndex}
                                                        className={[
                                                            isSubActive ? "active" : "",
                                                            openSubIndex === subIndex ? "open" : "",
                                                        ].join(" ").trim()}
                                                    >
                                                        <Link to={subItem.path} title={subItem.title}>
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuMobileStyle01;
