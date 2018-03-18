import React from "react";
import ReactDom from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Introduction extends React.Component {
    startButton() {
        scroller.scrollTo('scroll-to-about', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <div className="container introBackground">
                <div id="introductionBox">
                    <p className="myIntroduction">
                        <nobr id="hi">Hi!</nobr>&nbsp;&nbsp;&nbsp; I'm
                            <nobr> Tien Yao</nobr> Chuang, you can also call me <nobr>Jerry</nobr>, this is my personal website, and you can see my career here, so Let's
                    </p>
                    <div className="massive ui inverted animated button computer tablet only bigButton startButton" tabIndex="0" onClick={() => this.startButton()}>
                        <div className="visible content">START</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </div>
                    <div className="huge ui inverted animated button computer tablet only smallButton startButton" tabIndex="0" onClick={() => this.startButton()}>
                        <div className="visible content">START</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduction;