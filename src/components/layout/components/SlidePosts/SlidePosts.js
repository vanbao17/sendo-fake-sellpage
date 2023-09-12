import classNames from "classnames/bind";
import styles from "./SlidePosts.module.scss"
import ItemSlide from "./ItemSlide";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles)

function SlidePosts() {
    var [index,setindex] = useState(1)
    var [pagination,setpagination] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            if(index<5&&index>=1) {
                setindex(index+1)
            }
            else {
                setindex(1)
            }
            pagination<3&&pagination>=1?setpagination(pagination+1):setpagination(1)
        },5000)
    },[index])
    const dt = [1,2,3]
    const classes = ["duplicatenext","next","active","prev","duplicateprev"]
    return <div className={cx("wrapper")}>
        <div className={cx("slide-container")}>
            <div className={cx("slide-pagination")}>
                {dt.map((item,index)=>{
                    return <span key={index} className={cx("item-pagination",item==pagination?"active":"")}></span>
                })}
            </div>
            <div className={cx("slide-wrapper")}>
                <ItemSlide data={1} classnames={(5-index)<0?classes[-(5-index)]:classes[(5-index)]}/>
                <ItemSlide data={2} classnames={(4-index)<0?classes[5+(4-index)]:classes[(4-index)]}/>
                <ItemSlide data={3} classnames={(3-index)<0?classes[5+(3-index)]:classes[(3-index)]}/>
                <ItemSlide data={4} classnames={(2-index)<0?classes[5+(2-index)]:classes[(2-index)]}/>
                <ItemSlide data={5} classnames={(1-index)<0?classes[5+(1-index)]:classes[(1-index)]}/>
            </div>
        </div>
    </div> ;
}

export default SlidePosts;