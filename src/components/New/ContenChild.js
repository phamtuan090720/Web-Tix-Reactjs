import React from 'react'
import Item from './Item';
import SubItem from './SubItem';
import ItemMini from './miniItem';
export default function ContenChild(props) {
    const { dataMain, dataSub, dataMini } = props;
    const renderMainItem = () => {
        if (dataMain && dataMain.length) {
            return dataMain.map((item, index) => {
                return <Item key={index} dataItem={item} />
            })
        }
    }
    const renderSubItem = () => {
        if (dataSub && dataSub.length) {
            return dataSub.map((item, index) => {
                return <SubItem key={index} dataItem={item} />
            })
        }
    }
    const renderMiniItem = () => {
        if (dataMini && dataMini.length) {
            return dataMini.map((item, index) => {
                return <ItemMini key={index} dataItem={item} />
            })
        }
    }
    return (
        <><div className="row new_main_items">
            {renderMainItem()}
        </div>
            <div className='row new_sub_items'>
                {renderSubItem()}
                <div className="col-12 col-sm-4 mini_new" >
                    <div className="row">
                        {renderMiniItem()}
                    </div>
                </div>
            </div>


        </>
    )
}
