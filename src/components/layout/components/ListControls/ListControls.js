import classNames from "classnames/bind";
import styles from "./ListControls.module.scss"
import ItemControl from "./ItemControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faClipboard, faTicketSimple } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function ListControls() {
    const data = [
        {
            Icon:<FontAwesomeIcon icon={faClipboard}/>,
            delayAppecpt:{
                title:"Đơn hàng chờ xác nhận",
                sum:0,
                data:[
                    {title:"đơn hàng đang hoãn",count:0},
                    {title:"đơn hàng khiếu nại",count:0},
                ]
            },
            action:"Xem danh sách đơn hàng",
            path:""
        },
        {
            Icon:<FontAwesomeIcon icon={faBoxArchive}/>,
            delayAppecpt:{
                title:"Sản phẩm bị từ chối",
                sum:0,
                data:[
                    {title:"sản phẩm sắp hết tồn kho    ",count:0},
                    {title:"sản phẩm sắp hết khuyến mãi",count:0},
                ]
            },
            action:"Xem danh sách sản phẩm",
            path:""
        },
        {
            Icon:<FontAwesomeIcon icon={faTicketSimple}/>,
            delayAppecpt:{
                title:"Đơn hàng chờ xác nhận",
                sum:0,
                data:[
                    {title:"lượt sử dụng",count:0},
                    {title:"lượt chưa sử dụng",count:0},
                ]
            },
            action:"Xem danh sách mã giảm giá",
            path:""
        },
    ]
    return <div className={cx("wrapper")}>
        {data.map((item,index)=>{
            return <ItemControl key={index} indexs={index} datas={item}></ItemControl>
        })}
    </div>;
}

export default ListControls;