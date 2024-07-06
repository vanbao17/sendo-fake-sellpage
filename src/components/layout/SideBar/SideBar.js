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
import {useState, useContext, useEffect} from 'react';
import {Context} from '../../../store/Context';
import {NewsIcon, OderIcon} from '../../Icons';
const cx = classNames.bind(styles);
function SideBar() {
  const {hidemenu, sethidemenu} = useContext(Context);
  const {icon, seticon} = useContext(Context);
  const [shop, setshop] = useState(null);
  const phone = sessionStorage.getItem('phone');
  useEffect(() => {
    fetch('https://sdvanbao17.id.vn/api/v1/get-shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: phone}),
    })
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          setshop(dt[0]);
          sessionStorage.setItem('shop', JSON.stringify(dt[0]));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        className={cx('wrapper', hidemenu == true ? 'minimenu' : 'normal')}
        onMouseEnter={() => {
          seticon(!icon);
        }}
      >
        <div className={cx('container')}>
          <div className={cx('infor')}>
            {shop !== null && shop.imageShop != null ? (
              <img src={shop.imageShop}></img>
            ) : (
              <img src="https://media3.scdn.vn/img4/2020/10_21/MjjPQD0ovblQdwDzS6t0.png"></img>
            )}

            <div className={cx('nameShop')}>
              <span>{shop !== null ? shop.tenshop : 'Chưa có tên'}</span>
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
            <DropBox
              dropData={[
                {name: 'Danh sách đơn hàng', path: '/don-hang'},
                {name: 'Danh sách sản phẩm', path: '/san-pham'},
              ]}
            >
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
          }}
        >
          :
          <FontAwesomeIcon
            className={cx(
              hidemenu == false ? 'iconHideSide' : 'iconShowSide',
              'iconHide',
            )}
            icon={hidemenu == false ? faArrowLeft : faArrowRight}
          />
        </div>
      </div>
    </>
  );
}

export default SideBar;
