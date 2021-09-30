import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { Routes } from 'Routes/Routes';
import { Images } from 'Assets/Images';
import { FlexRow } from 'components/FlexRow/FlexRow';
import book1 from './../../../Assets/images/book1.png';
import book2 from './../../../Assets/images/book2.png';
import arrow from './../../../Assets/images/arrow-img.png';
import './books.css';

const Books = (props) => {

    const goToLink = (name) => {
        if(name === 'movingOn'){
            // replace link with client specific link
            window.open('https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9', '_blank');
        } else{
            window.open('https://www.amazon.com/Butterflies-Production-Five-Short-Stories-ebook/dp/B09F14SLY5/ref=mp_s_a_1_1?crid=XH2PSRURSQI1&dchild=1&keywords=butterflies+in+production+jl+caban&qid=1632925691&sprefix=butterflies+in+Prod&sr=8-1', '_blank');
        }
    }
    return (

        <SectionContainer className="bg-white text-black books-class" id="book-section">
            <h2 className="books-h6">Our Books</h2>
            <Row className="m-0 p-0">
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img alt="" width="120%" src={book2} style={{marginTop: '-10%'}}/>
                    <div className="book-buy-links">
                    <spam className="book-name">Butterflies in Production</spam>
                    <div className="line"></div>
                    <spam className="book-name amazon-link" onClick={()=>goToLink('butterflyInProduction')}>Buy book on Amazon <img alt="" width="10px" src={arrow} /></spam>
                    <Link to={`/${Routes.butterflies}`} style={{color: 'black'}}><spam className="book-name-right">Buy Book NFT <img alt="" width="10px" src={arrow} /></spam></Link>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-4 mt-3" >
                    <img alt="" width="120%" src={book1} style={{marginLeft: '-20%', marginTop: '-11.5%'}}/>
                    <div className="book-buy-links" style={{marginLeft: '0%', marginTop: '-19%'}}>
                    <spam className="book-name-rightSection">Moving On</spam>
                    <div className="line"></div>
                    <spam className="book-name amazon-link" onClick={()=>goToLink('movingOn')}>Buy book on Amazon <img alt="" width="10px" src={arrow} /></spam>
                    <Link to={`/${Routes.connect}`} style={{color: 'black'}}><spam className="book-name-right">Buy Book NFT <img alt="" width="10px" src={arrow} /></spam></Link>
                    </div>
                </Col>

            </Row>

        </SectionContainer>

    );

}

export default Books;