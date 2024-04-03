import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
const cx = classNames.bind(styles);

function Popup({children}) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Popup;
