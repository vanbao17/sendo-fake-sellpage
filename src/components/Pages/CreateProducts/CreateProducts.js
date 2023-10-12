import classNames from 'classnames/bind';
import styles from './CreateProducts.module.scss';
import {InforIcon, LetterIcon} from '../../Icons';
import BasicInfor from './BasicInfor/BasicInfor';
import SEOInfor from './SEOInfor/SEOInfor';
const cx = classNames.bind(styles);
function CreateProducts() {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('url')}>Sản phẩm / Đăng sản phẩm</span>
      <div className={cx('titlePage')}>
        <div className={cx('text')}>Đăng sản phẩm</div>
        <a className={cx('Feedback')}>
          <LetterIcon />
          Gửi góp ý
        </a>
      </div>
      <div className={cx('content')}>
        <div className={cx('left')}>
          <BasicInfor />
          <div className={cx('ship')}>
            <div className={cx('title')}>Vận chuyển</div>
            <form className={cx('choose')}>
              <input className={cx('checkbox')} type="checkbox"></input>
              <span>Chuyển phát tiêu chuẩn</span>
            </form>
          </div>
          <SEOInfor />
        </div>
        <div className={cx('right')}>
          <div className={cx('guide')}>
            <div className={cx('container')}>
              <span>Nhập tên sản phẩm và chọn Ngành hàng</span>
              <InforIcon className={cx('icon')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProducts;
