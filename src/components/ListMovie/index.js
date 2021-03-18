import React,{useEffect} from 'react'
import DropdownIcon from '../../img/Icon/dropdown-icon.png';
import ShedulesBar from './ScheduleBar';
import Content from './Content';
import { connect } from 'react-redux';
// import {actListMovieAPI} from '../../container/HomeTemplate/HomePage/modules/action';
function Index(props) {
    const {currentPage,totalPages,dataListMovie}=props;
    // useEffect(()=>{
    //     props.fetchListMovie(count,currentPage);
    // },[currentPage]);
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
  },[currentPage]);
    return (
        <>
            <div id='movie_schedule_tix'></div>
            <section className="movie_schedule">
                <ShedulesBar DropdownIcon={DropdownIcon} />
                <Content/>
            </section>

        </>

    )
}
const mapStateToProp = state =>{
    return{
        currentPage:state.listMovieReducer.currentPage,
        totalPages:state.listMovieReducer.totalPages,
        count:state.listMovieReducer.count,
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         // fetchListMovie:(count,currentPage)=>{
//         //     dispatch(actListMovieAPI(count,currentPage));
//         // }
//     }
// }
export default connect(mapStateToProp,null)(Index);