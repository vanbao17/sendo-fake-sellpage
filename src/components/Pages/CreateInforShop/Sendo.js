import classNames from 'classnames/bind';
import styles from './CreateInforShop.module.scss';
import InputForm from '../../layout/components/InputForm/InputForm';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../store/Context';
const cx = classNames.bind(styles);

function Sendo({onSendData, idshop, type}) {
  const [inputdata, setinputdata] = useState('');
  const [dataSendo, setdataSendo] = useState({
    type: 'shopSendo',
    idshop: idshop,
    name: null,
    email: null,
    cccd: null,
    taxcode: null,
  });
  useEffect(() => {
    onSendData(dataSendo);
  }, [dataSendo]);
  useEffect(() => {
    if (idshop !== undefined) {
      setdataSendo({...dataSendo, idshop: idshop});
    }
  }, [idshop]);
  return (
    <div>
      <form method="" action="" className={cx('inforShop')}>
        <InputForm
          name={'nameShop'}
          onCallback={(data) => {
            setdataSendo({
              ...dataSendo,
              name: data,
            });
          }}
          text="Tên Shop"
          placeholder={'Gồm chữ cái A-Z, chữ số 0-9, không gồm ký tự đặc biệt'}
        />
        <InputForm
          name={'urlShop'}
          classname={'noneAction'}
          text="Đường dẫn (URL) của Shop trên trang sendo.vn"
          placeholder={'Gồm chữ cái A-Z, chữ số 0-9, không gồm ký tự đặc biệt'}
          value={'undefined/shop/' + inputdata}
        />
        <InputForm
          name={'emailShop'}
          onCallback={(data) => {
            setdataSendo({
              ...dataSendo,
              email: data,
            });
          }}
          text="Email"
          placeholder={'Dùng để nhận thông tin từ Sendo'}
        />
      </form>
      <div className={cx('titlePage')}>Nhập thông tin kinh doanh</div>
      <div className={cx('descPage')}>
        Vui lòng cung cấp thông tin đầy đủ và chính xác để xác minh Shop hợp lệ.
      </div>
      <form method="" action="" className={cx('inforSeller')}>
        <InputForm
          name={'cmndSeller'}
          text="Số CMND/CCCD"
          onCallback={(data) => {
            setdataSendo({
              ...dataSendo,
              cccd: data,
            });
          }}
          placeholder={'Nhập số CMND/CCCD của chủ Shop'}
        />
        <InputForm
          name={'codeSeller'}
          text="Mã số thuế"
          onCallback={(data) => {
            setdataSendo({
              ...dataSendo,
              taxcode: data,
            });
          }}
          placeholder={'Nhập Mã số thuế Cá nhân/Doanh nghiệp'}
        />
      </form>
    </div>
  );
}

export default Sendo;
