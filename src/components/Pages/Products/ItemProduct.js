import classNames from 'classnames/bind';
import styles from './Products.module.scss';
const cx = classNames.bind(styles);
function ItemProduct({data, onHandleAddProdDelete, dataDelete}) {
  const check = dataDelete.filter((item) => item == data.idProduct);
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
        <span>{data.priceDefault}đ</span>
      </td>
      <td>
        <span>{data.priceSale}đ</span>
      </td>
      <td></td>
      <td>
        <span>{data.QuanlityExists} sản phẩm</span>
      </td>
      <td>
        {data.status === '1' ? <span>Đã duyệt</span> : <span>Chưa duyệt</span>}
      </td>
      <td>
        <button>
          <span>Sửa</span>
        </button>
      </td>
    </tr>
  );
}

export default ItemProduct;
