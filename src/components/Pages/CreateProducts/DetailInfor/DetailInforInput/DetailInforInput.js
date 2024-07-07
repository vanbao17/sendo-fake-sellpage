import classNames from 'classnames/bind';
import styles from './DetailInforInput.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {AddIcon, CloseIcon, SearchIcon} from '../../../../Icons';
import {useEffect, useState} from 'react';
const cx = classNames.bind(styles);

function DetailInforInput({
  dataChose,
  onClick,
  onDeleteData,
  listDataChose,
  idAttribute,
  onSelectDropBox,
  keyText,
}) {
  const [stateDropdown, setstateDropdown] = useState(false);
  const [dataListChose, setdataListChose] = useState([...listDataChose]);
  const [list_data_chose, set_list_data_chose] = useState([...dataChose]);
  useEffect(() => {
    setdataListChose([...listDataChose]);
  }, [listDataChose]);
  const handleSendData = (item) => {
    console.log({key: keyText, value: item});
    onClick({key: keyText, value: item});
    onSelectDropBox({key: keyText, value: item});
  };
  const handleDeleteChose = (idItem) => {
    const newData = listDataChose.filter(
      (it) => it.attribute_value_id !== idItem,
    );
    onDeleteData(newData);
  };
  const handleOnchangeInput = (e) => {
    if (e.target.value.length !== 0) {
      const dataForSearch = dataChose.filter((it) =>
        it.value.startsWith(e.target.value),
      );
      set_list_data_chose(dataForSearch);
    } else {
      set_list_data_chose(dataChose);
    }
  };

  return (
    <div className={cx('wrapperInputDetail')}>
      <div className={cx('container')}>
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
                <input
                  onChange={(e) => {
                    handleOnchangeInput(e);
                  }}
                  placeholder="Nhập giá trị cần tìm"
                  type="text"
                ></input>
              </div>
              <ul>
                {list_data_chose.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        handleSendData(item);
                      }}
                    >
                      <input
                        checked={
                          dataListChose.filter(
                            (it) =>
                              it.value.attribute_value_id ==
                              item.attribute_value_id,
                          ).length == 0
                            ? false
                            : true
                        }
                        type="checkbox"
                      ></input>
                      {item.value}
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
            {dataListChose.length == 0 ? (
              <span> Chọn giá trị có sẵn</span>
            ) : (
              <>
                {dataListChose.map((it, index) => {
                  if (it.attribute_id == idAttribute) {
                    return (
                      <span key={index} className={cx('itemChosse')}>
                        {it.value}
                        <div
                          className={cx('close_icon')}
                          onClick={() => {
                            handleDeleteChose(it.attribute_value_id);
                          }}
                        >
                          <CloseIcon width="10px" height="10px" />
                        </div>
                      </span>
                    );
                  }
                })}
              </>
            )}

            <FontAwesomeIcon
              icon={stateDropdown == true ? faChevronUp : faChevronDown}
            />
          </div>
        </TippyHeadless>
      </div>
      {/* <div className={cx('addAttribute', 'dropdown')}>
        <input
          className={cx('addAttribute_input')}
          placeholder="Thêm giá trị thuộc tính"
          type="text"
        ></input>
        <div>
          <AddIcon width="15px" height="15px" />
        </div>
      </div>
      <div className={cx('btn-add')}>
        <button>
          <span>Thêm</span>
        </button>
      </div> */}
    </div>
  );
}

export default DetailInforInput;
