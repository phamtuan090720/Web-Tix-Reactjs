import React, {useEffect,useState} from 'react'
import styled from "styled-components";
import bg from '../../../img/movie-details-bg.jpg';
import imgMovie from '../../../img/default-film.webp';
import Footer from '../../../components/Footer';
import BodyDetailPage from '../../../components/DetailPage/BodyDetailPage';
import { connect } from 'react-redux';
import Loader from '../../../components/Loader';
import * as Action from './modules/action';
import { Redirect } from 'react-router';
function Index(props) {
    const {loading,data,user} = props;
    const id = props.match.params.id;
   useEffect(() => {
       props.fetchDetailMovie(id);
    },[]);
    if(!user) return <Redirect to='/login'/>
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
        user: state.AuthReducer.data,
    };
}
const mapDispatchToProp = (dispath) => {
    return {
        fetchDetailMovie: (id) => {
            dispath(Action.actDeailMovieAPI(id));
        },
    };
};
export default connect(mapStateToProp,mapDispatchToProp)(Index);