import classNames from 'classnames/bind';
import styles from './DetailInfor.module.scss';
import {useEffect, useState, useRef} from 'react';
import InputForm from '../../../layout/components/InputForm/InputForm';
import InputContainer from '../InputContainer';

import DetailInforInput from './DetailInforInput/DetailInforInput';
import {AddIcon, CateIcon, CloseIcon} from '../../../Icons';
const cx = classNames.bind(styles);
function DetailInfor({madm1, submitData}) {
  const [dataAttribute, setdataAttribute] = useState([]);
  const [dataAttributeValues, setdataAttributeValues] = useState([]);
  const [datachose, setdatachose] = useState([]);
  const [addAttribute, setaddAttribute] = useState({
    name: '',
    data: [],
  });
  const [finalData, setfinalData] = useState({
    'Phương thức vận chuyển': '',
    'Loại shop': null,
    'Ưu đãi': null,
    'Phong cách': null,
    'Họa tiết': null,
    'Chất liệu vãi': null,
    'Chiều dài tay áo': null,
    'Chuyên dài váy': null,
    'Kích thước': [],
    'Kiểu cổ áo': null,
    'Đơn vị': [],
    'Khoản giá': null,
    'Đánh giá': null,
    'Màu sắc': [],
  });
  const [allValues, setAllValues] = useState([]);
  useEffect(() => {
    const values = Object.values(finalData);
    setAllValues(values);
  }, [finalData]);
  useEffect(() => {
    submitData(allValues);
  }, [finalData]);
  const handleDataFinal = (data) => {
    const updatedFinalData = {...finalData};
    if (Array.isArray(finalData[data.key])) {
      const check = updatedFinalData[data.key].find(
        (item) => item.attribute_value_id === data.value.attribute_value_id,
      );
      if (check == undefined) {
        updatedFinalData[data.key] = [...finalData[data.key], data.value];
      } else {
        const filterdata = updatedFinalData[data.key].filter(
          (item) => item.attribute_value_id !== data.value.attribute_value_id,
        );
        updatedFinalData[data.key] = [...filterdata];
      }
    } else {
      updatedFinalData[data.key] = data.value;
    }
    setfinalData(updatedFinalData);
  };
  const refInputName = useRef(null);
  const refInputData = useRef(null);
  useEffect(() => {
    fetch('https://sdvanbao17.id.vn/api/v1/tim-kiem/' + madm1)
      .then((response) => response.json())
      .then((data) => setdataAttribute(data))
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  useEffect(() => {
    fetch('https://sdvanbao17.id.vn/api/v1/getAllAttributeValues')
      .then((response) => response.json())
      .then((data) => setdataAttributeValues(data))
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  const handleChoseData = (item) => {
    const data = datachose.filter(
      (it) => it.value.attribute_value_id == item.value.attribute_value_id,
    );
    if (data.length == 0) {
      setdatachose([...datachose, item]);
    } else {
      const newData = datachose.filter(
        (it) => it.value.attribute_value_id !== item.value.attribute_value_id,
      );
      setdatachose(newData);
    }
  };
  const handleDeleteData = (data) => {
    setdatachose(data);
  };
  const handleAddAttribute = () => {
    let data = refInputData.current.value;
    if (refInputName.current !== null) {
      let name = refInputName.current.value;
      setaddAttribute({
        name: name,
        data: [...addAttribute.data, data],
      });
    } else {
      const filterData = addAttribute.data.filter((it) => it == data);
      if (filterData.length == 0) {
        setaddAttribute({
          name: addAttribute.name,
          data: [...addAttribute.data, data],
        });
      }
    }
    refInputData.current.value = '';
  };
  const handleDeleteDataAtt = (item) => {
    const newData = addAttribute.data.filter((it) => it !== item);
    setaddAttribute({name: addAttribute.name, data: newData});
  };
  return (
    <div className={cx('wrapperDetailInfor')}>
      <div className={cx('title')}>Thông tin chi tiết</div>
      {dataAttribute.map((item, index) => {
        const data = dataAttributeValues.filter(
          (it) => item.attribute_id == it.attribute_id,
        );
        return (
          <>
            <InputContainer
              key={index}
              text={item.attribute_name}
              important={true}
            >
              {item.type === 'dropbox' ? (
                <DetailInforInput
                  idAttribute={item.attribute_id}
                  listDataChose={datachose}
                  onDeleteData={handleDeleteData}
                  onClick={handleChoseData}
                  dataChose={data}
                  keyText={item.attribute_name}
                  onSelectDropBox={handleDataFinal}
                />
              ) : (
                <div className={cx('wrapperInput')}>
                  <InputForm
                    keyText={item.attribute_name}
                    onSelectDropBox={handleDataFinal}
                    classname={cx('tag')}
                    tippyData={data}
                  ></InputForm>
                </div>
              )}
            </InputContainer>
          </>
        );
      })}
      <InputContainer
        text={
          addAttribute.name.length == 0 ? 'Thêm thuộc tính' : addAttribute.name
        }
        important={true}
      >
        <div className={cx('container')}>
          <div className={cx('addAttribute', 'dropdown')}>
            {addAttribute.data.length == 0 ? (
              <input
                className={cx('addAttribute_input')}
                placeholder="Thêm tên thuộc tính"
                type="text"
                ref={refInputName}
              ></input>
            ) : (
              addAttribute.data.map((it, index) => {
                return (
                  <span key={index} className={cx('itemChosse')}>
                    {it}
                    <div
                      className={cx('close_icon')}
                      onClick={() => {
                        handleDeleteDataAtt(it);
                      }}
                    >
                      <CloseIcon width="10px" height="10px" />
                    </div>
                  </span>
                );
              })
            )}
          </div>
          <div className={cx('addAttribute_value', 'dropdown')}>
            <input
              className={cx('addAttribute_input')}
              placeholder="Thêm giá trị của thuộc tính"
              ref={refInputData}
              type="text"
            ></input>
          </div>
          <div className={cx('btn-add')}>
            <button
              onClick={() => {
                handleAddAttribute();
              }}
            >
              <span>Thêm</span>
            </button>
          </div>
        </div>
      </InputContainer>
    </div>
  );
}

export default DetailInfor;
