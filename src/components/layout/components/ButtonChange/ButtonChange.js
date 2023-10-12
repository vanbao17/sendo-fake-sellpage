import classNames from 'classnames/bind';
import styles from './ButtonChange.module.scss';
import {useState} from 'react';
const cx = classNames.bind(styles);

function ButtonChange({data, status}) {
  const [changeCircle, setchangeCircle] = useState(status);
  console.log(changeCircle);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div
          className={cx(
            'progress',
            changeCircle == true ? 'active' : 'noneactive',
          )}
          onClick={() => {
            setchangeCircle(!changeCircle);
          }}
        >
          <div
            className={cx(
              'circle',
              changeCircle == true ? 'active' : 'noneactive',
            )}
          ></div>
        </div>
      </div>
      <span> {changeCircle == true ? data[0] : data[1]}</span>
    </div>
  );
}

export default ButtonChange;
