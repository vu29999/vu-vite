
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubVisual from "../../components/SubVisual/SubVisual";
import TitlePage from "../../components/TitlePage/TitlePage";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";
import dataTeam from '../../assets/fake-data/data-Team';

import "../../css/Guide.css";
import "./Team.css";

const Team = () => {

    return (
        <>
            <Header />
            <div className="sub-container">
                <SubVisual menuData={menuData} />
                <PathNavigator menuData={menuData} />
                <div className="content-wrap">
                    <TitlePage menuData={menuData} />
                    <div className="sub-content">
                        <div className="content-box">
                            <div className="con-box no-pd">
                                <div className="faculty-wrap active" id="member01">

                                    {dataTeam.map(item => (
                                        <div className="faculty-box" key={item.id}>
                                            <div className="faculty-top">
                                                <div className="txt-box">
                                                    <p className="txt01">교수</p>
                                                    <p className="txt02">{item.title}</p>
                                                </div>
                                                <div className="img-box">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                            </div>
                                            <ul className="faculty-mid">
                                                <li className="address">{item.address}</li>
                                                <li className="email"><a href={`mailto:${item.email}`} title="메일 보내기">{item.email}</a></li>
                                                <li className="tel"><a href={`tel:${item.tel}`} title="전화걸기">{item.tel}</a></li>
                                            </ul>
                                            <p className="p-info">Information</p>
                                            <ul className="faculty-bot">
                                                <li><span>연구실</span>{item.text01}</li>
                                                <li><span>전공분야</span>{item.text02}</li>
                                            </ul>
                                            <div className="faculty-link">
                                                <a href={item.link01} target="_blank" title="새창열림"><span>교수 소개 홈페이지</span></a>
                                                <a href={item.link02} target="_blank" title="새창열림"><span>연구실 홈페이지</span></a>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Team;
