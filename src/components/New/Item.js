import React from 'react'
import LikeIcon from '../../img/Icon/like.png';
import CommentIcon from '../../img/Icon/comment.png';
import Pic from '../../img/News/41349f4ae77621aa818a599b16d3604a.png';
export default function mainItem(props) {
    const {dataItem} = props;
    return (
        <div className="col-12 col-sm-6 new_item">
            <a href="#">
                <img src={dataItem.hinhAnh} alt="hinhAnh" />
                <p className="title_new">{dataItem.title}</p>
            </a>
            <p className="new_content_sub">
            {dataItem.content}
                
  </p>
            <div className="icon_facebook">
                <div className="icon_like">
                    <img src={LikeIcon} /> <span> 0</span>
                </div>
                <div className="icon_comment">
                    <img src={CommentIcon} /> <span> 0</span>
                </div>
            </div>
        </div>

    )
}
