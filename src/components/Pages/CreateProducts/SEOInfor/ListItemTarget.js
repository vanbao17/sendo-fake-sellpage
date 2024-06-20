import classNames from 'classnames/bind';
import styles from './SEOInfor.module.scss';
import ItemTarget from './ItemTarget';
const cx = classNames.bind(styles);
function ListItemTarget({data}) {
  return (
    <ul className={cx('listItem')}>
      {data.map((item, index) => {
        return (
          <ItemTarget
            key={index}
            text={item.title}
            target={item.target !== null ? item.target : null}
            quanlity={item.quanlity}
          />
        );
      })}
    </ul>
  );
}

export default ListItemTarget;
