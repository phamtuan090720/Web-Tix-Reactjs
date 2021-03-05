import React from 'react'
import styled from "styled-components";
export default function itemCarouselApp(props) {
    const Background = styled.div`
    background-image: url(${props.img.img});
    `;
    return (
       <Background className='bg_img item1'></Background>
    )
}

