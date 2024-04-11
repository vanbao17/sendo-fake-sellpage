import classNames from 'classnames/bind';
import styles from './TypeShop.module.scss';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import logo from '../../../Assets/Logo';
import ItemTick from './ItemTick';
import {Link} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
const cx = classNames.bind(styles);

function TypeShop() {
  const navigate = useNavigate();
  const valueSendo = 'shopSendo';
  const valueSenmail = 'shopSendmail';
  return (
    <div className={cx('wrapper')}>
      <Header notNav />
      <div className={cx('container')}>
        <h2>Bạn muốn kinh doanh loại Shop nào?</h2>
        <h3>
          Vui lòng chọn loại Shop bạn muốn mở. Một tài khoản chỉ mở được một
          trong hai loại Shop.
        </h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <div className={cx('titleImage')}>
                  <div>
                    <img src={logo.shopsendo}></img>
                    <span>Shop Sendo</span>
                  </div>
                </div>
              </th>
              <th>
                <div className={cx('titleImage')}>
                  <div>
                    <img src={logo.shopmail}></img>
                    <span>Shop SenMall</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Miễn phí mở Shop</p>
              </td>
              <td>
                <ItemTick type={true} />
              </td>
              <td>
                <ItemTick type={true} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Yêu cầu giấy tờ</p>
                <span>
                  Giấy phép kinh doanh và chứng từ thương hiệu, ngành hàng
                </span>
              </td>
              <td>
                <ItemTick type={false} />
              </td>
              <td>
                <ItemTick type={true} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Cấp độ</p>
              </td>
              <td>
                <span>Thường</span>
                <span>Uy Tín Cấp 1, 2, 3</span>
              </td>
              <td>
                <span>Thường</span>
                <span>Uy Tín Cấp 1, 2, 3</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Quyền lợi hiển thị</p>
              </td>
              <td>
                <strong>Shop Thường</strong>
                <strong>Shop Uy Tín</strong>
              </td>
              <td>
                <strong>Shop Thường</strong>
                <strong>Shop Uy Tín</strong>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Ưu tiên xuất hiện ở trang tìm kiếm</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Huy hiệu chứng nhận Shop</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Bộ lọc sản phẩm riêng</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Hiển thị shop ở mục Gian hàng chính hãng Sendo</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={false} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={true} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Hiển thị sản phẩm ở trang SenMall</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={false} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={true} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Các quyền lợi khác</p>
              </td>
              <td>
                <span>Shop Thường</span>
                <span>Shop Uy Tín</span>
              </td>
              <td>
                <span>Shop Thường</span>
                <span>Shop Uy Tín</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Ưu tiên xét duyệt sản phẩm/Shop</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>- Được nhận diện là Shop Uy Tín</span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  - Tham gia chương trình thúc đẩy bán hàng do Sendo tài trợ
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
              <td>
                <span>
                  <ItemTick type={false} />
                </span>
                <span>
                  <ItemTick type={true} />
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <a
                  onClick={() => {
                    navigate(`/inforshop`, {state: valueSendo});
                  }}
                >
                  <p>Tạo shop Sendo</p>
                </a>
              </td>
              <td>
                <a
                  onClick={() => {
                    navigate(`/inforshop`, {state: valueSenmail});
                  }}
                >
                  <p>Tạo shop SenMail</p>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default TypeShop;
