import classNames from "classnames/bind";
import styles from "../Header.module.scss"
import TippyHeadless from '@tippyjs/react/headless';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faCircleQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function ItemNav({title,icon,dropchildren,user}) {
    const [showTippy, setshowTippy] = useState(false);
    return ( 
        <TippyHeadless
            interactive={true}
            offset={[-115, 0]}
            delay={[100, 10]}
            placement="bottom"
            visible={showTippy}
            render={()=>
                <div className={cx('dropbox-contain')}>
                    {dropchildren.map((item,index)=><Link key={index} to={item.path}>{item.name}</Link>)}
                </div>
            }
        >
            <a className={cx("item-menu",showTippy==true?'active':"")} onClick={()=>{setshowTippy(!showTippy)}}>
                {icon}
                <span>{title}</span>
                {user?<></>:
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} rotation={showTippy==true?180:0}/>
                }
            </a>
        </TippyHeadless>
    );
}

export default ItemNav;