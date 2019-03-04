import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Menu extends React.Component {
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
        var lineStyle = {
            paddingTop: '5vh',
            textAlign: 'center'
        }
        return (
            <div className="menuContain">
                <div className="ui thin sidebar inverted vertical menu menuBox" style={lineStyle}>
                    <a onClick={() => this.scrollToAbout()} className="item menuText">Resume</a>
                    <a href="#" onClick={() => this.scrollToSkill()} className="item menuText">Skill</a>
                    <a href="#" onClick={() => this.scrollToPort()} className="item menuText">Portfolio</a>
                    <a href="#" onClick={() => this.scrollToHonor()} className="item menuText">Honor</a>
                </div>
            </div>
        );
    }
}

export default Menu;