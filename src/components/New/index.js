import React from 'react'
import NavNew from './NavNew';
import NewContent from './NewContent';
export default function index() {
    return (
        <section className='tix_news'>
            <div className='tix_new_content'>
                <div className="new_content_bg_top">
                    <div className="img_bg_top">
                    </div>
                </div>
                <div className='tix_new_container'>
                    <NavNew/>
                    <NewContent/>
                </div>
            </div>
        </section>
    )
}
