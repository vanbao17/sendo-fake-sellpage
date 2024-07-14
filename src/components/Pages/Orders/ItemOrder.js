import classNames from 'classnames/bind';
import styles from './Orders.module.scss';
import {OclockIcon} from '../../Icons';
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../store/Context';
import {parseISO, format} from 'date-fns';
const cx = classNames.bind(styles);

function ItemOrder({data}) {
  const [orderItem, setOrderItem] = useState([]);
  const [addressUser, setaddressUser] = useState([]);
  const [attributes, setattributes] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [state, setstate] = useState(false);
  const formatDate = (string) => {
    const date = parseISO(string);
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate;
  };
  useEffect(() => {
    const order_id = data.id;
    fetch('https://sdvanbao17.id.vn/api/v1/getOrderItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({order_id}),
    })
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          setOrderItem(dt);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      'https://sdvanbao17.id.vn/api/v1/getAddressCustomer/' + data.idCustomers,
    )
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          setaddressUser(dt[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch('https://sdvanbao17.id.vn/api/v1/getFullAttribute')
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          setattributes(dt);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch('https://sdvanbao17.id.vn/api/v1/getCustomerId/' + data.idCustomers)
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          setCustomer(dt[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  const fetchGetSizeColor = (int) => {
    const check = attributes.filter((item) => item.attribute_value_id == int);
    if (check.length > 0) {
      return check[0].value;
    }
    return '';
  };
  const fetchUpdateState = () => {
    const order_id = data.id;
    const state = data.state + 1;
    fetch('https://sdvanbao17.id.vn/api/v1/updateStateOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({order_id, state}),
    })
      .then((rs) => rs.json())
      .then((dt) => {
        if (dt.length != 0) {
          window.location.href = '/don-hang';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteOrder = () => {
    const order_id = data.id;
    fetch('https://sdvanbao17.id.vn/api/v1/deleteOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({order_id}),
    })
      .then((rs) => {
        if (rs.status == 200) {
          window.location.href = '/don-hang';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={cx('item_order')}>
        <div className={cx('input_checkbox')}>
          <input type="checkbox"></input>
        </div>
        <div className={cx('infor_product')}>
          <div className={cx('title_order')}>
            <div className={cx('order_id', 'blue_text')}>#{data.id}</div>
            <div className={cx('created_at_order')}>
              {formatDate(data.created_at)}
            </div>
            <div className={cx('state_payment')}>Chưa nhận tiền</div>
            <div className={cx('piolicy_order')}>
              NJV-STANDARD ({addressUser.tt})
            </div>
            <div className={cx('phone_order')}>{customer.phoneNumber}</div>
            <div className={cx('tag_order')}>Mới</div>
            <div className={cx('price_order', 'red_text')}>
              {(data.total_price * 1000000).toLocaleString('vi-VN')}đ
            </div>
          </div>
          <div className={cx('product_order')}>
            {orderItem.map((odi, index) => {
              return (
                <div key={index} className={cx('item_product')}>
                  <div className={cx('product_name')}>
                    <img src={odi.imageProduct}></img>
                    <strong className={cx('blue_text')}>
                      {odi.nameProduct}
                    </strong>
                  </div>
                  <div className={cx('id_product')}>
                    Mã SP:
                    <span className={cx('blue_text')}>{odi.idProduct}</span>
                  </div>
                  <div className={cx('attribute_product')}>
                    <span> Màu sắc:{fetchGetSizeColor(odi.color)}</span>-
                    <span>Kích thước :{fetchGetSizeColor(odi.size)}</span>
                  </div>
                  <div className={cx('quality_product')}>
                    Số lượng:{' '}
                    <span className={cx('blue_text')}>{odi.quantity} cái</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={cx('wranning_time_out')}>
            <OclockIcon className={cx('icon_oclock')} />
            Còn 24 giờ để xác nhận đơn hàng
          </div>
          <div className={cx('action_order')}>
            <div className={cx('action_left')}>
              <div>
                <input type="checkbox" checked={true}></input>
                <span>Kiểm hàng</span>
              </div>
              <div>
                <input type="checkbox" checked={true}></input>
                <span>Khai giá (Miễn phí)</span>
              </div>
            </div>
            <div className={cx('action_right')}>
              <div className={cx('list_button')}>
                <button>
                  <span>Chi tiết</span>
                </button>
                <button
                  onClick={() => {
                    fetchUpdateState();
                  }}
                >
                  <span>Còn hàng</span>
                </button>
                <button
                  onClick={() => {
                    handleDeleteOrder();
                  }}
                >
                  <span>Hủy</span>
                </button>
                <button>
                  <span>Hoãn</span>
                </button>
                <button>
                  <span>Gọi xác nhận đơn hàng</span>
                </button>
                <button>
                  <span>In hóa đơn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemOrder;
