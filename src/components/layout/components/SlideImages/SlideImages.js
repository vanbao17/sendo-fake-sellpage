import classNames from "classnames/bind";
import styles from "./SlideImages.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
const cx = classNames.bind(styles)
const data = [
    {
        image:'https://media3.scdn.vn/img4/2023/09_11/HSnd8xVderQQV3KwXCnL.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/09_11/HSnd8xVderQQV3KwXCnL.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/08_28/CSZsxwBvst2rzbSchlTq.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/09_06/FjBb6ZkDC7JEhXsCpUc9.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/09_05/XtYIvqUsXSjoCJ6l7fZI.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/09_11/kxrZs6F6XlZZnT8bkzFC.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/02_01/yaA29x1S24piZLBjylyO.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/09_11/HSnd8xVderQQV3KwXCnL.jpg',
        path:"sendo.vn"
    },
    {
        image:'https://media3.scdn.vn/img4/2023/07_24/PxOIWvPit3m4Ejx8FowA.jpg',
        path:"sendo.vn"
    },
]
const paginationLenght = [0,1,2,3,4,5,6]
const classes = ["dupdupduplicateprev",  "dupduplicateprev","duplicateprev","prev", "active", "next","duplicatenext","dupduplicatenext","dupdupduplicatenext"];
function SlideImages() {
    var [index,setindex] = useState(0)
    var [pagination,setpagination] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            if(index<=9&&index>=0) {
                setindex(index+1)
            }
            else {
                setindex(1)
            }
            pagination<=7&&pagination>=1?setpagination(pagination+1):setpagination(1)
        },5000)
    },[index])
    return <div className={cx("wrapper")}>
        <div className={cx("title")}>
            <FontAwesomeIcon className={cx("icon")} icon={faPercent} />
            <span>Sự kiện khuyến mãi</span>
        </div>
        <div className={cx("containerSlide")}>
                {data.map((item,index1)=> {
                    return <div key={index1} className={cx("ItemSlide",classes[(index + index1) % classes.length])} ><a><img src={item.image}></img></a></div>
                })}
        </div>
        <div className={cx("pagination")}>
            {paginationLenght.map((item,index)=>{
                return <span key={index} className={cx("item-pagination",pagination==index?"active":"")}></span>
            })}
        </div>
    </div>;
}

export default SlideImages;