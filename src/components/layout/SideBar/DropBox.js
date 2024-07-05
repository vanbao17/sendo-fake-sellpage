import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DropBox({children, dropData}) {
  const [showDropbox, setshowDropbox] = useState(false);
  return (
    <div className={cx('wrapperDropbox')}>
      <div
        className={cx('title', showDropbox == true ? 'active' : '')}
        onClick={() => {
          setshowDropbox(!showDropbox);
        }}
      >
        {children}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {showDropbox ? (
        <ul className={cx('dropdown')}>
          {dropData.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DropBox;
