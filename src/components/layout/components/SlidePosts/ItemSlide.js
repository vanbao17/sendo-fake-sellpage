import classNames from "classnames/bind";
import styles from "./SlidePosts.module.scss"
const cx = classNames.bind(styles)
function ItemSlide({data,classnames}) {
    const classNames = cx(classnames,'wrapperItem')
    return ( <div className={classNames}>
        <a href="#">
            <div className={cx("image")}>
                <img src="https://media3.scdn.vn/img4/2023/07_31/g7kZDtu3ijwlDX1YhvWO.jpg"></img>
            </div>
            <div className={cx("content")}>
                <div className={cx("title")}>[HOT] 8.8 “HÀNG HIỆU NỬA GIÁ” - SHOP ẴM TRIỆU ĐƠN</div>
                <div className={cx("time-public")}>14:01 - 31/07/2023</div>
            </div>
        </a>
        <a href="#">
            <div className={cx("image")}>
                <img src="https://media3.scdn.vn/img4/2023/07_31/g7kZDtu3ijwlDX1YhvWO.jpg"></img>
            </div>
            <div className={cx("content")}>
                <div className={cx("title")}>[HOT] 8.8 “HÀNG HIỆU NỬA GIÁ” - SHOP ẴM TRIỆU ĐƠN</div>
                <div className={cx("time-public")}>14:01 - 31/07/2023</div>
            </div>
        </a>
    </div>);
}

export default ItemSlide;