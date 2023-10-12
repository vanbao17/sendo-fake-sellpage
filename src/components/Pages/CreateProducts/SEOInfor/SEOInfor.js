import classNames from 'classnames/bind';
import styles from './SEOInfor.module.scss';
import InputForm from '../../../layout/components/InputForm/InputForm';
import InputContainer from '../InputContainer';
import {AddIcon} from '../../../Icons';
import ListItemTarget from './ListItemTarget';
const cx = classNames.bind(styles);

function SEOInfor() {
  const relaProduct = {
    products: [1, 2, 3, 4, 5],
    key: [
      {
        title: 'Từ khóa SEO trong Subtitle (H1, H2) ở mô tả sản phẩm: Không',
        quanlity: 0,
      },
      {title: 'Từ khóa SEO trong tiêu đề SEO: Không', quanlity: 0},
      {
        title: 'Từ khóa SEO trong mô tả sản phẩm: Không',
        quanlity: 0,
      },
      {
        title: 'Từ khóa SEO trong mô tả SEO: Không',
        quanlity: 0,
      },
    ],
  };
  const SEOProduct = [
    {
      title: 'Tên sản phẩm đặt đúng theo công ngành hàng, nhiều thông tin',
      quanlity: 0,
      target: 0,
    },
    {title: 'Có video', quanlity: 0, target: 0},
    {
      title:
        'Tải lên ít nhất 3 ảnh, là hình vuông, kích thước tối thiểu 720px x 720px',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Từ khóa SEO có trong mô tả sản phẩm, tiêu đề SEO và mô tả SEO',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Nội dung chứa từ khóa SEO trình bày in đậm, in nghiêng',
      target: 0,
      quanlity: 0,
    },
    {
      title:
        'Mật độ của từ khóa SEO trong toàn bộ bài viết từ 0-2%. Mật độ hiện tại 0%',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Mô tả sản phẩm tối thiểu 200 từ',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Mô tả sản phẩm tối thiểu 400 từ',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Có ảnh trong mô tả sản phẩm, 3 ảnh được 10 điểm',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Mô tả sản phẩm có dẫn liên kết đến sản phẩm khác',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Có sản phẩm liên quan, mỗi sản phẩm 2 điểm',
      target: 0,
      quanlity: 0,
    },
    {
      title: 'Tối thiểu 3 từ khóa (tag) bằng tiếng Việt',
      target: 0,
      quanlity: 0,
    },
  ];
  return (
    <div className={cx('wrapperSEO')}>
      <div className={cx('title')}>Tối ưu tìm kiếm</div>
      <InputContainer text={'Từ khóa SEO'} important={true}>
        <InputForm classesWrapper={cx('input')} placeholder={'Từ khóa SEO'} />
      </InputContainer>
      <InputContainer text={'Tiêu đề SEO'} important={true}>
        <InputForm classesWrapper={cx('input')} placeholder={'Tên sản phẩm'} />
      </InputContainer>
      <InputContainer text={'Mô tả SEO'} important={true}>
        <textarea placeholder="Nhập mô tả SEO"></textarea>
      </InputContainer>
      <InputContainer text={'Đường dẫn'} important={true}>
        <div className={cx('url')}>https://www.sendo.vn/san-pham/</div>
      </InputContainer>
      <InputContainer text={'Từ khóa (tag)'} important={true}>
        <div className={cx('form')}>
          <InputForm
            classesWrapper={'percent35'}
            placeholder={'Nhập từ khóa gợi ý '}
          />
          <InputForm
            classesWrapper={'normal'}
            placeholder={'Từ khóa'}
            banFocus={true}
          />
          <button>
            <span>Tạo từ khóa</span>
          </button>
        </div>
      </InputContainer>
      <InputContainer text={'Sản phẩm liên quan'} important={true}>
        <div className={cx('listProduct')}>
          {relaProduct.products.map((item, index) => {
            return (
              <div key={index} className={cx('addProduct')}>
                <div className={cx('iconAdd')}>
                  <AddIcon className={cx('icon')} />
                </div>
                <span>Sản phẩm {item}</span>
              </div>
            );
          })}
        </div>
      </InputContainer>
      <ListItemTarget data={relaProduct.key} />
      <p>Kiểm tra tối ưu bài viết </p>
      <ListItemTarget data={SEOProduct} />
    </div>
  );
}

export default SEOInfor;
