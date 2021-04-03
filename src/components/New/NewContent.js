import React from 'react'
import Content from './ContenChild';
export default function NewContent(props) {
  const {dataMainDienAnh,dataMainReview,dataMainKhuyenMai,dataSubDienAnh,dataSubReview,dataSubKhuyenMai,
    dataMiniDienAnh,dataMiniReview,dataMiniKhuyenMai} = props;
    return (
      <div className="tab-content">
              <div className="tab-pane active" id="dienAnh">
                  <Content dataMain={dataMainDienAnh}
                  dataSub={dataSubDienAnh}
                  dataMini={dataMiniDienAnh}
                  />
              </div>
              <div className="tab-pane fade " id="review">
                  <Content dataMain={dataMainReview}  dataSub={dataSubReview}
                   dataMini={dataMiniReview}/>
                 
              </div>
              <div className="tab-pane fade " id="khuyenMai">
                   <Content dataMain={dataMainKhuyenMai}  dataSub={dataSubKhuyenMai}
                     dataMini={dataMiniKhuyenMai}
                   />
              </div>
      </div>
    )
}
