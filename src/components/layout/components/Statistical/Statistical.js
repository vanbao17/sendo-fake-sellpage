import classNames from "classnames/bind";
import styles from "./Statistical.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar, faCalendar, faChartSimple, faChevronDown, faChevronUp, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import StatisticalTable from "./StatisticalTable";
import Calendar from "react-calendar";
import TippyHeadless from '@tippyjs/react/headless';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import styled from 'styled-components';
const cx=  classNames.bind(styles)
function Statistical() {
    const [showTippy,setShowtippy] = useState(false)
    const [value, onChange] = useState(new Date());
    const [valueDate, setvalueDate] = useState("");
    const CalendarContainer = styled.div`
        /* ~~~ container styles ~~~ */
        .react-calendar {
            border:none;
            outline:none;
        }
        `;
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0, nên cộng thêm 1.
        const year = date.getFullYear().toString();
      
        return `${day}/${month}/${year}`;
      }
    return <div className={cx("wrapper")}>
        <div className={cx("title")}>
            <div className={cx("titleLeft")}>
                <FontAwesomeIcon className={cx("iconTitle")} icon={faChartSimple}/>
                <span>Thống kê của Shop từ ngày</span>
                <TippyHeadless
                    interactive={true}
                    visible={showTippy}
                    render={()=><div className={cx("containerCalendar")}>
                        <CalendarContainer><Calendar onChange={onChange} value={value} className={cx("calen")}/></CalendarContainer>
                        <div className={cx("btnCalendar")} >
                            <button className={cx("returnBtn")} onClick={()=>{
                                setShowtippy(!showTippy)
                                setvalueDate(formatDate(Date()))
                            }
                            }><FontAwesomeIcon icon={faRotateLeft} /></button>
                            <button className={cx("exitBtn")} onClick={()=>{
                                setShowtippy(!showTippy)
                            }
                            }>Thoát</button>
                            <button 
                                className={cx("apply")}
                                onClick={()=>{
                                    setvalueDate(formatDate(value))
                                    setShowtippy(!showTippy)
                                }
                            }>Áp dụng</button>
                        </div>
                    </div>}
                >
                    <div className={cx("inputDate")} onClick={()=>{setShowtippy(!showTippy)}}>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className={cx("valueDate")}>{valueDate.length>0?valueDate:formatDate(Date())}</span>
                        {showTippy==false?<FontAwesomeIcon icon={faChevronDown} />
                        :<FontAwesomeIcon icon={faChevronUp}/>}
                    </div>
                </TippyHeadless>
            </div>
            <div className={cx("titleRight")}>
                <div className={cx('note')}>
                    <span></span>
                    <div>
                        <span className={cx('colorNote','green')}></span>
                        <span>Chỉ số đã đạt</span>
                    </div>
                </div>
                <div className={cx('note')}>
                    <span></span>
                    <div>
                        <span className={cx('colorNote','red')}></span>
                        <span>Chỉ số chưa đạt</span>
                    </div>
                </div>
            </div>
        </div>
        <StatisticalTable />
    </div>;
}

export default Statistical;