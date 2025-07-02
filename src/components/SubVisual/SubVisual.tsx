
import { useLocation } from "react-router-dom";
import "./SubVisual.css";

interface SubSubMenu {
    path: string;
    title: string;
}

interface SubMenuItem {
    path: string;
    title: string;
    subSub?: SubSubMenu[];
}

interface MenuItem {
    path: string;
    title: string;
    sub?: SubMenuItem[];
}

interface SubVisualProps {
    menuData: MenuItem[];
}

const SubVisual: React.FC<SubVisualProps> = ({ menuData }) => {
    const location = useLocation();
    const path = location.pathname;

    // let menu1: MenuItem | null = null;
    let menu1: MenuItem | undefined;

    menuData.forEach(item => {
        if (
            path === item.path ||
            path.startsWith(item.path + "/") ||
            item.sub?.some(sub =>
                path === sub.path ||
                path.startsWith(sub.path + "/") ||
                sub.subSub?.some(subsub =>
                    path === subsub.path || path.startsWith(subsub.path + "/")
                )
            )
        ) {
            menu1 = item;
        }
    });

    return (
        <div className="sub-visual-wrap">
            <div className="sub-visual-box">
                <div className="sub-visual-cont">
                    <h2>{menu1?.title || "Title"}</h2>
                </div>
            </div>
        </div>
    );
};

export default SubVisual;

