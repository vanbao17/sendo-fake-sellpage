import classNames from 'classnames/bind';
import styles from './ButtonChange.module.scss';
import {useState} from 'react';
const cx = classNames.bind(styles);

function ButtonChange({data, status, onHandleBasicInfor, keyText}) {
  const [changeCircle, setchangeCircle] = useState(false);
  const handleState = (state) => {
    if (state == true) {
      onHandleBasicInfor({key: keyText, value: 1});
    } else {
      onHandleBasicInfor({key: keyText, value: 0});
    }
  };
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
            handleState(!changeCircle);
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
