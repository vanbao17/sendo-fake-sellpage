import classNames from "classnames/bind";
import styles from "./InputForm.module.scss"
import TippyHeadless from '@tippyjs/react/headless';
import { useState } from "react";
import 'tippy.js/dist/tippy.css'; // Import CSS của Tippy
import 'tippy.js/animations/scale.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function InputForm({text,name,type,placeholder,classname,value,onCallback,tippyData}) {
    const classes = cx(classname??"",'input')
    const [showTippy,setshowTippy]=useState(false)
    const [valueDropbox,setvalueDropbox]=useState('')
    const handelCallback = (e) => {
        onCallback(e.target.value)
    }
    return <div className={cx("wrapper")}>
        <label htmlFor={name}>{text}</label>
        {tippyData?<TippyHeadless
            interactive={true}
            offset={[0, 5]}
            delay={[100, 10]}
            placement="bottom"
            visible={showTippy}
            render={()=>
                <div className={cx("containerTippy")}>
                    <ul>
                        {tippyData.map((item,index)=>{
                            return <li key={index} onClick={()=>{
                                setvalueDropbox(item)
                                setshowTippy(!showTippy)
                            }}>
                                <span >{item}</span>
                            </li>
                        })}
                    </ul>
                </div>
            }
        >
            <div className={cx("inputTippy")} onClick={()=>{setshowTippy(!showTippy)}}>
                <input onChange={handelCallback} id={name} name={name} type={type??'text'} placeholder={placeholder} className={classes} value={valueDropbox.length>0?valueDropbox:value}/> 
                <FontAwesomeIcon className={cx("icon")} icon={showTippy?faChevronUp:faChevronDown} />
            </div>
        </TippyHeadless>:<input onChange={handelCallback} id={name} name={name} type={type??'text'} placeholder={placeholder} className={classes} value={value}/> }
        
    </div>;
}

export default InputForm;