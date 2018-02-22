import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import {connect} from 'react-redux';
import {  } from '../API/data';
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import CardComponent from '../Containers/Card/CardComponent'
import terminalInput from '../Components/terminalInput'

const cx = classNames.bind(styles);

class terminalPage extends Component {

	constructor(props){
		super(props);
		this.state = {
            input : 1,
            terminalInput : []
        }

        this.bodyClick = this.bodyClick.bind(this);
	}
    
    componentWillMount(){
        this.state.terminalInput.push(
            <div>
            <span style={{color:'#1DDB16'}}>user@Gunheekim90</span> <span style={{color : '#FF00DD'}}>MINGW64</span> / <input  ref={input => this.terminalInput =input} className={cx('terminalInputReady')} onKeyPress={this._handleKeyPress} autoFocus/><br/>
            
            </div>
        )
    }

    bodyClick(){
        this.terminalInput.focus();
    }
    
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
         
          e.target.setAttribute('disabled','true')
          this.setState({
              input : Number(this.state.input) + 1
          })

          

          //여기서 로직 결정
          //있으면 push 없으면 넘어가기
        //   this.state.terminalInput.push(<div>tests</div>)


          if(e.target.value === 'help'){
            this.state.terminalInput.push(
            
                <div>
                    <p>* 명령어 몇 개 없습니다. 실망하지 마세요. 업데이트 하도록 하겠습니다.</p>
                    <ul>
                     <li>help</li>
                     <li>status</li>
                     <li>about --poooding</li>
                     <li>about --homepage</li>
                     <li>project</li>
                     <li>clear</li>
                     <li>exit</li>
                    </ul>
                </div>
            )
          }else if(e.target.value === 'about --poooding'){
            this.state.terminalInput.push(
            
                <div>
                    
                    <p><span style={{color : 'yellow'}}>생년월일</span> : 1990. 05. 01</p>
                    <p><span style={{color : 'yellow'}}>이름</span> : 김건희</p>
                    <p><span style={{color : 'yellow'}}>닉네임</span> : poooding</p>
                    <p><span style={{color : 'yellow'}}>이메일</span> : gunhee21@gmail.com</p>
                    <p><span style={{color : 'yellow'}}>사는곳</span> : 당산</p>
                    <p><span style={{color : 'yellow'}}>특기</span> : 빠른 프로토타입 만들고 피드백으로 두들겨 맞은 뒤, 빠르게 수정하기</p>
                    
                    <p><span style={{color : 'yellow'}}>취미</span> : 코인노래방가기</p>
                    <p><span style={{color : 'yellow'}}>잘 다룬다 생각하는 기술</span> : Javascript 계열(Node.JS, React.JS, React Native, TypeScript)</p>
                    <p><span style={{color : 'yellow'}}>다룰 수 있는 기술</span> : ejs, 전자정부 프레임워크(Spring), Android, geth, Solidity, AWS, Ubuntu, python 초큼</p>

                    <p><span style={{color : 'yellow'}}>특이사항</span> : 마케팅 경험이 있어, 도달율 광고나 구글 애널리틱스 설치가 가능<br/>(회사에서 약간의온라인 마케팅 업무도 보고 있음) </p>
                </div>
            )

          }else if(e.target.value === 'status'){

             this.state.terminalInput.push(
                <div>
                    <p><span style={{color : 'yellow'}}>YELLOW</span>: 직장을 다니고 있지만, 프로젝트할 여분의 시간이 있습니다. 편하게 연락주세요</p>
                    <p>Email : gunhee21@gmail.com</p>
                </div>
             )
            
          }else if(e.target.value === 'about --homepage'){

            this.state.terminalInput.push(
               <div>
                   <p><span style={{color : 'green'}}>서버</span> : AWS에 EC2에 Ubuntu에 Nginx를 설치 운영</p>
                   <p><span style={{color : 'green'}}>백엔드</span> : Node JS로 API 서버 운영 하면서 프론트와는 JWT과 함께 주고받고 하고 있음</p>
                   <p><span style={{color : 'green'}}>프론트</span> : 리액트(리덕스,thunk, 리액트 라우터 사용) </p>
                   <p><span style={{color : 'green'}}>디비</span> : Mysql </p>
                   <p><span style={{color : 'green'}}>또 디비</span> : 혹시 나중에 홈페이지 같이 운영하실분을 위해 Redis 로그인 디비 갖춤</p>
                   <p><span style={{color : 'green'}}>디자인</span> : 창작의 고통을 혼자 겪음</p>
               </div>
            )
           
         }else if(e.target.value === 'sex'){

            this.state.terminalInput.push(
               <div>
                   <p>sex는 저쪽 가서 하시고</p>
               </div>
            )
           
         }else if(e.target.value === 'exit'){

            window.location.href = '/'
           
         }else if(e.target.value === 'clear'){

            window.location.href = '/terminal'
           
         }else if(e.target.value === 'ls -al' || e.target.value === 'ls' || e.target.value === 'dir'){

            this.state.terminalInput.push(
                <div>
                    <p>
                        total 1201<br/>
                        drwxr-xr-x 1 user 197609      0 2월   9 00:25 ./<br/>
                        drwxr-xr-x 1 user 197609      0 2월  19 21:35 ../<br/>
                        drwxr-xr-x 1 user 197609      0 2월  20 17:54 .git/<br/>
                        -rw-r--r-- 1 user 197609    285 1월  13 15:35 .gitignore<br/>
                        drwxr-xr-x 1 user 197609      0 2월   9 00:25 build/<br/>
                        drwxr-xr-x 1 user 197609      0 1월  13 15:36 config/<br/>
                        drwxr-xr-x 1 user 197609      0 2월   9 01:27 node_modules/<br/>
                        -rw-r--r-- 1 user 197609   3375 2월   9 01:27 package.json<br/>
                        -rw-r--r-- 1 user 197609 401870 1월  31 00:09 package-lock.json<br/>
                        drwxr-xr-x 1 user 197609      0 2월  20 02:25 public/<br/>
                        -rw-r--r-- 1 user 197609    992 1월  18 22:39 README.md<br/>
                        drwxr-xr-x 1 user 197609      0 1월  15 22:44 scripts/<br/>
                        drwxr-xr-x 1 user 197609      0 2월   5 18:21 src/<br/>
                        -rw-r--r-- 1 user 197609 108987 1월  13 15:35 Uasage-react-create-app.md<br/>
                        -rw-r--r-- 1 user 197609 270183 2월   9 01:27 yarn.lock<br/>
                    </p>
                </div>
             )
           
         }else if(e.target.value === 'project'){

            this.state.terminalInput.push(
                <div>
                    <div>Lazard Korea Management Service:<br/>
                        <ul>
                            <li>인바이유: 보험 공동구매 플랫폼,어드민(풀스택)</li>
                            <li>토스: 여행자 보험 상품 API 서버(백엔드)</li>
                            <li>펀드랩: 크라우드펀딩 플랫폼, 어드민(풀스택)</li>
                        </ul>
                    </div>
                    <div>All About Grad:<br/>
                        <ul>
                            <li>얼어바웃그래드: 교수추천 검색 플랫폼(풀스택)</li>
                            <li>그래드 컨설팅: 유학,에세이 첨삭 서비스 플랫폼(풀스택)</li>
                        </ul>
                    </div>
                    <div><span style={{color : 'red'}}>W.Design hotel(現)</span><br/>
                        <ul>
                            <li>WNH : 호텔 예약 서비스 플랫폼(풀스택,안드로이드앱)</li>
                        </ul>
                    </div>
                </div>
             )
           
         }else if(e.target.value === 'fuck' || e.target.value === '씨발' || e.target.value === '시팔' ||e.target.value === '병신' ||e.target.value === '개새끼'||e.target.value === '개새키' ||e.target.value === '미친놈'){

            this.state.terminalInput.push(
               <div>
                   <p>그거 칠 줄 알았다, 이건 걸러낼 수 있다 이새키야</p>
               </div>
            )
           
         }else{
            this.state.terminalInput.push(
                <div>
                    <p>그 명령어 제가 한번 업데이트 하도록 하겠습니다. 곧</p>
                </div>
             )
         }

          this.state.terminalInput.push(
            <div>
            <span style={{color:'#1DDB16'}}>user@Gunheekim90</span> <span style={{color : '#FF00DD'}}>MINGW64</span> / <input ref={input => this.terminalInput =input} className={cx('terminalInputReady')} onKeyPress={this._handleKeyPress} autoFocus/><br/>
            
            </div>
         )
          
          
          
        }
    }


	render(){

 
		return (
			<div className={cx('terminalBody')} onClick={this.bodyClick}>
                <p>Benchmark GIT Bash$</p>
				<p>This is fake terminal for developer who familiar with console!</p>
                <p>And, this is made with react</p>
                <p>If you want to know about me, please type 'help'</p><br/>

                {this.state.terminalInput.map((terminalInput, i) => {
                        return (
                            <div key={i}>{terminalInput}</div>
                        );
                })}

			</div>
		)
	}
}

export default connect(null,{})(terminalPage);