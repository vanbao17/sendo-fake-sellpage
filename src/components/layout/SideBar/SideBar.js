import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faCircleQuestion,
  faClipboard,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import DropBox from './DropBox';
import {useState, useContext} from 'react';
import {Context} from '../../../store/Context';
import {NewsIcon, OderIcon} from '../../Icons';
const cx = classNames.bind(styles);
function SideBar() {
  const {hidemenu, sethidemenu} = useContext(Context);
  const {icon, seticon} = useContext(Context);
  console.log(icon, hidemenu);
  return (
    <div
      className={cx('wrapper', hidemenu == true ? 'minimenu' : 'normal')}
      onMouseMove={() => {
        seticon(icon);
      }}
      onMouseLeave={() => {
        seticon(!icon);
      }}
    >
      <div className={cx('container')}>
        <div className={cx('infor')}>
          <img src="https://media3.scdn.vn/img4/2020/10_21/MjjPQD0ovblQdwDzS6t0.png"></img>
          <div className={cx('nameShop')}>
            <span>Thích thì chiều</span>
            <span></span>
          </div>
        </div>
        <ul className={cx('raito')}>
          <li>
            <span>
              Tỉ lệ hoàn tất <strong className={cx('red')}>0%</strong>
            </span>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </li>
          <li>
            <span>
              Tỉ lệ khiếu nại <strong className={cx('green')}>0%</strong>
            </span>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </li>
          <li>
            <span>
              Tỉ lệ hủy <strong className={cx('green')}>0%</strong>
            </span>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </li>
        </ul>
        <div className={cx('wranning')}>Bạn chưa liên kết Ví SenPay</div>
        <div className={cx('shop')}>
          <h3>GIAN HÀNG</h3>
          <DropBox dropData={['Danh sách đơn hàng']}>
            <span>
              <OderIcon className={cx('icon')} />
              Đơn hàng
            </span>
          </DropBox>
        </div>
        <div className={cx('helpsell')}>
          <h3>HỖ TRỢ BÁN HÀNG</h3>
          <DropBox dropData={['Danh sách shop', 'Ví người bán']}>
            <span>
              <NewsIcon className={cx('icon')} />
              Hỗ trợ bán hàng
            </span>
          </DropBox>
        </div>
        <div className={cx('extenionsSendo')}>
          <h3>TIỆN ÍCH SENDO</h3>
          <div className={cx('listExten')}>
            <a href="#">
              <img src="https://media3.scdn.vn/img4/2023/06_21/rfimEQ1wsPkvKPfRC1Za.jpg"></img>
            </a>
            <a href="#">
              <img src="https://media3.scdn.vn/img4/2020/08_18/1mc8QiAciXybuyzJOmHQ.jpg"></img>
            </a>
          </div>
        </div>
      </div>
      <div
        className={cx(hidemenu == true ? 'iconminimenu' : 'icon-hide')}
        onClick={() => {
          sethidemenu(!hidemenu);
          seticon(!icon);
        }}
      >
        :
        {hidemenu == false ? ( //nếu hidêmnu đang tắt thì nó hiện iconleft ngược lại thì right
          <FontAwesomeIcon
            className={cx('iconHideSide', 'iconHide')}
            icon={faArrowLeft}
          />
        ) : (
          <FontAwesomeIcon
            className={cx('iconShowSide', 'iconHide')}
            icon={faArrowRight}
          />
        )}
      </div>
    </div>
  );
}

export default SideBar;
