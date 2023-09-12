import classNames from "classnames/bind";
import styles from "./Overview.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChevronRight, faCircle, faCircleQuestion, faMinus, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import ItemOverview from "./ItemOverview";
import SlidePosts from "../SlidePosts/SlidePosts";
const cx = classNames.bind(styles)
function Overview() {
    return <div className={cx("wrapper")}>
        <div className={cx("container-left")}>
            <div className={cx("title")}>
                <div>
                    <FontAwesomeIcon className={cx("icon")} icon={faChartLine}/>
                    <div className={cx('name')}>
                        <p>Tổng quan bán hàng 7 ngày gần nhất</p>
                        <span>Cập nhật ngày 31/08/2023</span>
                    </div>
                </div>
                <a href="#"><span>Xem chi tiết <FontAwesomeIcon icon={faChevronRight}/> </span></a>
            </div>
            <div className={cx('content-left')}>
                <ItemOverview title="Doanh thu" data="0đ" status="Không đổi"/>
                <ItemOverview title="Số người mua" data="0" status="Không đổi"/>
                <ItemOverview title="Lượt truy cập" data="0" status="Không đổi"/>
                <ItemOverview title="Đơn hàng hoàn tất" data="0" status="Không đổi"/>
            </div>
        </div>
        <div className={cx("container-right")}>
            <div className={cx("title")}>
                <span><FontAwesomeIcon className={cx("icon")} icon={faNewspaper}/>Góc tin hỗ trợ</span>
                <a href="#"><span>Xem tất cả</span></a>
            </div>
            <SlidePosts />
        </div>
    </div>;
}

export default Overview;