import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBook, faCircle, faCircleQuestion, faCircleUser, faEnvelope, faNewspaper, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
import 'tippy.js/dist/tippy.css';
import ItemNav from "./ItemNav/ItemNav";
import { useContext } from "react";
import { Context } from "../../../store/Context";
const cx = classNames.bind(styles)

function HeaderNoneCate() {
    const {menufix,setmenufix} = useContext(Context)
    return <div>
        <div className={cx("nav-container-image")}>
            <a href="#" className={cx("image-nav")}>
                <img src="https://media3.scdn.vn/img4/2023/06_01/Tp3VMA83im2Jp6pVF6Wi.jpg"></img>
            </a>
        </div>
        <nav className={cx(menufix==true?"fixed":"")}>
            <div className={cx("logo")}>
                <img src="https://accgroup.vn/wp-content/uploads/2022/11/q5bS5n.jpg"></img>
            </div>
            <div className={cx("toLoginPage")}>
                <Link to="/login">
                    <FontAwesomeIcon className={cx("icon")} icon={faCircleUser}/>
                    <span>Bạn đã có tài khoản? Đăng nhập ngay</span>
                </Link>
            </div>
        </nav>
    </div>;
}

export default HeaderNoneCate;