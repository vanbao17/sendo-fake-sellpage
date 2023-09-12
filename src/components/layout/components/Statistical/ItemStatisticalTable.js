import classNames from "classnames/bind";
import styles from "./Statistical.module.scss"
const cx=  classNames.bind(styles)
function ItemStatisticalTable({title,data,yourShop,unit,type}) {
    return <tr className={cx("row")}>
            <td>{title}</td>
            <td>{yourShop==null?"Chưa có dữ liệu":yourShop+unit}</td>
            <td className={cx(eval(data.normalShop+type +yourShop)?"red":data.normalShop!=null?"green":"")}>{data.normalShop==null?"Không bắt buộc":type+data.normalShop+unit}</td>
            <td className={cx(eval(data.uytin1+type +yourShop)&&yourShop!=null?"red":yourShop==null?"otherColor":"green")}>{type+data.uytin1+unit}</td>
            <td className={cx(eval(data.uytin2+type +yourShop)&&yourShop!=null?"red":yourShop==null?"otherColor":"green")}>{type+data.uytin2+unit}</td>
            <td className={cx(eval(data.uytin3+type +yourShop)&&yourShop!=null?"red":yourShop==null?"otherColor":"green")}>{type+data.uytin3+unit}</td>
        </tr>;
}

export default ItemStatisticalTable;