import React from 'react'
import NavBar from './NavBar';
import TabContentCiema from './TabContentCinema';
import TabContentListMovie from './TabContentMovie';
export default function index(props) {
    const { dataCinemaSytem, dataListCinema } = props;
    return (
        <>
            <div id='cinema_block_tix'></div>
            <section className="cinema_block">
                <div className="cinema_block_container">
                    <div className="bg-img-top_container">
                        <div className="bg-img-top" />
                    </div>
                    <NavBar dataCinemaSytem={dataCinemaSytem} />
                    <TabContentCiema dataCinemaSytem={dataCinemaSytem} dataListCinema={dataListCinema} />
                    <TabContentListMovie dataListCinema={dataListCinema} />
                    <div className="clear" />
                </div>
            </section>
        </>

    )
}
