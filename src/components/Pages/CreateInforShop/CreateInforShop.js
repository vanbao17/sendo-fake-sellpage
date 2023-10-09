import classNames from 'classnames/bind';
import styles from './CreateInforShop.module.scss';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import {useState} from 'react';
import InputForm from '../../layout/components/InputForm/InputForm';
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import HeaderNoneCate from '../../layout/Header/HeaderNoneCate';
const cx = classNames.bind(styles);
function CreateInforShop() {
  const [inputdata, setinputdata] = useState('');
  const handleChangeInput = (data) => {
    setinputdata(data);
  };
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  return (
    <div className={cx('wrapper')}>
      <HeaderNoneCate />
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('titlePage')}>Nhập thông tin shop Sendo</div>
          <div className={cx('descPage')}>
            Chỉ còn vài bước đơn giản để bạn bắt đầu bán hàng trên Sendo.
          </div>
          <form method="POST" action="" className={cx('inforShop')}>
            <InputForm
              name={'nameShop'}
              onCallback={handleChangeInput}
              text="Tên Shop"
              placeholder={
                'Gồm chữ cái A-Z, chữ số 0-9, không gồm ký tự đặc biệt'
              }
            />
            <InputForm
              name={'urlShop'}
              classname={'noneAction'}
              text="Đường dẫn (URL) của Shop trên trang sendo.vn"
              placeholder={
                'Gồm chữ cái A-Z, chữ số 0-9, không gồm ký tự đặc biệt'
              }
              value={'undefined/shop/' + inputdata}
            />
            <InputForm
              name={'emailShop'}
              text="Email"
              placeholder={'Dùng để nhận thông tin từ Sendo'}
            />
          </form>
          <div className={cx('lineSpace')}>
            <hr></hr>
          </div>
          <div className={cx('titlePage')}>Nhập thông tin kinh doanh</div>
          <div className={cx('descPage')}>
            Vui lòng cung cấp thông tin đầy đủ và chính xác để xác minh Shop hợp
            lệ.
          </div>
          <form method="POST" action="" className={cx('inforSeller')}>
            {data == 'senmail' ? (
              <InputForm
                name={'namecmndSeller'}
                text="Họ và tên chủ Shop"
                placeholder={'Nhập họ và tên trên CMND/CCCD'}
              />
            ) : (
              <></>
            )}
            <InputForm
              name={'cmndSeller'}
              text="Số CMND/CCCD"
              placeholder={'Nhập số CMND/CCCD của chủ Shop'}
            />
            <InputForm
              name={'codeSeller'}
              text="Mã số thuế"
              placeholder={'Nhập Mã số thuế Cá nhân/Doanh nghiệp'}
            />
            {data == 'senmail' ? (
              <InputForm
                name={'nameCompany'}
                text="Tên công ty"
                placeholder={'Nhập tên công ty trên giấy phép kinh doanh'}
              />
            ) : (
              <></>
            )}
            {data == 'senmail' ? (
              <InputForm
                name={'businesSlicenseCode'}
                text="Mã số giấy phép kinh doanh"
                placeholder={'Nhập chính xác mã số giấy phép kinh doanh'}
              />
            ) : (
              <></>
            )}
            {data == 'senmail' ? (
              <InputForm
                tippyData={['Hộ kinh doanh cá thể', 'Doanh nghiệp']}
                name={'businesSlicenseCode'}
                text="Loại hình kinh doanh"
                placeholder={'Hộ kinh doanh cá thể'}
              />
            ) : (
              <></>
            )}
            {data == 'senmail' ? (
              <InputForm
                tippyData={['Thương hiệu quốc tế', 'Thương hiệu Việt Nam']}
                name={'businesSlicenseCode'}
                text="Loại thương hiệu"
                placeholder={'Thương hiệu quốc tế'}
              />
            ) : (
              <></>
            )}
          </form>
          <div className={cx('action')}>
            <span>
              Bạn đã có tài khoản? <Link to="/">Đăng nhập ngay</Link>
            </span>
            <div className={cx('btn-sendInfor')}>
              <button>
                <span
                  onClick={() => {
                    navigate('/bang-tin');
                  }}
                >
                  Tạo Shop
                </span>
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
