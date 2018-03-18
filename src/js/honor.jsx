import React from 'react';
import ReactDom from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Honor extends React.Component {
    render() {
        return (
            <Element name="scroll-to-honor">
                <div className="container honorBackground">
                    <div className="container title">
                        HONOR
                </div>
                    <div className="container honorContain">
                        <div className="ui middle aligned equal width grid container honorTable">
                            <div className="equal width computer only centered row honorRow1">
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/全國大專院校軟體創作競賽_佳作.jpg" /><p className="honorText">全國大專院校軟體創作競賽_佳作</p></div>
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/智慧終端軟體創作競賽_佳作.jpg" /><p className="honorText">智慧終端軟體創作競賽_佳作</p></div>
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/全國大專校院開源軟體程式創意設計競賽_佳作.jpg" /><p className="honorText">全國大專院校開源軟體競賽_佳作</p></div>
                            </div>
                            <div className="equal width computer only centered row honorRow2">
                                <div className="column row2"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學_書卷獎.jpg" /><p className="honorText">海洋大學_書卷獎</p></div>
                                <div className="column row2"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學系內專題競賽_第二名.jpg" /><p className="honorText">海洋大學系內專題競賽_銀牌</p></div>
                                <div className="column row2"><img className="ui middle aligned image honorColImg" src="./src/img/other/全國大專院校獎狀_注目獎.jpg" /><p className="honorText">全國大專院校軟體競賽_注目獎</p></div>
                            </div>
                            <div className="equal width tablet only centered row honorRow1">
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/全國大專院校軟體創作競賽_佳作.jpg" /><p className="honorText">全國大專院校軟體創作競賽_佳作</p></div>
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/智慧終端軟體創作競賽_佳作.jpg" /><p className="honorText">智慧終端軟體創作競賽_佳作</p></div>
                            </div>
                            <div className="equal width tablet only centered row honorRow2">
                                <div className="column row1"><img className="ui middle aligned image" src="./src/img/other/全國大專校院開源軟體程式創意設計競賽_佳作.jpg" /><p className="honorText">全國大專院校開源軟體競賽_佳作</p></div>
                                <div className="column row2 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學_書卷獎.jpg" /><p className="honorText">海洋大學_書卷獎</p></div>
                            </div>
                            <div className="equal width tablet only centered row honorRow3">
                                <div className="column row3 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學系內專題競賽_第二名.jpg" /><p className="honorText">海洋大學系內專題競賽_銀牌</p></div>
                                <div className="column row3 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/全國大專院校獎狀_注目獎.jpg" /><p className="honorText">全國大專院校軟體競賽_注目獎</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow1">
                                <div className="column row1"><img className="ui middle aligned image honorRowImg" src="./src/img/other/全國大專院校軟體創作競賽_佳作.jpg" /><p className="honorText">全國大專院校軟體創作競賽_佳作</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow2">
                                <div className="column row2"><img className="ui middle aligned image honorRowImg" src="./src/img/other/智慧終端軟體創作競賽_佳作.jpg" /><p className="honorText">智慧終端軟體創作競賽_佳作</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow3">
                                <div className="column row3"><img className="ui middle aligned image honorRowImg" src="./src/img/other/全國大專校院開源軟體程式創意設計競賽_佳作.jpg" /><p className="honorText">全國大專院校開源軟體競賽_佳作</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow4">
                                <div className="column row4 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學_書卷獎.jpg" /><p className="honorText">海洋大學_書卷獎</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow5">
                                <div className="column row5 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/海洋大學系內專題競賽_第二名.jpg" /><p className="honorText">海洋大學系內專題競賽_銀牌</p></div>
                            </div>
                            <div className="equal width mobile only centered row honorRow6">
                                <div className="column row6 centered"><img className="ui middle aligned image honorColImg" src="./src/img/other/全國大專院校獎狀_注目獎.jpg" /><p className="honorText">全國大專院校軟體競賽_注目獎</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Honor;