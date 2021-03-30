import React from 'react'
import ContentChilld from './ConentChild';
export default function index(props) {
    const { dataListCinema } = props;
    // console.log(dataListCinema);
    const renderHTML = () => {
        if(dataListCinema&&dataListCinema.length>0){
            return dataListCinema.map((item,index)=>{
                if(index===0){
                    return <ContentChilld key={index} infoMovie={item} className={'tabcontent active'} />
                }
                else
                {
                    return<ContentChilld key={index} infoMovie={item} className={'tabcontent'} />
                }
             
            })
        }
    }
    return (
        <div className="tab-content listMovies">
            {renderHTML()}
        </div>
    )
}
