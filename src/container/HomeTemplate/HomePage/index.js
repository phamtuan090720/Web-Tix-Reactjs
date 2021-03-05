import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import Carousel from '../../../components/CarouselMovie';
import ListMovie from '../../../components/ListMovie';
import {actListMovieAPI} from './modules/action';
import App from '../../../components/App';
import Footer from '../../../components/Footer';
 function HomePage(props) {
    const {dataListMovie,count,currentPage,totalPages} = props;
    console.log(count,currentPage);
    useEffect(()=>{
        props.fetchListMovie(count,currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log("Render");
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
    return (
        <div>
            <Carousel/>
            <ListMovie dataListMovie={dataListMovie}/>
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
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchListMovie:(count,currentPage)=>{
            dispatch(actListMovieAPI(count,currentPage));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HomePage);