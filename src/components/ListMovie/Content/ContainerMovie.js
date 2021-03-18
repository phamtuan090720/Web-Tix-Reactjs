import React from 'react'
import { connect } from 'react-redux';
import Movie from './../../Movie';
function ContainerMovie(props) {
    const {dataListMovie}=props;
    const render=()=>{
        if(dataListMovie&&dataListMovie.length>0){
           return dataListMovie.map((movie)=>{
            return <div key={movie.maPhim} className='col-3'>
                <Movie data={movie} />
                </div>
            })
        }
        else{
            return<>
          
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            <div className='col-3'>
                <Movie/>
            </div>
            </> 
        }
    }
    return (
       <div className='schedule_carousel_container' style={{height:'1000px'}}>
            <div className="row">
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