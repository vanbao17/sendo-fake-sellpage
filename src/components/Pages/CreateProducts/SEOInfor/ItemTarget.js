import classNames from 'classnames/bind';
import styles from './SEOInfor.module.scss';
const cx = classNames.bind(styles);

function ItemTarget({text, quanlity, target}) {
  return (
    <li className={cx('item')}>
      <span>{text}</span>
      <span>
        {quanlity}
        {target != null ? '/' + target : ''}
      </span>
    </li>
  );
}

export default ItemTarget;
