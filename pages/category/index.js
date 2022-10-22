import Main from "../../layouts/Main";
import SilderBook from "../../component/category/SilderBook";
import { Row, Col, Carousel, Layout } from "antd";
import TextHeading from "../../component/common/TextHeading";
import File from "../../component/items/File";
import { LeftCircleFilled, RightCircleFilled,ReadOutlined } from '@ant-design/icons';
import ItemReview from "../../component/items/ItemReview";
import Card from "../../component/items/Card";

export default function Category(){
    return(
        <div>
            <Main>
                <div className="category__silder">
                    <Row>
                        <Col lg={18}  sm={16} xs={24}>
                            <Carousel autoplay dots={{className:'dot__silder__category'}}>
                                <div>
                                    <SilderBook />
                                </div>
                                <div>
                                    <SilderBook />
                                </div>
                                <div>
                                    <SilderBook />
                                </div>
                            </Carousel>
                            <div>
                                <div className="category__silder__title">
                                    <TextHeading >Category</TextHeading>
                                </div>
                                <div className='category__contaner__content--listfile'>
                                    <File></File>
                                    <File></File>
                                    <File></File>
                                    <File></File>
                                    <File></File>
                                </div>
                                <Row align='middle'>
                                    <Col lg={4}  sm={6} xs={12}>
                                        <div className='home__next__back--slide slide__small'>
                                        <LeftCircleFilled className='btn__slide btn__back' />
                                        <RightCircleFilled className='btn__slide btn__next' />
                                        </div>
                                    </Col>
                                    <Col lg={14}  sm={12} xs={0}>
                                        <div className='silde__dot__bottom'>

                                        </div>
                                    </Col>
                                   
                                </Row>
                            </div>
                            <div className="category__list__book">
                                <Row>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                    <Col lg={6}  sm={8} xs={12}>
                                        <Card />
                                    </Col>
                                </Row>
                            </div>
                            
                        </Col>
                        <Col lg={6}  sm={8} xs={24}>
                            <div className="category__navbar__review">
                                <div className="category__navbar__review--title">
                                    <ReadOutlined />
                                    <span>Book review</span>
                                </div>
                                <Row>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                </Row>
                                
                            </div>                            
                        </Col>
                    </Row>
                </div>
            </Main>

            <style jsx>{`
                .category__silder{
                    max-width:95%;
                    margin:86px auto 24px;
                }

                .category__contaner__content--listfile{
                    display:flex;
                    overflow:hidden;
                    width:100%;
                    margin-bottom: 8px;
                }
                
                .category__silder__title{
                    float: left;
                    margin: 24px 0 16px 20px;
                }
                .home__next__back--slide{
                    position: absolute;
                    display: inline-flex;
                    width: 100%;
                    justify-content: space-between;
                    z-index: 10;
                    font-size: 42px;
                    color: rgba(255, 143, 92, 0.5);
                    top: 50%;
                    transform: translateY(-50%);
                }
          
                .slide__small{
                    font-size: 26px;
                    justify-content: space-evenly;
                    margin-top:12px;
                }

                .category__navbar__review--title{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 22px;
                    color: #FF8F5C;
                    margin:0 0 16px;
                }

                .category__list__book{
                    margin:32px 6px;
                }
            `}</style>

            <style jsx global>{`

                .category__silder .dot__silder__category{
                    bottom:-16px !important;
                }

                .category__silder .dot__silder__category > li{
                    background: #ccc;
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                }

                .category__silder .dot__silder__category > li.slick-active{
                    background: #FF8F5C;
                }

                .category__silder .dot__silder__category > li >button{
                    display: none;
                }

                .category__silder .home__next__back--slide .btn__slide{
                    cursor: pointer;
                }

                .category__silder .category__navbar__review .anticon-read{
                    font-size: 24px;
                    margin: 0px 6px;
                }
            `}</style>
        </div>
    )
}