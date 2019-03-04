import React from 'react';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
class Skill extends React.Component {
    render() {
        return (
            <Element name="scroll-to-skill">
                <div className="container skillBackground">
                    <div className="container title">
                        SKILLS
                </div>
                    <div className="skillContain">
                        <div className="ui middle aligned equal width grid container skillTable">
                            <div className="equal width row skillRow1">
                                <div className="column row1"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/html5.png' /><span className="skillName">HTML</span></div></div>
                                <div className="column row1"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/javascript.png' /><span className="skillName">JavaScript</span></div></div>
                                <div className="column tablet computer only row1"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/jquery.png' /><span className="skillName">Jquery</span></div></div>
                                <div className="column computer only row1"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/css3.png' /><span className="skillName">CSS</span></div></div>
                            </div>
                            <div className="equal width row skillRow2">
                                <div className="column mobile only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/jquery.png' /><span className="skillName">Jquery</span></div></div>
                                <div className="column mobile tablet only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/css3.png' /><span className="skillName">CSS</span></div></div>
                                <div className="column tablet computer only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/scss.png' /><span className="skillName">SCSS</span></div></div>
                                <div className="column tablet computer only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/react.png' /><span className="skillName">React</span></div></div>
                                <div className="column computer only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/es6.jpg' /><span className="skillName">ES6</span></div></div>
                                <div className="column computer only row2"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/webpack.png' /><span className="skillName">Webpack</span></div></div>
                            </div>
                            <div className="equal width row skillRow3">
                                <div className="column mobile only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/scss.png' /><span className="skillName">SCSS</span></div></div>
                                <div className="column mobile only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/react.png' /><span className="skillName">React</span></div></div>
                                <div className="column tablet only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/es6.jpg' /><span className="skillName">ES6</span></div></div>
                                <div className="column tablet only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/webpack.png' /><span className="skillName">Webpack</span></div></div>
                                <div className="column tablet computer only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/localstorage.png' /><span className="skillName">Localstorage</span></div></div>
                                <div className="column computer only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/mysql.png' /><span className="skillName">MySQL</span></div></div>
                                <div className="column computer only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/php.png' /><span className="skillName">PHP</span></div></div>
                                <div className="column computer only row3"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/java.png' /><span className="skillName">JAVA</span></div></div>
                            </div>
                            <div className="equal width row mobile tablet only skillRow4">
                                <div className="column mobile only row4"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/es6.jpg' /><span className="skillName">ES6</span></div></div>
                                <div className="column mobile only row4"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/webpack.png' /><span className="skillName">Webpack</span></div></div>
                                <div className="column tablet only row4"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/mysql.png' /><span className="skillName">MySQL</span></div></div>
                                <div className="column tablet only row4"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/php.png' /><span className="skillName">PHP</span></div></div>
                                <div className="column tablet only row4"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/java.png' /><span className="skillName">JAVA</span></div></div>
                            </div>
                            <div className="equal width row mobile only skillRow5">
                                <div className="column row5"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/localstorage.png' /><span className="skillName">Localstorage</span></div></div>
                                <div className="column row5"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/mysql.png' /><span className="skillName">MySQL</span></div></div>
                            </div>
                            <div className="equal width row mobile only skillRow6">
                                <div className="column row6"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/php.png' /><span className="skillName">PHP</span></div></div>
                                <div className="column row6"><div className="skillBox"><img className="ui middle aligned mini image skillImg" src='./src/img/java.png' /><span className="skillName">JAVA</span></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Skill;  