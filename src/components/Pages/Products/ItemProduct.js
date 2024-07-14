import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Popup from '../../Popup/Popup';
import InputForm from '../../layout/components/InputForm/InputForm';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {format} from 'date-fns';
import DatePicker from 'react-datepicker';
const cx = classNames.bind(styles);
function ItemProduct({data, onHandleAddProdDelete, dataDelete}) {
  const check = dataDelete.filter((item) => item == data.idProduct);
  const [statePopup, setStatePopup] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const formatDate = (string) => {
    return format(new Date(string), 'dd-MM-yyyy');
  };
  useEffect(() => {
    if (statePopup == true) {
      fetch('https:sdvanbao17.id.vn/api/v1/detail/' + data.idProduct)
        .then((rs) => rs.json())
        .then((dt) => {
          const dataDetail = dt[0];
          setDataUpdate({
            idProduct: data.idProduct,
            trademark: dataDetail.trademark,
            nameProduct: dataDetail.nameProduct,
            priceDefault: dataDetail.priceDefault,
            priceSale: dataDetail.priceSale,
            QuanlityExists: dataDetail.QuanlityExists,
            dateEnd: dataDetail.dateEnd,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [statePopup]);
  const handleUpdateProduct = () => {
    const {
      idProduct,
      trademark,
      nameProduct,
      priceDefault,
      priceSale,
      QuanlityExists,
      dateEnd,
    } = dataUpdate;
    fetch('https:sdvanbao17.id.vn/api/v1/updateProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idProduct,
        trademark,
        nameProduct,
        priceDefault,
        priceSale,
        QuanlityExists,
        dateEnd,
      }),
    })
      .then((rs) => {
        if (rs.status == 200) {
          window.location.href = '/san-pham';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td className={cx('image_product')}>
        <input
          type="checkbox"
          checked={check.length != 0 ? true : false}
          onClick={() => {
            onHandleAddProdDelete(data.idProduct);
          }}
        ></input>
      </td>
      <td className={cx('image_product')}>
        <img src={data.imageProduct}></img>
      </td>
      <td>
        <span>{data.idProduct}</span>
      </td>
      <td>
        <span>{data.nameProduct}</span>
      </td>
      <td>
        <span>{data.priceDefault.toLocaleString('vi-VN')}đ</span>
      </td>
      <td>
        <span>{data.priceSale.toLocaleString('vi-VN')}đ</span>
      </td>
      <td></td>
      <td>
        <span>{data.QuanlityExists} </span>
      </td>
      <td>
        {data.status === '1' ? <span>Đã duyệt</span> : <span>Chưa duyệt</span>}
      </td>
      <td>
        <button
          onClick={() => {
            setStatePopup(!statePopup);
          }}
        >
          <span>Sửa</span>
        </button>
      </td>
      {statePopup == true ? (
        <Popup width="90%">
          <div className={cx('wrapper_popup_update')}>
            <div className={cx('container_update')}>
              <div className={cx('title_uptate')}>
                <span>Sửa thuộc tính sản phẩm</span>
                <FontAwesomeIcon
                  onClick={() => {
                    setStatePopup(!statePopup);
                  }}
                  icon={faClose}
                  className={cx('icon_close')}
                />
              </div>
              <div className={cx('infor_product')}>
                <div className={cx('input_container')}>
                  <div>
                    <input
                      value={
                        dataUpdate != undefined ? dataUpdate.trademark : ''
                      }
                      onChange={(e) => {
                        setDataUpdate({
                          ...dataUpdate,
                          trademark: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Nhập mã sản phẩm"
                    ></input>
                  </div>
                </div>
                <div className={cx('input_container')}>
                  <div>
                    <input
                      value={
                        dataUpdate != undefined ? dataUpdate.nameProduct : ''
                      }
                      onChange={(e) => {
                        setDataUpdate({
                          ...dataUpdate,
                          nameProduct: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Nhập tên sản phẩm"
                    ></input>
                  </div>
                </div>
                <div className={cx('input_container')}>
                  <div>
                    <input
                      value={
                        dataUpdate != undefined
                          ? dataUpdate.priceDefault.toLocaleString('vi-VN')
                          : ''
                      }
                      onChange={(e) => {
                        setDataUpdate({
                          ...dataUpdate,
                          priceDefault: e.target.value.replace(/\./g, ''),
                        });
                      }}
                      type="text"
                      placeholder="Giá gốc"
                    ></input>
                  </div>
                </div>
                <div className={cx('input_container')}>
                  <div>
                    <input
                      value={
                        dataUpdate != undefined
                          ? dataUpdate.priceSale.toLocaleString('vi-VN')
                          : ''
                      }
                      onChange={(e) => {
                        setDataUpdate({
                          ...dataUpdate,
                          priceSale: e.target.value.replace(/\./g, ''),
                        });
                      }}
                      type="text"
                      placeholder="Giá khuyến mãi"
                    ></input>
                  </div>
                </div>
                <div className={cx('input_container')}>
                  <div>
                    <DatePicker
                      className={cx('data_left')}
                      selected={
                        dataUpdate != undefined
                          ? dataUpdate.dateEnd
                          : new Date()
                      }
                      onChange={(date) => {
                        setDataUpdate({
                          ...dataUpdate,
                          dateEnd: date,
                        });
                      }}
                    />
                    {/* <input
                      value={
                        
                      }
                      type="text"
                      placeholder="Thời gian khuyến mãi  "
                    ></input> */}
                  </div>
                </div>
                <div className={cx('input_container')}>
                  <div>
                    <input
                      value={
                        dataUpdate != undefined ? dataUpdate.QuanlityExists : ''
                      }
                      onChange={(e) => {
                        setDataUpdate({
                          ...dataUpdate,
                          QuanlityExists: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Số lượng"
                    ></input>
                  </div>
                </div>
              </div>
              <div className={cx('actions')}>
                <button
                  onClick={() => {
                    setStatePopup(!statePopup);
                  }}
                >
                  <span>Thoát</span>
                </button>
                <button
                  onClick={() => {
                    handleUpdateProduct();
                  }}
                >
                  <span>Lưu</span>
                </button>
              </div>
            </div>
          </div>
        </Popup>
      ) : (
        <></>
      )}
    </tr>
  );
}

export default ItemProduct;
