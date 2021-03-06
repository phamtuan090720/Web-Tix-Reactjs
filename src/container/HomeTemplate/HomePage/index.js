import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
import ListMovie from '../../../components/ListMovie';
import {actListMovieAPI,actCallApiGetInfoCinemaSytem,actCallApiGetListCinemaPost} from './modules/action';
import App from '../../../components/App';
import Footer from '../../../components/Footer';
import New from '../../../components/New';
import Cinema from '../../../components/CinemaBlock';
 function HomePage(props) {
    const {dataListMovie,count,currentPage,totalPages,dataCinemaSytem,dataListCinema,maHeThongRap} = props;
    useEffect(()=>{
        async function fetchDataCinema(){
           await props.fetchListSytemCinema();
        }
        fetchDataCinema();
        console.log('fetchListSytemCinema');
    },[]);
    
    useEffect(()=>{
        props.fetchListMovie(count,currentPage);
        console.log("fetchListMovie");
    },[currentPage]);
    useEffect(()=>{
          // khi render xong thì kiểm tra nếu currentPage đang ở trang 1 thì sẽ ẩn nút Prve
          if(currentPage<=1){
            document.getElementById('PrevSlick').style.display="none";
        }
        else{
            document.getElementById('PrevSlick').style.display="block";
        }
         // khi render xong thì kiểm tra nếu currentPage đang ở trang bằng với totalPages thì sẽ ẩn nút Next
        if(currentPage<(totalPages-1)){
            document.getElementById('NextSlick').style.display="block";
        }
        else{
            document.getElementById('NextSlick').style.display="none";
        }
    },[]);
    // khi currentPage thay đổi thì sẽ check lại điều kiện
    useEffect(()=>{
             // khi render xong thì kiểm tra nếu currentPage đang ở trang 1 thì sẽ ẩn nút Prve
             if(currentPage<=1){
                document.getElementById('PrevSlick').style.display="none";
            }
            else{
                document.getElementById('PrevSlick').style.display="block";
            }
             // khi render xong thì kiểm tra nếu currentPage đang ở trang bằng với totalPages thì sẽ ẩn nút Next
            if(currentPage===(totalPages-1)){
                document.getElementById('NextSlick').style.display="none";
            }
            else{
                document.getElementById('NextSlick').style.display="block";
            }
            
            console.log("Update");
    },[currentPage]);
    useEffect(()=>{
        if(dataCinemaSytem&&dataCinemaSytem.length>0){
            let x=dataCinemaSytem[0];
            props.fetchListCinema(x.maHeThongRap);
        }
    },[dataCinemaSytem]);
    useEffect(()=>{
        props.fetchListCinema(maHeThongRap);
    },[maHeThongRap]);
    console.log(dataListCinema);
    return (
        <div>
            <Carousel/>
            <ListMovie dataListMovie={dataListMovie}/>
            <Cinema dataCinemaSytem={dataCinemaSytem} dataListCinema={dataListCinema}/>
            <New/>
            <App/>
            <Footer/>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
        Loading:state.listMovieReducer.loading,
        dataListMovie:state.listMovieReducer.dataListMovie,
        count:state.listMovieReducer.count,
        currentPage:state.listMovieReducer.currentPage,
        totalPages:state.listMovieReducer.totalPages,
        dataCinemaSytem:state.listSytemCinemaReducer.dataCinemaSytem,
        dataListCinema:state.listCinemaReducer.dataListCinema,
        maHeThongRap:state.listCinemaReducer.maHeThongRap
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListMovie:(count,currentPage)=>{
            dispatch(actListMovieAPI(count,currentPage));
        },
        fetchListSytemCinema:()=>{
            dispatch(actCallApiGetInfoCinemaSytem());
        },
        fetchListCinema:(maHeThongRap)=>{
            dispatch(actCallApiGetListCinemaPost(maHeThongRap));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HomePage);