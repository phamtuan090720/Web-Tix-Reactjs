import React from 'react';
import { connect } from 'react-redux';
import { actCloseTrailer } from './modules/action';
import CloseModal from '../../img/Icon/close.png';
function ModalTrailer(props) {
    const { link } = props;
    const [isOpen,setOpen]= React.useState("none");
    const Close = () => {
        props.RemoveLink();
        setOpen("none");
    }
    return (
        <div className="modal" id="modal_trailer" onClick={Close} style={{display:isOpen}}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" onClick={Close}><img src={CloseModal} alt='icon close modal' /></button>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={link} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" />
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