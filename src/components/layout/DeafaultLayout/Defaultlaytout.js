import classNames from "classnames/bind";
import styles from "./Defaultlaytout.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
const cx = classNames.bind(styles)
function Defaultlaytout({children}) {
    return <div className={cx("wrapper")}>
            <Header/>
            <div className={cx("container")}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                    <Footer />
                </div>
            </div>
        </div>

}

export default Defaultlaytout;