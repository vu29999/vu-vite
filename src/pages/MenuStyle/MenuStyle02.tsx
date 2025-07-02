import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuStyle01.css";
import logo01 from '../../assets/images/common/logo-v.png';
import logo02 from '../../assets/images/common/logo-b.png';
import menuData from "../../components/Header/MenuData";
import MenuMobileStyle01 from "./MenuMobileStyle01";
import PopSiteMap from "../../components/Header/popSiteMap";

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

const MenuStyle02: React.FC = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const location = useLocation();


    return (
        <header>
            <div
                className={`header-wrap02 header-wrap03 ${hoverIndex !== null ? "on" : ""}`}
                onMouseLeave={() => setHoverIndex(null)}
            >
                <div className="top-header-wrap02">
                    <div className="top-header-box">
                        <ul className="top-util-box">
                            <li><Link to="/" title="home">Homee</Link></li>
                            <li><Link to="/Login" title="로그인">로그인</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-header-wrap02">
                    <div className="bottom-header-box">
                        <div className="bottom-header-content">
                            <h1>
                                <Link to="/" title="원격교육지원센터">
                                    <img src={logo01} alt="원격교육지원센터" className="logo-w" />
                                    <img src={logo02} alt="원격교육지원센터" className="logo-b" />
                                </Link>
                            </h1>
                            <div className="gnb">
                                <ul className="depth_01">
                                    {menuData.map((menuItem: MenuItem, index: number) => {
                                        const isMenuActive =
                                            location.pathname.startsWith(menuItem.path) ||
                                            menuItem.sub?.some(sub =>
                                                location.pathname.startsWith(sub.path) ||
                                                sub.subSub?.some(subsub =>
                                                    location.pathname.startsWith(subsub.path)
                                                )
                                            );

                                        return (
                                            <li
                                                key={index}
                                                className={(hoverIndex === index || isMenuActive) ? "on-menu" : ""}
                                                onMouseEnter={() => setHoverIndex(index)}
                                            >
                                                <Link to={menuItem.path} title={menuItem.title}>{menuItem.title}</Link>

                                                {hoverIndex === index && (
                                                    <div className="sub-mn-box">
                                                        {menuItem.sub && (
                                                            <ul className="depth_02">
                                                                {menuItem.sub.map((sub, subIndex) => {
                                                                    const isSubActive =
                                                                        location.pathname === sub.path ||
                                                                        location.pathname.startsWith(sub.path + "/") ||
                                                                        sub.subSub?.some(subsub =>
                                                                            location.pathname === subsub.path ||
                                                                            location.pathname.startsWith(subsub.path + "/")
                                                                        );

                                                                    return (
                                                                        <li key={subIndex} className={isSubActive ? "active" : ""}>
                                                                            <Link to={sub.path} title={sub.title}>{sub.title}</Link>

                                                                            {sub.subSub && sub.subSub.length > 0 && (
                                                                                <ul className="depth_03">
                                                                                    {sub.subSub.map((item, idx) => {
                                                                                        const isSubSubActive = location.pathname === item.path;
                                                                                        return (
                                                                                            <li key={idx} className={isSubSubActive ? "active" : ""}>
                                                                                                <Link to={item.path} title={item.title}>{item.title}</Link>
                                                                                            </li>
                                                                                        );
                                                                                    })}
                                                                                </ul>
                                                                            )}
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <PopSiteMap menuData={menuData} />
                            <MenuMobileStyle01
                                menuData={menuData}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrap-test">
                test
            </div>
        </header>
    );
};

export default MenuStyle02;
