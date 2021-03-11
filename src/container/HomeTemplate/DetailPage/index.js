import React, {useEffect} from 'react'
import styled from "styled-components";
import bg from '../../../img/movie-details-bg.jpg';
import imgMovie from '../../../img/default-film.webp';
import Footer from '../../../components/Footer';
import BodyDetailPage from '../../../components/DetailPage/BodyDetailPage';
import { connect } from 'react-redux';
import Loader from '../../../components/Loader';
import * as Action from './modules/action';
function Index(props) {
    const {loading,data} = props;
    const id = props.match.params.id;
    console.log(id);
    console.log(props);
    useEffect(() => {
        setTimeout(()=>{
            props.fetchDetailMovie(id);
            console.log("render");
        },3000);
    }, []);
   
    console.log(loading);
        if(loading) return <Loader/>
        return (
            <>
                <BodyDetailPage data={data}/>
                <Footer/>
            </>
        )
  
}
const mapStateToProp = (state)=>{
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    };
}
const mapDispathToProp = (dispath) => {
    return {
        fetchDetailMovie: (id) => {
            dispath(Action.actDeailMovieAPI(id));
        },
    };
};
export default connect(mapStateToProp,mapDispathToProp)(Index);