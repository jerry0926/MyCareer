import React from 'react';
import ReactDom from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Header extends React.Component {
    scrollToAbout() {
        scroller.scrollTo('scroll-to-about', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToSkill() {
        scroller.scrollTo('scroll-to-skill', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToPort() {
        scroller.scrollTo('scroll-to-portfolio', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToHonor() {
        scroller.scrollTo('scroll-to-honor', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <div>
                <div className="ui inverted menu fixed" id="header">
                    <div className="ui grid tablet computer only">
                        <div className="eight column centered row">
                            <div className="column">
                                <a href="#" onClick={() => this.scrollToAbout()}>Resume</a>
                            </div>
                            <div className="column">
                                <a href="#" onClick={() => this.scrollToSkill()}>Skill</a>
                            </div>
                            <div className="column">
                                <a href="#" onClick={() => this.scrollToPort()}>Portfolio</a>
                            </div>
                            <div className="column">
                                <a href="#" onClick={() => this.scrollToHonor()}>Honor</a>
                            </div>
                        </div>
                    </div>
                    <div className="ui middle aligned grid mobile only">
                        <div className="two wide column menuBox">
                            <a href="#" id="rwdHref"><i className="align justify big icon menuIcon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;