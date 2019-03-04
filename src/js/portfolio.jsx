import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Portfolio extends React.Component {

    render() {
        const weatherTour = [
            {
                original: './src/img/other/首頁.jpg',
                thumbnail: './src/img/other/首頁.jpg',
            },
            {
                original: './src/img/other/景點簡例.jpg',
                thumbnail: './src/img/other/景點簡例.jpg'
            },
            {
                original: './src/img/other/景點.jpg',
                thumbnail: './src/img/other/景點.jpg'
            },
            {
                original: './src/img/other/周邊資訊.jpg',
                thumbnail: './src/img/other/周邊資訊.jpg'
            },
            {
                original: './src/img/other/偏好設定.jpg',
                thumbnail: './src/img/other/偏好設定.jpg'
            },
            {
                original: './src/img/other/選單.jpg',
                thumbnail: './src/img/other/選單.jpg'
            },
            {
                original: './src/img/other/行程.jpg',
                thumbnail: './src/img/other/行程.jpg'
            },
            {
                original: './src/img/other/行程編輯.jpg',
                thumbnail: './src/img/other/行程編輯.jpg'
            },
            {
                original: './src/img/other/分享.jpg',
                thumbnail: './src/img/other/分享.jpg'
            },
            {
                original: './src/img/other/外部頁面.jpg',
                thumbnail: './src/img/other/外部頁面.jpg'
            },
            {
                original: './src/img/other/樂透模式.jpg',
                thumbnail: './src/img/other/樂透模式.jpg'
            }
        ];
        const hiExam = [
            {
                original: './src/img/other/登入.png',
                thumbnail: './src/img/other/登入.png',
            },
            {
                original: './src/img/other/註冊.png',
                thumbnail: './src/img/other/註冊.png'
            },
            {
                original: './src/img/other/筆記.png',
                thumbnail: './src/img/other/筆記.png'
            },
            {
                original: './src/img/other/文章.png',
                thumbnail: './src/img/other/文章.png'
            },
            {
                original: './src/img/other/發問.png',
                thumbnail: './src/img/other/發問.png'
            },
            {
                original: './src/img/other/回答.png',
                thumbnail: './src/img/other/回答.png'
            },
            {
                original: './src/img/other/回答欄.png',
                thumbnail: './src/img/other/回答欄.png'
            },
            {
                original: './src/img/other/個人資訊.png',
                thumbnail: './src/img/other/個人資訊.png'
            },
            {
                original: './src/img/other/修改暱稱.png',
                thumbnail: './src/img/other/修改暱稱.png'
            },
            {
                original: './src/img/other/管理文章.png',
                thumbnail: './src/img/other/管理文章.png'
            }
        ]
        return (
            <Element name="scroll-to-portfolio">
                <div className="container portfolioBackground">
                    <div className="container title">
                        PORTFOLIO
                </div>
                    <div className="portfilioImg">
                        <div className="container portfolioBox portfolioColBox">
                            <div className="portfolioName">Weather Tour</div>
                            <div className="portfolioSlide">
                                <ImageGallery items={weatherTour} />
                            </div>
                        </div>
                        <div className="container portfolioBox">
                            <div className="portfolioName">Hi!EXAM</div>
                            <div className="portfolioSlide">
                                <ImageGallery items={hiExam} />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Portfolio;  