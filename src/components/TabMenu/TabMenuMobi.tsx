import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./TabMenu.css";

interface SubSubMenu {
    menuCd?: string;
    path: string;
    title: string;
}

interface SubMenu {
    menuCd?: string;
    path: string;
    title: string;
    subSub?: SubSubMenu[];
}

interface MenuItem {
    menuCd?: string;
    path: string;
    title: string;
    sub?: SubMenu[];
}

interface TabMenuMobiProps {
    menuData: MenuItem[];
}

const TabMenuMobi: React.FC<TabMenuMobiProps> = ({ menuData }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const currentSub = menuData
        .flatMap(menu => menu.sub || [])
        .find(sub =>
            location.pathname === sub.path ||
            location.pathname.startsWith(sub.path + "/") ||
            (sub.subSub && sub.subSub.some(subsub =>
                location.pathname === subsub.path || location.pathname.startsWith(subsub.path + "/")
            ))
        );

    const subSubMenus = currentSub?.subSub || [];

    return (
        subSubMenus.length > 0 && (
            <div className="tab-mobile">
                <button
                    className="tab-toggle"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {
                        subSubMenus.find(item => location.pathname === item.path)?.title
                        || "선택하세요"
                    }
                </button>
                {isOpen && (
                    <ul className="tab-options">
                        {subSubMenus.map((menu, index) => (
                            <li key={menu.menuCd || index}>
                                <Link
                                    to={menu.path}
                                    onClick={() => setIsOpen(false)}
                                    className={classNames({ active: location.pathname === menu.path })}
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    );
};

export default TabMenuMobi;
