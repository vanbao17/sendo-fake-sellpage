import classNames from "classnames/bind";
import styles from "./Log.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState,useRef,useEffect } from "react";
const cx = classNames.bind(styles)
function SigninForm() {
    const [phoneUser,setphoneUser] = useState('')
    const refPhoneNum = useRef()
    const [showPass,setshowPasss] = useState(false)
    useEffect(()=>{
        if(phoneUser.length>=1) 
            refPhoneNum.current.disabled=false
        else
            refPhoneNum.current.disabled=true
    })
    return <form action="POST" method="">
                <form method="POST"  className={cx("phoneUser")}>
                    <div className={cx("wrapp")}>
                        <label htmlFor="phonenum">Số điện thoại</label>
                        <input onChange={(e)=>{setphoneUser(e.target.value)}} type="text" id="phonenum" className={cx('phonenum')} name="phonenum" placeholder="Nhập SĐT gồm 10 chữ số"/>
                    </div>
                    <div className={cx("btnCode")}>
                        <button className={cx(phoneUser.length>=1?"btn":"hide")} ref={refPhoneNum} ><span>Gửi mã xác thực</span></button>
                    </div>
                </form>
                <div className={cx("codeAccept",'wrapp')}>
                    <label htmlFor="code">Mã xác thực</label>
                    <input type="text" id="code" className={cx('code')} name="code" placeholder="Gồm 6 chữ số từ SĐT đã đăng ký"/>
                </div>
                <div className={cx('passUser')}>
                    <label htmlFor="password">Mật khẩu</label>
                    <div className={cx("containerPass")}>
                    <input type={showPass===false?"password":"text"} id="password" name="password" className={cx("password")} placeholder="Tạo mật khẩu"/>
                        {
                            showPass==false?<div onClick={()=>{setshowPasss(true)}} className={cx('iconEye')} ><FontAwesomeIcon icon={faEye}/></div>
                            :<div onClick={()=>{setshowPasss(false)}} className={cx('iconEye')}><FontAwesomeIcon icon={faEyeSlash}/></div>
                        }
                    </div>
                </div>
                <div className={cx("rule")}>
                    <span>Bằng việc Đăng ký, bạn đã đồng ý với Sendo về <a href="#">Điều khoản dịch vụ</a> & <a href="#">Chính sách bán hàng</a>.</span>
                </div>
                <div className={cx('btnlogin')}>
                    <button>
                        <span>Đăng ký</span>
                    </button>
                </div>
                <div className={cx("other")}>
                    <div className={cx("containerOr")}>
                        <span>Hoặc</span>
                    </div>
                    <div className={cx("btnUseAccOther")}>
                        <button>
                            <img src="https://media3.scdn.vn/img4/2020/10_07/TSN86pxkwQj8Wm8e2guz.png"></img>
                            <span>Đăng ký bằng tài khoản mua hàng</span>
                        </button>
                    </div>
                </div>
                <span className={cx('btnTo','btnToLogin')}>Bạn đã có tài khoản ? <a href="#">Đăng nhập ngay </a></span>
            </form> ;
}

export default SigninForm;