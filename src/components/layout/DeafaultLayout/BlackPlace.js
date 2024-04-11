import classNames from 'classnames/bind';
import styles from './Defaultlaytout.module.scss';
const cx = classNames.bind(styles);
function BlackPlace() {
  return <div className={cx('wrapper_BlackPlace')}></div>;
}

export default BlackPlace;
