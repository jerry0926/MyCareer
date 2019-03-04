import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="container footerBackground">
                <div className="ui grid container footerContain">
                    <div className="ten wide column">
                        <div className="sixteen wide column footerBox">
                            <i className="phone icon honorTextIcon"></i>
                            <p className="footerText">(+886)933562094</p>
                        </div>
                        <div className="sixteen wide column footerBox">
                            <i className="home icon honorTextIcon"></i>
                            <p className="footerText">桃園市 桃園區</p>
                        </div>
                        <div className="sixteen wide column footerBox">
                            <i className="envelope icon honorTextIcon"></i>
                            <p className="footerText">dream84926@gmail.com</p>
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="sixteen wide column footerFbBox">
                        </div>
                        <div className="sixteen wide column footerFbBox">
                            <a href="https://www.facebook.com/tienyaoChuang"><i className="facebook icon honorFbIcon"></i></a>
                            <a href="https://www.instagram.com/tienyao926/"><i className="instagram icon honorFbIcon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;