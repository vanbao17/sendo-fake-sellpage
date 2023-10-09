import classNames from "classnames/bind";
import styles from "./ListControls.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function ItemControl({datas,indexs}) {
    return <div className={cx("wrapperItem")}>
        <div className={cx('content-up')}>
            <div className={cx("title")}>
                <div className={cx('iconbox-'+indexs)}>
                    {datas.Icon}
                </div>
                <div className={cx("data")}>
                    <span>{datas.delayAppecpt.sum}</span>
                    <span>{datas.delayAppecpt.title}</span>
                </div>
            </div>
            <ul className={cx("listItem-data")}>
                {datas.delayAppecpt.data.map((item,index)=>{
                    return <li key={index}>
                        <div>
                            <FontAwesomeIcon className={cx("icon")} icon={faCircle}/>
                            <span>{item.count}</span>
                        </div>
                    <span>{item.title}</span>
                </li>
                })}
            </ul>
        </div>
        <div className={cx('content-down')}>
            <Link to={datas.path} >{datas.action}</Link>
        </div>
    </div>;
}

export default ItemControl;