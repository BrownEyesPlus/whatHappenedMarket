import './issue.css';
import { Component } from 'react';

class Issue extends Component {

 render() {
  return (
    <div className='issue'>
        <div className='d-flex flex-col h-100'>
            <div className='issueWrap flex-swap'>
                <h2 className='issueTitle whTitle'>
                    Happened’s issue
                </h2>
                <p className='issueContent contentP'>
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>
                <a href="#" className='issueButton seeMoreBtn'> SEE MORE </a>
                <div className='issueList'>
                    <div className='issueItem whpnIssue'>
                        <div className='d-flex flex-col h-100'>
                            <div className='Issuewrap'>
                                <h2 className='whpnIssueTitle'>
                                Whpn Issue
                                </h2>
                                <a href='' className='whpnIssueImages'>
                                    <img src='images/news-img-01@3x.png'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='issueItem ' >
                        <h2 className='issueBoxTitle'>
                            B Brand
                        </h2>
                        <a href='#'>
                            <div className='issueBox' style={{background: "url('images/bbrand2.png')"}}>
                                <div className='issueBox2'>
                                    B brand
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='issueItem ' >
                        <h2 className='issueBoxTitle'>
                            B Brand
                        </h2>
                        <a href='#'>
                            <div className='issueBox' style={{background: "url('images/bbrand.png')"}}>
                                <div className='issueBox2'>
                                    B brand
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='issueItem ' >
                        <h2 className='issueBoxTitle'>
                            B Brand
                        </h2>
                        <a href='#'>
                            <div className='issueBox' style={{background: "url('images/bbrand2.png')"}}>
                                <div className='issueBox2'>
                                    B brand
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='issueItem ' >
                        <h2 className='issueBoxTitle'>
                            B Brand
                        </h2>
                        <a href='#'>
                            <div className='issueBox' style={{background: "url('images/bbrand.png')"}}>
                                <div className='issueBox2'>
                                    B brand
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
 }
}

export default Issue;
