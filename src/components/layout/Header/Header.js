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

function Header({notNav}) {
    const {menufix,setmenufix} = useContext(Context)
    return <div className={cx('wrapper')}>
        <div className={cx("nav-container-image")}>
            <a href="#" className={cx("image-nav")}>
                <img src="https://media3.scdn.vn/img4/2023/06_01/Tp3VMA83im2Jp6pVF6Wi.jpg"></img>
            </a>
        </div>
        <nav className={cx(menufix==true?"fixed":"")}>
            <div className={cx("logo")}>
                <img src="https://accgroup.vn/wp-content/uploads/2022/11/q5bS5n.jpg"></img>
            </div>
            <ul>
                <li className={cx("dropbox")}>
                    <div className={cx('menu-item')}>
                        <ItemNav 
                            dropchildren={[{path:"/chinh-sach-nguoi-ban",name:"Liên hệ nhà vận chuyển"},{path:"/hc/vi/requests/new?sr=seller&page=form",name:"Liên hệ với sendo"},]}
                            icon={<FontAwesomeIcon className={cx('icon')} icon={faEnvelope}/>}
                            title="Liên hệ"
                        >
                        </ItemNav>
                    </div>
                </li>
                <li>
                    <div className={cx('menu-item')}>
                        <Link  to="/shop-uy-tin" className={cx("item-menu")}>
                            <FontAwesomeIcon className={cx('icon')} icon={faShop}/>
                            <span>Shop uy tín</span>
                        </Link>
                    </div>
                </li>
                <li className={cx("dropbox")}>
                    <div className={cx('menu-item')}>
                        <ItemNav 
                            dropchildren={[{path:"/shop#Event/Help_Feature",name:"Tính năng"},{path:"/shop#Event/Help",name:"Chia sẽ kinh nghiệm"},]}
                            icon={<FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion}/>}
                            title="Hướng dẫn"
                        >
                        </ItemNav>
                    </div>
                </li>
                <li className={cx("dropbox")}>
                    <div className={cx('menu-item')}>
                        <ItemNav 
                            dropchildren={[
                                {path:"/shop#Event/News_Notify",name:"Xu hướng"},
                                {path:"/shop#Event/News_Event",name:"Sự kiện"},
                                {path:"/shop#Event/News_Notify",name:"Thông báo"},
                            ]}
                            icon={<FontAwesomeIcon className={cx('icon')} icon={faNewspaper}/>}
                            title="Tin tức"
                        >
                        </ItemNav>
                    </div>
                </li>
                <li>
                    <div className={cx('menu-item')}>
                        <Link to="/chinh-sach-nguoi-ban" className={cx("item-menu")}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBook}/>
                            <span>Chính sách</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={cx('menu-item')}>
                        <Link to="/" className={cx("item-menu")}><FontAwesomeIcon className={cx('icon')} icon={faBell}/></Link>
                    </div>
                </li>
                <li className={cx("dropbox")}>
                    <div className={cx('menu-item')}>
                        <ItemNav user dropchildren={
                            [
                                {path:"/shop#Event/News_Notify",name:"Tài khoản"},
                                {path:"/shop#Event/News_Notify",name:"Thông tin tài khoản"},
                                {path:"/shop#Event/News_Event",name:"Đổi mật khẩu"},
                                {path:"/shop#Event/News_Notify",name:"Thoát"},]
                        } to="/" icon={ <FontAwesomeIcon className={cx('icon')} icon={faUser}/>} className={cx("item-menu")}></ItemNav>
                    </div>
                </li>
            </ul>
        </nav>
    </div>;
}

export default Header;