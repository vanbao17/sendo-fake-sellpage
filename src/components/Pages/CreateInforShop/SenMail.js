import classNames from 'classnames/bind';
import styles from './CreateInforShop.module.scss';
import {useContext, useEffect, useState} from 'react';
import InputForm from '../../layout/components/InputForm/InputForm';
import {Context} from '../../../store/Context';
const cx = classNames.bind(styles);
function SenMail({onSendData, idshop, type}) {
  const [inputdata, setinputdata] = useState('');
  const [dataSenmail, setdataSenmail] = useState({
    type: 'shopSendmail',
    idshop: idshop,
    name: null,
    email: null,
    nameshopowner: null,
    namecompany: null,
    businesstype: null,
    brandtype: null,
    codebusiness: null,
    cccd: null,
    taxcode: null,
  });
  useEffect(() => {
    onSendData(dataSenmail);
  }, [dataSenmail]);
  return (
    <div>
      <form method="" action="" className={cx('inforShop')}>
        <InputForm
          name={'nameShop'}
          onCallback={(data) => {
            setinputdata(data);
            setdataSenmail({
              ...dataSenmail,
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
            setdataSenmail({
              ...dataSenmail,
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
          name={'namecmndSeller'}
          text="Họ và tên chủ Shop"
          onCallback={(data) => {
            setdataSenmail({
              ...dataSenmail,
              nameshopowner: data,
            });
          }}
          placeholder={'Nhập họ và tên trên CMND/CCCD'}
        />
        <InputForm
          name={'cmndSeller'}
          text="Số CMND/CCCD"
          onCallback={(data) => {
            setdataSenmail({
              ...dataSenmail,
              cccd: data,
            });
          }}
          placeholder={'Nhập số CMND/CCCD của chủ Shop'}
        />
        <InputForm
          name={'codeSeller'}
          text="Mã số thuế"
          onCallback={(data) => {
            setdataSenmail({
              ...dataSenmail,
              taxcode: data,
            });
          }}
          placeholder={'Nhập Mã số thuế Cá nhân/Doanh nghiệp'}
        />
        <InputForm
          name={'nameCompany'}
          text="Tên công ty"
          onCallback={(data) => {
            setdataSenmail({
              ...dataSenmail,
              namecompany: data,
            });
          }}
          placeholder={'Nhập tên công ty trên giấy phép kinh doanh'}
        />
        <InputForm
          name={'businesSlicenseCode'}
          text="Mã số giấy phép kinh doanh"
          onCallback={(data) => {
            setdataSenmail({
              ...dataSenmail,
              codebusiness: data,
            });
          }}
          placeholder={'Nhập chính xác mã số giấy phép kinh doanh'}
        />
        <InputForm
          tippyData={['Hộ kinh doanh cá thể', 'Doanh nghiệp']}
          name={'businesSlicenseCode'}
          text="Loại hình kinh doanh"
          onSelectDropBox={(data) => {
            setdataSenmail({
              ...dataSenmail,
              businesstype: data,
            });
          }}
          placeholder={'Hộ kinh doanh cá thể'}
        />
        <InputForm
          tippyData={['Thương hiệu quốc tế', 'Thương hiệu Việt Nam']}
          name={'businesSlicenseCode'}
          text="Loại thương hiệu"
          onSelectDropBox={(data) => {
            setdataSenmail({
              ...dataSenmail,
              brandtype: data,
            });
          }}
          placeholder={'Thương hiệu quốc tế'}
        />
      </form>
    </div>
  );
}

export default SenMail;
