import classNames from "classnames/bind";
import styles from "./Overview.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleQuestion, faMinus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function ItemOverview({title,data,status}) {
    return <div className={cx('wrapperItem')}>
        <div className={cx("title")}>
            <span>{title}</span>
            <FontAwesomeIcon icon={faCircleQuestion}/>
        </div>
        <div className={cx('content')}>
            <div className={cx("current")}>
                <span>{data}</span>
            </div>
            <div className={cx("result")}>
                <FontAwesomeIcon icon={faMinus}/>
                <span>{status}</span>
            </div>
        </div>
    </div>;
}

export default ItemOverview;