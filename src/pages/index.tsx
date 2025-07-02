import Greeting from "./Greeting/Greeting";
import Guide from "./Guide/Guide";
import TabMn01 from "./TabContent/TabMn01";
import TabMn02 from "./TabContent/TabMn02";
import TabMn03 from "./TabContent/TabMn03";
import About from "./About/About";
import About02 from "./About/About02";
import Team from "./Team/Team";
import Team02 from "./Team/Team02";
import Contact from "./Contact/Contact";
import Home from "./Home";
import Logins from "./Login/Logins";
import MenuStyle01 from "./MenuStyle/MenuStyle01";
import MenuStyle02 from "./MenuStyle/MenuStyle02";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/intro/greeting', element: <Greeting /> },
    { path: '/intro/guide', element: <Guide /> },
    { path: '/intro/tabmn01', element: <TabMn01 /> },
    { path: '/intro/tabmn02', element: <TabMn02 /> },
    { path: '/intro/tabmn03', element: <TabMn03 /> },
    { path: '/about/about', element: <About /> },
    { path: '/about/about02', element: <About02 /> },
    { path: '/team/team', element: <Team /> },
    { path: '/team/team02', element: <Team02 /> },
    { path: '/contact', element: <Contact /> },
    { path: '/login', element: <Logins /> },
    { path: '/header01', element: <MenuStyle01 /> },
    { path: '/header02', element: <MenuStyle02 /> },
]

export default routes;
// path="/home" element={<Home to="/" replace />}
