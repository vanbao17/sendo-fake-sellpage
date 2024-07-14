import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
const cx = classNames.bind(styles);
function Popup({children, width = '', height = ''}) {
  return (
    <div className={cx('wrapper_popup')}>
      <div
        className={cx('container_popup')}
        style={{width: width, height: height}}
      >
        <div className={cx('form')}>{children}</div>
      </div>
      <div className={cx('black')}></div>
    </div>
  );
}

export default Popup;
