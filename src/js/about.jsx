import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class About extends React.Component {
    render() {

        return (
            <Element name="scroll-to-about">
                <div className="container aboutBackground" id="aboutPage">
                    <div className="container title" id="aboutTitle">
                        ABOUT TIEN YAO
                </div>
                    <div className="aboutPicture">
                        <div id="myResume">
                            <img className="ui small circular image centered" id="myHeadShot" src="./src/img/headshot.jpg" />
                            <div className="ui grid tablet computer only resumeText">
                                <div className="eight wide column">
                                    <p className="textTitle">Information</p>
                                    <p className="textCss">
                                        Hi! My name is Jerry. I hold a bachelor's degree with
                                        a major in Computer Science and Information Engineering which was awarded to me by
                                        National Taiwan Ocean University in keelung in 2018. And now I'm 24 years old, live
                                        in Taiwan Taoyuan city.
                                </p>
                                </div>
                                <div className="eight wide column">
                                    <p className="textTitle">Interest</p>
                                    <p className="textCss">
                                        I enjoy outdoor activities and music, I think the life can't live without both of them. And talk about
                                        my profession, I'm interested in Front End Engineering Design, I can fell fulfilled when I
                                        complete a Web design, so I will keep enhancing my skill in this field.
                                </p>
                                </div>
                            </div>
                            <div className="ui grid mobile only resumeText" >
                                <div className="sixteen wide column">
                                    <p className="textTitle">Information</p>
                                    <p className="textCss">
                                        Hi! My name is Jerry. I hold a bachelor's degree with
                                        a major in Computer Science and Information Engineering which was awarded to me by
                                        National Taiwan Ocean University in keelung in 2018. And now I'm 24 years old, live
                                        in Taiwan Taoyuan city.
                                </p>
                                </div>
                                <div className="sixteen wide column aboutColTwo">
                                    <p className="textTitle">Interest</p>
                                    <p className="textCss">
                                        I enjoy outdoor activities and music, I think the life can't live without both of them. And talk about
                                        my profession, I'm interested in Front End Engineering Design, I can fell fulfilled when I
                                        complete a Web design, so I will keep enhancing my skill in this field.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default About;  