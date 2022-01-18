import './footer.css';
import { Component } from 'react';

class Footer extends Component {

 render() {
  return (
    <div className='footer'>
        <div className='footerTop'>
            <div className='footerTopLeft'>
                <div className='footerOption'>
                    <div className='footerTitle'>
                        what happened
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li className='footerItem'>[공지] 29CM 강남 스토어 영업 종료</li>
                        <li className='footerItem'>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li className='footerItem'>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                        <li className='footerItem'>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                    </ul>
                </div>
            </div>
            <div className='footerTopRight'>
                <div className='footerOption'>
                    <div className='footerTitle'>
                        what happened
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'>회사 소개</li>
                        <li className='footerItem'>인재 채용</li>
                        <li className='footerItem'>상시 할인 혜택</li>
                    </ul>
                </div>
                <div className='footerOption'>
                    <div className='footerTitle'>
                    about us
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'>회사 소개</li>
                        <li className='footerItem'>인재 채용</li>
                        <li className='footerItem'>상시 할인 혜택</li>
                    </ul>
                </div>
                <div className='footerOption'>
                    <div className='footerTitle'>
                    my order
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'> 1 : 1 상담 내역</li>
                        <li className='footerItem'>상품 Q & A 내역</li>
                        <li className='footerItem'>공지 사항</li>
                        <li className='footerItem'>자주하는 질문</li>
                        <li className='footerItem'>고객의 소리</li>
                    </ul>
                </div>
                <div className='footerOption'>
                    <div className='footerTitle'>
                    my account
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'>회사 소개</li>
                        <li className='footerItem'>인재 채용</li>
                        <li className='footerItem'>상시 할인 혜택</li>
                    </ul>
                </div>
                <div className='footerOption'>
                    <div className='footerTitle'>
                    help
                    </div>
                    <ul className='footerList'>
                        <li className='footerItem'> 1 : 1 상담 내역</li>
                        <li className='footerItem'>상품 Q & A 내역</li>
                        <li className='footerItem'>공지 사항</li>
                        <li className='footerItem'>자주하는 질문</li>
                        <li className='footerItem'>고객의 소리</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footerBottom'>
            <div className='footerBottomLeft'>
            © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
            </div>
            <div className='footerBottomRight'>
                <div className='iconFooterList'>
                    <i className='iconFooter fa fa-facebook-square'></i>
                    <i className='iconFooter fa fa-medium'></i>
                    <i className='iconFooter fa fa-github-alt'></i>
                </div>
            </div>
        </div>
    </div>
  );
 }
}

export default Footer;
