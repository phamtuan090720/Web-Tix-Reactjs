import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { actCloseTrailer } from './modules/action';
import CloseModal from '../../img/Icon/close.png';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
function ModalTrailer(props) {
    const { link } = props;
    const [isOpen, setOpen] = React.useState("none");
    const Close = () => {
        props.RemoveLink();
        setOpen("none");
    }
    const RenderContent = useCallback(() => {
        if (link === null) {
            return <div className="Alert"><ErrorOutlineIcon />OPP! Phim Chưa Có Trailer...</div>
        }
        else {
            return <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="Trailer" src={link ? (link) : ""} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" />
            </div>
        }

    }, [link]);
    return (
        <div className="modal" id="modal_trailer" onClick={Close} style={{ display: isOpen }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" onClick={Close}><img src={CloseModal} alt='icon close modal' /></button>
                        <div className="Content">
                            {RenderContent()}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        link: state.BannerState.linkTrailer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        RemoveLink: () => {
            dispatch(actCloseTrailer());
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ModalTrailer);