import classNames from "classnames/bind";
import styles from "./Newfeeds.module.scss"
import Tasks from "../../layout/components/Tasks/Tasks";
import ListControls from "../../layout/components/ListControls/ListControls";
import Overview from "../../layout/components/Overview/Overview";
const cx=classNames.bind(styles)

function Newfeeds() {
    return <div className={cx('wrapper')}>
        <Tasks />
        <ListControls />
        <Overview />
    </div>;
}

export default Newfeeds;