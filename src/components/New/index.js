import React from 'react'
import NavNew from './NavNew';
import NewContent from './NewContent';
import {dataMainDienAnh,dataMainReview,dataMainKhuyenMai} from './dataMain';
import {dataSubDienAnh,dataSubReview,dataSubKhuyenMai} from './dataSub';
import {dataMiniDienAnh,dataMiniReview,dataMiniKhuyenMai} from './dataMini';
import bgTop from '../../img/Icon/back-news.png';
export default function index() {
    return (
        <>
        <div id='news_tix'></div>
            <section className='tix_news'>
            <div className='tix_new_content'>
                <div className="new_content_bg_top">
                    <div style={{backgroundImage:`url(${bgTop})`}} className="img_bg_top">
                    </div>
                </div>
                <div className='tix_new_container'>
                    <NavNew/>
                    <NewContent dataMainDienAnh={dataMainDienAnh} dataMainReview={dataMainReview}
                    dataMainKhuyenMai={dataMainKhuyenMai}
                    dataSubDienAnh={dataSubDienAnh}
                    dataSubReview={dataSubReview}
                    dataSubKhuyenMai={dataSubKhuyenMai}
                    dataMiniDienAnh={dataMiniDienAnh}
                    dataMiniReview={dataMiniReview}
                    dataMiniKhuyenMai={dataMiniKhuyenMai}
                    
                    />
                </div>
            </div>
        </section>
        </>
        
    )
}
