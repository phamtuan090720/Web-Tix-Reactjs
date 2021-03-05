import React from 'react'
import logoCGV from '../../img/sponsor/cgv.png';
import logoBhd from '../../img/sponsor/bhd.png';
import logoGalaxycine from '../../img/sponsor/galaxycine.png';
import logoLotte from '../../img/sponsor/lotte.png';
import logoCinestar from '../../img/sponsor/cinestar.png';
import logoMegags from '../../img/sponsor/megags.png';
import logoBt from '../../img/sponsor/bt.jpg';
import logoDongdacinema from '../../img/sponsor/dongdacinema.png';
import logoTOUCH from '../../img/sponsor/TOUCH.png';
import logoCnx from '../../img/sponsor/cnx.jpg';
import logoSTARLIGHT from '../../img/sponsor/STARLIGHT.png';
import logoDcine from '../../img/sponsor/dcine.png';
import logoZalopay_icon from '../../img/sponsor/zalopay_icon.png';
import logoPayoo from '../../img/sponsor/payoo.jpg';
import logoVCB from '../../img/sponsor/VCB.png';
import logoAGRIBANK from '../../img/sponsor/AGRIBANK.png';
import logoVIETTINBANK from '../../img/sponsor/VIETTINBANK.png';
import logoIVB from '../../img/sponsor/IVB.png';
import logo123go from '../../img/sponsor/123go.png';
import logoLaban from '../../img/sponsor/laban.png';
import logoApple from '../../img/sponsor/apple-logo.png';
import logoAndroid from '../../img/sponsor/android-logo.png';
import logoZion from '../../img/sponsor/zion-logo.jpg';
import logoFacebook from '../../img/sponsor/facebook-logo.png';
import logoZalo from '../../img/sponsor/zalo-logo.png';
import logoGOV from '../../img/sponsor/GOV.png';
export default function index() {
    return (
        <footer>
            <div className="sponsor container">
                <div className="row">
                    <div className="policy col-sm-4">
                        <p>TIX</p>
                        <div className="row">
                            <div className="policy_right col-sm-6">
                                <a href="#">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="policy_left col-sm-6">
                                <a href="#">Thỏa thuận sử dụng</a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="sponsor_panel col-sm-4">
                        <p>ĐỐI TÁC</p>
                        <div className="row">
                            <img src={logoCGV} style={{ backgroundColor: 'white' }} alt='logoCGV' />
                            <img src={logoBhd} alt='logoBhd' />
                            <img src={logoCinestar} alt='logoCinestar' />
                            <img src={logoGalaxycine} alt='logoGalaxycine' />
                            <img src={logoLotte} alt='logoLotte' />
                        </div>
                        <div className="row">
                            <img src={logoMegags} />
                            <img src={logoBt} />
                            <img src={logoDongdacinema} />
                            <img src={logoTOUCH} />
                            <img src={logoCnx} />
                        </div>
                        <div className="row">
                            <img src={logoSTARLIGHT} />
                            <img src={logoDcine} />
                            <img src={logoZalopay_icon} />
                            <img src={logoPayoo} />
                            <img src={logoVCB} />

                        </div>
                        <div className="row">
                            <img src={logoAGRIBANK} />
                            <img src={logoVIETTINBANK} />
                            <img src={logoIVB} />
                            <img src={logo123go} />
                            <img src={logoLaban} />
                        </div>
                    </div>
                    <div className="social_media col-sm-4 row">
                        <div className="mobile_content col-sm-6">
                            <p>MOBILE APP</p>
                            <a href="#">
                                <img src={logoApple} />
                            </a>
                            <a href="#">
                                <img src={logoAndroid} />
                            </a>
                        </div>
                        <div className="social_content col-sm-6">
                            <p>SOCIAL</p>
                            <a href="#">
                                <img src={logoFacebook} />

                            </a>
                            <a href="#">
                                <img src={logoZalo} />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sponsor_mb row">
                <div className="policy_right_mb col-sm-4">
                    <a href="#">FAQ</a>
                    <a href="#">Brand Guidelines</a>
                    <a href="#">Thỏa thuận sử dụng</a>
                    <a href="#">Chính sách bảo mật</a>
                </div>
                <div className="social_content_mb col-sm-4">
                    <a href="#">
                        <img src={logoFacebook} />
                    </a>
                    <a href="#">
                        <img src={logoZalo} />
                    </a>
                </div>
            </div>
            <div className="sponsor_mb2">
                <div className="policy_right_mb2">
                    <a href="#">FAQ</a>
                    <a href="#">Brand Guidelines</a>
                    <a href="#">Chính sách bảo mật</a>
                    <a href="#">Thỏa thuận sử dụng</a>
                </div>
                <div className="social_content_mb2">
                    <a href="#">
                        <img src={logoFacebook} />
                    </a>
                    <a href="#">
                        <img src={logoZalo} />
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer_content container">
                <div className="row">
                    <div className="footer_logo col-sm-1">
                        <img src={logoZion} />
                    </div>
                    <div className="footer_description col-sm-9">
                    <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                    <span>Web Này Được Làm Bởi Phạm Tuân</span>
                    <span>Số Điện Thoại (Hotline): 0363902003<br />
                        <span>Email: <a href="#">mr.tuan179@gmail.com</a></span>
                    </span></div>
                    <div className="verify col-sm-2">
                        <img src={logoGOV} />
                    </div>
                </div>
            </div>
            <div className="footer_content_mb2">
                <div className="footer_logo_mb2">
                    <img src={logoZion} />
                </div>
                <div className="footer_description_mb2">
                    <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                    <span>Web Này Được Làm Bởi Phạm Tuân</span>
                    <span>Số Điện Thoại (Hotline): 0363902003<br />
                        <span>Email: <a href="#">mr.tuan179@gmail.com</a></span>
                    </span></div>
                <div className="verify_mb2">
                    <img src={logoGOV} />
                </div>
            </div>
        </footer>
    )
}
