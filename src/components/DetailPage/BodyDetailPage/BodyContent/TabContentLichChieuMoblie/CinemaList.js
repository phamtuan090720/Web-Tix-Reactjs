import React from 'react'
import IconInfo from '../../../../../img/Icon/3b044b88f751ba77406f7ebc15090514.png';
import styled from 'styled-components';
import ListCinema from './CinemaItem';
export default function CinemaList(props) {
    const { data } = props;
    const Img = styled.img`
        height: 15px;
        width: 15px;
        margin-right: 10px;
    `;
    const Logo = styled.img`
        height: 50px;
        width: 50px;
    `;
    const P = styled.p`
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    `;
    const PanelGroup = styled.div`
        border-bottom: 1px dashed;
        padding-bottom: 20px;
        padding-top: 20px;
    `;
    const PanelTitle = styled.div`
        align-items: center;
    `;
    const renderHTML = () => {
        if (data.heThongRapChieu) {
            return data.heThongRapChieu.map((item, index) => {
                if (item.maHeThongRap === "BHDStar") {
                    return (
                        <PanelGroup className="panel-group">
                            <div  className="panel-heading" data-toggle="collapse" data-target={`#${item.maHeThongRap}`}  aria-expanded="false" aria-controls={item.maHeThongRap}>
                                <PanelTitle className="panel-title d-flex">
                                    <Logo src={item.logo} alt className="mr-2" />
                                    <div className="wrap_info_cinema">
                                        <P className="cinema_name">{item.tenHeThongRap}</P>
                                        <P className="cinema_promo"><Img src={IconInfo} />x3 vé BHD Star 59k/vé</P>
                                    </div>
                                </PanelTitle>
                                <div className="list_cinema">
                                    <div id={item.maHeThongRap} className='collapse multi-collapse'><ListCinema logo={item.logo} data={item.cumRapChieu}/></div>
                                </div>
                            </div>
                        </PanelGroup>)
                }
                return (
                    <PanelGroup className="panel-group">
                        <div className="panel-heading" data-toggle="collapse" data-target={`#${item.maHeThongRap}`} aria-expanded="false" aria-controls={item.maHeThongRap}>
                            <PanelTitle className="panel-title d-flex">
                                <Logo src={item.logo} alt className="mr-2" />
                                <div className="wrap_info_cinema">
                                    <P className="cinema_name">{item.tenHeThongRap}</P>
                                </div>
                            </PanelTitle>
                            <div className="list_cinema">
                                <div id={item.maHeThongRap} className='collapse multi-collapse'>
                                   <ListCinema logo={item.logo} data={item.cumRapChieu}/>
                                </div>
                            </div>
                        </div>
                    </PanelGroup>)
            })
        }
    }
    return (
        <>
          {renderHTML()}
        </>
    )
}
