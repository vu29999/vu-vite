
import { useLocation } from "react-router-dom";
import "./TitlePage.css";

interface SubSubMenuItem {
    path: string;
    title: string;
}

interface SubMenuItem {
    path: string;
    title: string;
    subSub?: SubSubMenuItem[];
}

interface MenuItem {
    path: string;
    title: string;
    sub?: SubMenuItem[];
}

interface TitlePageProps {
    menuData: MenuItem[];
}

const TitlePage: React.FC<TitlePageProps> = ({ menuData }) => {
    const location = useLocation();
    const path = location.pathname;

    let menu1: MenuItem | undefined;
    let menu2: SubMenuItem | undefined;
    let menu3: SubSubMenuItem | undefined;

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

            item.sub?.forEach(sub => {
                if (
                    path === sub.path ||
                    path.startsWith(sub.path + "/") ||
                    sub.subSub?.some(subsub =>
                        path === subsub.path || path.startsWith(subsub.path + "/")
                    )
                ) {
                    menu2 = sub;

                    const subSubMatch = sub.subSub?.find(subsub =>
                        path === subsub.path || path.startsWith(subsub.path + "/")
                    );
                    if (subSubMatch) {
                        menu3 = subSubMatch;
                    }
                }
            });
        }
    });

    return (
        <div className="title-box">
            <div className="sub-title">
                <h3>{menu3?.title || menu2?.title || menu1?.title}</h3>
            </div>
        </div>
    );
};

export default TitlePage;

