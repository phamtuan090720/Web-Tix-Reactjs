import React from 'react'
import { connect } from 'react-redux';
import Movie from './../../Movie';
function ContainerMovie(props) {
    const {dataListMovie}=props;
    const render=()=>{
        if(dataListMovie&&dataListMovie.length>0){
           return dataListMovie.map((movie)=>{
            return <div key={movie.maPhim} className='col-6 col-lg-3'>
                    <Movie data={movie} />
                </div>
            })
        }
        else{
            return<>
          
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-lg-3'>
                <Movie/>
            </div>
            <div className='col-6 col-md-3'>
                <Movie/>
            </div>
            </> 
        }
    }
    return (
       <div className='schedule_carousel_container'>
            <div className="row m-0">
                {render()}
            </div>
        </div>
    )
}
const mapStateToProp = state => {
    return{
        dataListMovie:state.listMovieReducer.dataListMovie,
    }
}
   
export default connect(mapStateToProp,null)(ContainerMovie);