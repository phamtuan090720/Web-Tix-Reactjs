import React, { useCallback, useEffect } from 'react'
import Slider from "react-slick";
import NextIcon from '../../../img/Icon/next-session.png';
import BackIcon from '../../../img/Icon/back-session.png';
import { actHandleChangePage, actXemThem } from '../../../container/HomeTemplate/HomePage/modules/action';
import ContainerMovie from './ContainerMovie';
import { connect } from 'react-redux';
import { actListMovieAPI } from '../../../container/HomeTemplate/HomePage/modules/action';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
    }
}));

function SampleNextArrowComing(props) {
    const { className, style, onClick, currentPage, changeIndexPage } = props;
    let handelChangeIndex = () => {
        let currentPageNew = currentPage + 1;
        onClick();
        changeIndexPage(currentPageNew);
    }
    let Class = `${className} Next`;
    let idSlick = 'NextSlick';
    return (
        <div
            id={idSlick}
            className={Class}
            style={{
                ...style,
                display: "block", position: 'absolute',
                backgroundImage: `url(${NextIcon})`,
                width: '50px',
                height: '100px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                right: '-5%',
                top: '45%'
            }}
            onClick={handelChangeIndex}
        />
    );
}
function SamplePrevArrowComing(props) {
    const { className, style, onClick, currentPage, changeIndexPage } = props;
    let handelChangeIndex = () => {
        let currentPageNew = currentPage - 1;
        onClick();
        changeIndexPage(currentPageNew);
    }
    let Class = `${className} Prve`;
    return (
        <div
            id='PrevSlick'
            className={Class}
            style={{
                ...style, display: "block", backgroundImage: `url(${BackIcon})`,
                width: '50px',
                height: '100px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                left: '-5%',
                top: '45%'
            }}
            onClick={handelChangeIndex}
        />
    );
}

function Index(props) {
    const classes = useStyles();
    const { currentPage, changeIndexPage, count, fetchListMovie, group, totalPages, totalCount } = props;
    useEffect(() => {
        fetchListMovie(count, currentPage, group.group);
    }, [currentPage, group, count])
    useEffect(() => {
        // khi render xong thì kiểm tra nếu currentPage đang ở trang 1 thì sẽ ẩn nút Prve
        if (currentPage <= 1) {
            document.getElementById('PrevSlick').style.display = "none";
        }
        else {
            document.getElementById('PrevSlick').style.display = "block";
        }
        // khi render xong thì kiểm tra nếu currentPage đang ở trang bằng với totalPages thì sẽ ẩn nút Next
        if (currentPage < (totalPages - 1)) {
            document.getElementById('NextSlick').style.display = "block";
        }
        else {
            document.getElementById('NextSlick').style.display = "none";
        }
    }, []);
    // khi currentPage thay đổi thì sẽ check lại điều kiện
    useEffect(() => {
        // khi render xong thì kiểm tra nếu currentPage đang ở trang 1 thì sẽ ẩn nút Prve
        if (currentPage <= 1) {
            document.getElementById('PrevSlick').style.display = "none";
        }
        else {
            document.getElementById('PrevSlick').style.display = "block";
        }
        // khi render xong thì kiểm tra nếu currentPage đang ở trang bằng với totalPages thì sẽ ẩn nút Next
        if (currentPage === (totalPages - 1)) {
            document.getElementById('NextSlick').style.display = "none";
        }
        else {
            document.getElementById('NextSlick').style.display = "block";
        }
    }, [currentPage]);
    const RenderButtonXemThem = useCallback(
        () => {
            if (count === totalCount) {
            }
            else {
                return <div className="buttonGroup justify-content-center mb-4">
                    <Button className={classes.button} onClick={() => {
                        let newCount = count + 8;
                        props.xemThem(newCount);
                    }} variant="contained" color="secondary">
                        <b>Xem Thêm</b>
                    </Button>
                </div>
            }
        }, [count, totalCount]
    )
    // console.log(totalCount);
    const Render = React.useCallback(
        () => {
            return (
                <div className="movie_schedule_content">
                    <div className='movie_panel'>
                        <div className="nav_btn">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active showing" data-toggle="tab" href="#showing">Danh Sách Phim</a>
                                    {/* id="showing" */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link coming" data-toggle="tab" href="#coming">Sắp Chiếu</a>
                                </li>
                            </ul>
                        </div>
                        <div className='tab-content'>
                            <div className='tab-pane active' id='showing'>
                                <Slider {...settings} className='schedule_carousel'>
                                    <ContainerMovie />
                                    <ContainerMovie />
                                </Slider>
                                <div className="schedule_carousel_Tablet">
                                    <ContainerMovie />
                                </div>
                            </div>

                            <div className='tab-pane fade' id='coming'>
                                <div className='schedule_carousel'>
                                    <Slider {...settings} className='schedule_carousel'>
                                        <ContainerMovie />
                                    </Slider>
                                </div>
                                <div className="schedule_carousel_Tablet">
                                    <ContainerMovie />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        [currentPage],
    )
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: <SampleNextArrowComing currentPage={currentPage} changeIndexPage={changeIndexPage} />,
        prevArrow: <SamplePrevArrowComing currentPage={currentPage} changeIndexPage={changeIndexPage} />
    };
    return <>
        {Render()}
        {RenderButtonXemThem()}
    </>
}

const mapStateToProp = state => {
    return {
        currentPage: state.listMovieReducer.currentPage,
        totalPages: state.listMovieReducer.totalPages,
        count: state.listMovieReducer.count,
        dataListMovie: state.listMovieReducer.dataListMovie,
        group: state.LocationState.location,
        totalCount: state.listMovieReducer.totalCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: (count, currentPage, group) => {
            dispatch(actListMovieAPI(count, currentPage, group));
        },
        changeIndexPage: (currentPage) => {
            dispatch(actHandleChangePage(currentPage));
        },
        xemThem: (count) => {
            dispatch(actXemThem(count))
        }

    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Index);