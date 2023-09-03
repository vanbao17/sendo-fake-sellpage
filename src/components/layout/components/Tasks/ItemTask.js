import classNames from "classnames/bind";
import styles from "./Tasks.module.scss"
const cx = classNames.bind(styles)
function ItemTask() {
    return <div className={cx('wrapperItem')}>
        <div className={cx("up")}>
            <img src="https://media3.scdn.vn/img4/2020/12_04/RVLpjUBpIYBKxoL5tN5h.png"/>
            <span className={cx("title")}>Nhập hội Shop+</span>
            <span className={cx("description")}>Siêu ưu đãi với 8 đặc quyền, ra đơn nhanh chóng.</span>
        </div>
        <div className={cx('action')}>
            <a href="#"><span>Tìm hiểu Ship+</span></a>
        </div>
    </div>;
}

export default ItemTask;