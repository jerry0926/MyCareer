import React from 'react';
import ReactDom from 'react-dom';
import Header from './js/header.jsx';
import Introduction from './js/introduction.jsx';
import About from './js/about.jsx';
import Skill from './js/skill.jsx';
import Portfolio from './js/portfolio.jsx';
import Honor from './js/honor.jsx';
import Footer from './js/footer.jsx';
import Menu from './js/menu.jsx';
import './css/style.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Career extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Menu />
                </div>
                <div className="pusher">
                    <Header />
                    <Introduction />
                    <About />
                    <Skill />
                    <Portfolio />
                    <Honor />
                    <Footer />
                </div>
            </div>
        );
    }
    componentDidMount() {
        scroll.scrollToTop(0);
    }
}

ReactDom.render(<Career />, document.getElementById('page'));