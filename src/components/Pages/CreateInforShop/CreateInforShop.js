import classNames from 'classnames/bind';
import styles from './CreateInforShop.module.scss';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import {useContext, useState, useRef, useEffect} from 'react';
import InputForm from '../../layout/components/InputForm/InputForm';
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import HeaderNoneCate from '../../layout/Header/HeaderNoneCate';
import {Context} from '../../../store/Context';
import Sendo from './Sendo';
import SenMail from './SenMail';
import Cookies from 'js-cookie';
const cx = classNames.bind(styles);
function CreateInforShop() {
  const [dataShop, setdataShop] = useState();
  const [filterShop, setfilterShop] = useState();
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const phone = sessionStorage.getItem('phone');
  const handleData = (data) => {
    setdataShop(data);
  };

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: phone, pass: null}),
    };
    fetch('http://localhost:3001/api/v1/get-shop', options)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          setfilterShop(data[0].idShop);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  const handleInsertData = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataShop),
    };
    fetch('http://localhost:3001/api/v1/create-type-shop', options)
      .then((response) => {
        if (response.status == 200) {
          navigate('/bang-tin');
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <div className={cx('wrapper')}>
      <HeaderNoneCate />
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('titlePage')}>Nhập thông tin shop Sendo</div>
          <div className={cx('descPage')}>
            Chỉ còn vài bước đơn giản để bạn bắt đầu bán hàng trên Sendo.
          </div>
          {data == 'shopSendo' && filterShop !== undefined ? (
            <Sendo
              onSendData={handleData}
              type={data}
              idshop={filterShop}
            ></Sendo>
          ) : (
            <></>
          )}
          {data == 'shopSendmail' && filterShop !== undefined ? (
            <SenMail onSendData={handleData} type={data} idshop={filterShop} />
          ) : (
            <></>
          )}

          <div className={cx('action')}>
            <span>
              Bạn đã có tài khoản? <Link to="/">Đăng nhập ngay</Link>
            </span>
            <div className={cx('btn-sendInfor')}>
              <button>
                <span onClick={handleInsertData}>Tạo Shop</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateInforShop;
