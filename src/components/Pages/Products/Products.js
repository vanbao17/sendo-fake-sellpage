import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import InputForm from '../../layout/components/InputForm/InputForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faBarcode,
  faBox,
  faFile,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {
  BoxIcon,
  CalendarIcon,
  CarIcon,
  CateIcon,
  CodeIcon,
  DocTickIcon,
  StatusIcon,
  TrashIcon,
} from '../../Icons';
import {Context} from '../../../store/Context';
const cx = classNames.bind(styles);
function Products() {
  const {hidemenu, sethidemenu} = useContext(Context);
  const [filterProduct, setfilterProduct] = useState(false);
  const handleClickFilter = () => {
    setfilterProduct(!filterProduct);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('titlePage')}>Danh sách sản phẩm</div>
        <div className={cx('filterProduct')}>
          <div className={cx('row1')}>
            <InputForm
              classname={cx('tag')}
              placeholder={'Tên sản phẩm'}
              icon={<BoxIcon className={cx('icon')} />}
            ></InputForm>
            <InputForm
              classname={cx('tag')}
              placeholder={'Mã sản phẩm    '}
              icon={<CodeIcon className={cx('icon')} />}
            ></InputForm>
            <InputForm
              classname={cx('tag')}
              icon={<CateIcon className={cx('icon')} />}
              tippyData={[
                'Tất cả trạng thái',
                'Nháp',
                'Chờ duyệt',
                'Đã duyệt',
                'Từ chối',
                'Hủy',
              ]}
            ></InputForm>
            <InputForm
              classname={cx('tag')}
              icon={<CalendarIcon className={cx('icon')} />}
              tippyData={[
                'Tất cả trạng thái',
                'Nháp',
                'Chờ duyệt',
                'Đã duyệt',
                'Từ chối',
                'Hủy',
              ]}
            ></InputForm>
          </div>
          <div className={cx('row1')}>
            <InputForm
              classname={cx('tag')}
              icon={<DocTickIcon className={cx('icon')} />}
              tippyData={[
                'Trạng thái',
                'Nháp',
                'Chờ duyệt',
                'Đã duyệt',
                'Từ chối',
                'Hủy',
              ]}
            ></InputForm>
            <InputForm
              classname={cx('tag')}
              icon={<StatusIcon className={cx('icon')} />}
              tippyData={['Tất cả tình trạng', 'Ngừng bán', 'Đang bán']}
            ></InputForm>
            <InputForm
              classname={cx('tag')}
              icon={<CarIcon className={cx('icon')} />}
              tippyData={[
                'Tất cả gói chuyển phát',
                'Gói hỏa tốc ',
                'Gói tiêu chuẩn',
                'Gói bưu kiện',
              ]}
            ></InputForm>
            <div className={cx('actionButton')}>
              <div className={cx('iconReturn')}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </div>
              <button>Tìm kiếm </button>
            </div>
          </div>
          <ul className={cx('cateFilter')}>
            <li
              className={cx('itemcate', filterProduct == false ? 'active' : '')}
              onClick={handleClickFilter}
            >
              Tất cả sản phẩm
            </li>
            <li
              className={cx('itemcate', filterProduct == true ? 'active' : '')}
              onClick={handleClickFilter}
            >
              Sửa nhanh sản phẩm
            </li>
          </ul>
        </div>
        <div className={cx('filterProduct2')}>
          <div className={cx('left')}>
            <span>Hiển thị:</span>
            <InputForm
              classname={cx('small')}
              tippyData={[10, 20, 50]}
            ></InputForm>
            <span>0-0 trên 0 sản phẩm</span>
          </div>
          <div className={cx('center', filterProduct == true ? 'active' : '')}>
            <span>Sắp xếp theo:</span>
            <InputForm
              classname={cx('normal')}
              tippyData={['Thứ tự', 'Tên sản phẩm', 'Mã sản phẩm']}
            ></InputForm>
            <div className={cx('iconChangeNum', 'btn')}>
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </div>
          </div>
          {filterProduct == false ? (
            <div className={cx('right')}>
              <div className={cx('btn-addProduct')}>
                <Link to={'/san-pham/dang-san-pham'}>Thêm sản phẩm </Link>
              </div>
              <div className={cx('btn-trash', 'btn')}>
                <TrashIcon className={cx('iconTrash')} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={cx('listProduct')}>
          <div className={cx('products')}></div>
          <div className={cx('noneProduct')}>
            <div className={cx('imageNonePd')}>
              <img src="https://media3.scdn.vn/img4/2020/07_03/qFi8EAsMzCHKBzY5kDsz.png"></img>
            </div>
            <p>Không có sản phẩm</p>
            <span>Bạn không có sản phẩm nào.</span>
            <Link
              onClick={() => {
                sethidemenu(!hidemenu);
              }}
              to={'/san-pham/dang-san-pham'}
            >
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
