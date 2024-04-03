import classNames from 'classnames/bind';
import styles from './DetailInfor.module.scss';
import {useEffect, useState} from 'react';
import InputForm from '../../../layout/components/InputForm/InputForm';
import InputContainer from '../InputContainer';

import DetailInforInput from './DetailInforInput/DetailInforInput';
const cx = classNames.bind(styles);
function DetailInfor({madm1}) {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dataAttribute, setdataAttribute] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tim-kiem/' + madm1)
      .then((response) => response.json())
      .then((data) => setdataAttribute(data))
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  console.log(dataAttribute);
  return (
    <div className={cx('wrapperDetailInfor')}>
      <div className={cx('title')}>Thông tin chi tiết</div>
      {dataAttribute.map((item, index) => {
        return (
          <>
            <InputContainer text={item.attribute_name} important={true}>
              <DetailInforInput dataChose={a} />
            </InputContainer>
          </>
        );
      })}
    </div>
  );
}

export default DetailInfor;
