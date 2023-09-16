import classNames from "classnames/bind";
import styles from "./TypeShop.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function ItemTick({type}) {
    return (
        <div className={cx("wrapper")}>
            {type==true?<div className={cx("tick",'icon')}><FontAwesomeIcon icon={faCheck} /></div>
            :<div className={cx("close","icon")}><FontAwesomeIcon icon={faXmark} /></div>}
        </div>
    );
}

export default ItemTick;