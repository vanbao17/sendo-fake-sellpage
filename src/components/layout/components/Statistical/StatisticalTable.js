import classNames from "classnames/bind";
import styles from "./Statistical.module.scss"
import ItemStatisticalTable from "./ItemStatisticalTable";
const cx = classNames.bind(styles)
const datas = [
    {
        title:"Tỷ lệ đơn hàng hoàn tất",
        yourShop:0,
        data:{
            normalShop:50,
            uytin1:60,
            uytin2:70,
            uytin3:80,
        },
        unit:"%",
        type:">"
    },
    {
        title:"Số đơn hàng hoàn tất trong vòng 30 ngày",
        yourShop:0,
        data:{
            normalShop:null,
            uytin1:25,
            uytin2:50,
            uytin3:100,
        },
        unit:"",
        type:">"
    },
    {
        title:"Tỷ lệ đơn hàng được đánh giá",
        yourShop:0,
        data:{
            normalShop:null,
            uytin1:10,
            uytin2:15,
            uytin3:20,
        },
        unit:"%",
        type:">"
    },
    {
        title:"Điểm đánh giá shop",
        yourShop:0,
        data:{
            normalShop:null,
            uytin1:4,
            uytin2:4.25,
            uytin3:4.5,
        },
        unit:"",
        type:">"
    },
    {
        title:"Thời gian hoạt động",
        yourShop:37,
        data:{
            normalShop:null,
            uytin1:30,
            uytin2:90,
            uytin3:180,
        },
        unit:"Ngày",
        type:">"
    },
    {
        title:"Thời gian chuẩn bị hàng trung bình",
        yourShop:0,
        data:{
            normalShop:null,
            uytin1:24,
            uytin2:22,
            uytin3:20,
        },
        unit:"Giờ",
        type:"<"
    },
    {
        title:"Tỷ lệ phản hồi Chat trong 30 ngày",
        yourShop:null,
        data:{
            normalShop:null,
            uytin1:60,
            uytin2:70,
            uytin3:80,
        },
        unit:"%",
        type:"<"
    },
    {
        title:"Tỷ lệ đơn hàng khiếu nại",
        yourShop:0,
        data:{
            normalShop:1.5,
            uytin1:1,
            uytin2:0.5,
            uytin3:0.3,
        },
        unit:"%",
        type:"<"
    }
]
function StatisticalTable() {
    return (
        <div className={cx("wrapper")}>
            <table>
                <thead>
                    <tr>
                        <th>Nội dung thống kê</th>
                        <th>Shop của bạn</th>
                        <th>Shop thường</th>
                        <th>Uy tín cấp 1</th>
                        <th>Uy tín cấp 2</th>
                        <th>Uy tín cấp 3</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((item,index)=>{
                        return <ItemStatisticalTable key={index} type={item.type} title={item.title} data={item.data} yourShop={item.yourShop} unit={item.unit}/>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StatisticalTable;