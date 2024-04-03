import classNames from 'classnames/bind';
import styles from './DetailInforInput.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {SearchIcon} from '../../../../Icons';
import {useState} from 'react';
const cx = classNames.bind(styles);

function DetailInforInput({dataChose}) {
  const [stateDropdown, setstateDropdown] = useState(false);
  return (
    <div className={cx('wrapperInputDetail')}>
      <TippyHeadless
        interactive={true}
        offset={[0, 5]}
        delay={[100, 10]}
        placement="bottom"
        visible={stateDropdown}
        render={() => (
          <div className={cx('list-chose')}>
            <div className={cx('search')}>
              <SearchIcon />
              <input placeholder="Nhập giá trị cần tìm" type="text"></input>
            </div>
            <ul>
              {dataChose.map((item, index) => {
                return (
                  <li>
                    <input type="checkbox"></input>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      >
        <div
          className={cx('dropdown')}
          onClick={() => {
            setstateDropdown(!stateDropdown);
          }}
        >
          <span> Chọn giá trị có sẵn</span>
          <FontAwesomeIcon
            icon={stateDropdown == true ? faChevronUp : faChevronDown}
          />
        </div>
      </TippyHeadless>
    </div>
  );
}

export default DetailInforInput;
