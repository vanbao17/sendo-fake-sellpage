import classNames from "classnames/bind";
import styles from "./Tasks.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTrophy } from "@fortawesome/free-solid-svg-icons";
import ItemTask from "./ItemTask";
import { useState } from "react";
const cx=classNames.bind(styles)


function Tasks() {
    const [showList,setshowList] = useState(true)
    return <div className={cx("wrapper")}>
        <div className={cx('title')}>
            <div className={cx("left")}>
                <FontAwesomeIcon className={cx("icon")} icon={faTrophy}/>
                <span>Làm giàu không khó, có bí kíp Sendo</span>
            </div>
            <div className={cx("right")}>
                <span>Hoàn thành <strong>0/5</strong></span>
                <div className={cx("progress")}>
                    <div className={cx("up")}></div>
                    <div className={cx("down")}></div>
                </div>
                <div className={cx("icon-chervonup")}>
                    <FontAwesomeIcon onClick={()=>{setshowList(!showList)}} className={cx("icon")} icon={showList==true?faChevronDown:faChevronUp} />
                </div>
            </div>
        </div>
        {showList==true?<div className={cx('list-itemTask')}>
            <ItemTask />
            <ItemTask />
            <ItemTask />
            <ItemTask />
            <ItemTask />
        </div>:<></>}
    </div>;
}

export default Tasks;