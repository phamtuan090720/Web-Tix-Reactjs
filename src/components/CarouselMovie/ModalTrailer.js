import React from 'react';
import { connect } from 'react-redux';
import { actCloseTrailer } from './modules/actions';
function ModalTrailer(props) {
    const { link } = props;
    const Close = () => {
        console.log("Remove");
        props.RemoveLink();
    }
    return (
        <div className="modal" id="modal_trailer" onClick={Close}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" onClick={Close}><img src={props.CloseModal} alt='icon close modal' /></button>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" width={500} height={300} src="{link}" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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