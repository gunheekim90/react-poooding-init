import React, { Component } from 'react';
import styles from './BigCard.scss';
import Parser from 'html-react-parser'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const html = Parser(`<p><strong>0. 기본적으로 state는 이렇게 구성한다</strong></p>
 
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">this.state = {<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;enableScroll : false,<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;scrollLeft : &#39;&#39;,&nbsp; &nbsp; //마우스를 누른상태에서 발생하는 스크롤 이벤트, 동적인 가로축을 나타냄<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;clientX : &#39;&#39;&nbsp; // 마우스로 클릭한 상태의 x축을 보여줌<br />
}</div>

<p><strong>1. 컴포넌트에 아래와 같이 마우스 이벤트 및 ref를 설정 한다</strong></p>

<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">&nbsp;&lt;div className={cx(&#39;mainContainer&#39;)}<br />
&nbsp; &nbsp; onMouseDown={this.mouseDownEvent.bind(this)}<br />
&nbsp; &nbsp; onMouseMove={this.onMouseMoveEvent.bind(this)}<br />
&nbsp; &nbsp; onMouseUp={this.mouseUpEvent.bind(this)}<br />
&nbsp; &nbsp; ref={div =&gt; this.mainContainer = div}<br />
&nbsp;&gt;Component&lt;/div&gt;</div>

<p><strong>2. 그리고 아래와 같은 이벤트들을 등록한다.</strong></p>

<p>&nbsp;</p>

<p>// 물렀을 때 스크롤 이벤트가 가능하게 한다음 현재 scrollLeft와 clientX값 상태를 저장</p>

<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">mouseDownEvent(evt){<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// console.log(evt.clientX);<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// console.log(ReactDOM.findDOMNode(this.mainContainer).scrollLeft)<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;this.setState({<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;enableScroll : true,<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;scrollLeft : ReactDOM.findDOMNode(this.mainContainer).scrollLeft,<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;clientX : evt.clientX<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;})<br />
&nbsp;&nbsp; &nbsp;}</div>

<p>// 마우스를 떼면 초기화</p>

<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">&nbsp;&nbsp; &nbsp;mouseUpEvent(evt){<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;this.setState({<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;enableScroll : false,<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;scrollLeft: 0<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;})<br />
&nbsp;&nbsp; &nbsp;}</div>

<p>//드래그시에 저장되어 있는 scrollLEft와 clientX 값에 현재 변화중인 clientX값을 뺀다.</p>

<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">&nbsp;&nbsp; &nbsp;onMouseMoveEvent(evt){<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;if(this.state.enableScroll){<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// console.log(ReactDOM.findDOMNode(this.mainContainer).scrollLeft)<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// scrollLeft - clientX + event.clientX;<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;ReactDOM.findDOMNode(this.mainContainer).scrollLeft = this.state.scrollLeft + this.state.clientX - evt.clientX;&nbsp;&nbsp; &nbsp;<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;}<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<br />
&nbsp;&nbsp; &nbsp;}</div>

<p>&nbsp;</p>

<p><strong><span class="marker">ReactDOM.findDOMNode(this.mainContainer).scrollLeft = this.state.scrollLeft + this.state.clientX - evt.clientX;&nbsp;&nbsp;</span></strong></p>

<p>* 이 부분이 가장 이해가 안되었는데, scrollLeft값이 음수가 없기 때문에, 기존 값에 변화되는 X축 값을 빼야지만 원하는 방향으로 잡고 드래그가 가능해진다.</p>

<p>직관적으로 이해가 잘 안가지만, scrollLeft는 항상 마우스를 누른곳이 0부터 시작하는 이벤트이면서 동시에, 음수로는 가지 않는다는 걸 기억해야한다.</p>
`)
class BigCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div className={cx('codeContainer')}>
            
                <div className={cx('codeContainerTopImageWrapper')}>
                    

                    <p className={cx('codeContainerText')}>리액트 컴포넌트 수평 스크롤 이벤트 리액트</p>
                    <p className={cx('codeContainerTag')}>#React#Javacript#Scroll#Horizontal</p>
                    <p className={cx('codeContainerDate')}>2018-2-5 3:1</p>
                </div>
                <div className={cx('codeContainerTitle')}> {html} </div>
            
           
                    
        </div>

        )
    }
}
 
export default BigCard;