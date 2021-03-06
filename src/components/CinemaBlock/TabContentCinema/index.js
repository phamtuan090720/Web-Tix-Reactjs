import React from 'react'
import ContentChilld from './ContentChilld';
export default function index(props) {
    const {dataCinemaSytem,dataListCinema}=props;
    const renderTabContent=()=>{
        if(dataCinemaSytem&&dataCinemaSytem.length>0){
            return dataCinemaSytem.map((Item,index)=>{
                if(index===0){
                   return <div id={Item.maHeThongRap} className="tab-pane active">
                       <ContentChilld dataListCinema={dataListCinema}/>
                        </div>
                }
                else{
                    return <div id={Item.maHeThongRap} className="tab-pane">
                        <ContentChilld dataListCinema={dataListCinema}/>
                        </div>
                }
               
            })
        }
        else{
            return <div>Không có dữ liệu</div>
        }
    }
    return (
        <div className="tab-content cinema_address">
            {renderTabContent()}
        </div>
    )
}
