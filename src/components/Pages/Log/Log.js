import classNames from "classnames/bind";
import styles from "./Log.module.scss"
import { useState } from "react";
import SigninForm from "./SigninForm";
import LoginForm from "./LoginForm";
const cx = classNames.bind(styles)
function Log() {
    const [showLog,setshowLog] = useState(true)
    return <div className={cx("wrapper")}>
        <div className={cx("header")}>
            <img className={cx("logo")} src="https://accgroup.vn/wp-content/uploads/2022/11/q5bS5n.jpg"></img>
        </div>
        <div className={cx("content")}>
            <div className={cx('thumb')}>
                <h1>Chào mừng tới Sendo Bán</h1>
                <h3>Gia nhập ngay cộng đồng người bán với hàng triệu khách hàng mỗi ngày.</h3>
                <img src="https://media3.scdn.vn/img4/2020/10_28/Ssbz4CgJ51WirAvbLBJs.png"/>
            </div>
            <div className={cx('containerForm')}>
                <div className={cx("action")}>
                    <span className={cx('log ','signin',showLog==false?'active':"")} onClick={()=>{setshowLog(false)}}>Đăng ký</span>
                    <span className={cx('log','login',showLog==true?'active':"")} onClick={()=>{setshowLog(true)}}>Đăng nhập </span>
                </div>
                {showLog==false?<SigninForm/>:<LoginForm/>}
                
            </div>
        </div>
        <div className={cx("footer")}>
            <div className={cx('left')}>
                <img src="https://media3.scdn.vn/img4/2020/04_23/ymBl1oAoEhjY1O6VGsLd.png"></img>
                <div className={cx('infor')}>
                    <p className={cx("title")}>Công ty Cổ phần Công nghệ Sen Đỏ</p>
                    <p className={cx("text")}>Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận,</p>
                    <p className={cx("text")}>KCX Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
                    <p className={cx("text")}>Số ĐKKD: 0312776486</p>
                </div>
            </div>
            <div className={cx('right')}>
                <a href="#"><img src="https://media3.scdn.vn/img4/2022/06_08/1lFg9Uwn2FBAsKeVCGVk.png"></img></a>
                <a href="#"><img src="https://media3.scdn.vn/img4/2022/06_08/gb4KWuzBjqG6edEmfnGF.png"></img></a>
                <a href="#"><img src="https://media3.scdn.vn/img4/2022/06_08/kun6HROKp7f12SCrCVEJ.png"></img></a>
            </div>
        </div>
    </div>
}

export default Log;