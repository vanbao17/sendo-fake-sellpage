import classNames from 'classnames/bind';
import styles from './CreateProducts.module.scss';
import {
  CameraIcon,
  CloseIcon,
  InforIcon,
  LetterIcon,
  SearchIcon,
} from '../../Icons';
import BasicInfor from './BasicInfor/BasicInfor';
import SEOInfor from './SEOInfor/SEOInfor';
import Popup from '../../layout/components/Popup/Popup';
import InputForm from '../../layout/components/InputForm/InputForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../store/Context';
import DetailInfor from './DetailInfor/DetailInfor';
const cx = classNames.bind(styles);

function CreateProducts() {
  const {listCate, setlistCate} = useContext(Context);
  const [dataDm1, setdataDm1] = useState([]);
  const [dataDm2, setdataDm2] = useState([]);
  const [dataDm3, setdataDm3] = useState([]);
  const {chosseCate, setchosseCate} = useContext(Context);
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/danhmuc1')
      .then((response) => response.json())
      .then((data) => setdataDm1(data))
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  useEffect(() => {
    if (chosseCate[0] != null) {
      fetch('http://localhost:3001/api/v1/danhmuc2/' + chosseCate[0].dm1)
        .then((response) => response.json())
        .then((data) => setdataDm2(data))
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, [chosseCate[0]]);
  useEffect(() => {
    if (chosseCate[1] != null) {
      fetch('http://localhost:3001/api/v1/danhmuc3withdm2/' + chosseCate[1].dm2)
        .then((response) => response.json())
        .then((data) => setdataDm3(data))
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, [chosseCate[1]]);
  console.log(chosseCate);
  return (
    <div className={cx('wrapper')}>
      {listCate == true ? (
        <Popup>
          <div className={cx('containChooseProd')}>
            <div className={cx('title')}>
              <span>Chọn ngành hàng</span>
              <span
                onClick={() => {
                  setlistCate(!listCate);
                }}
              >
                <CloseIcon className={cx('iconClose')} />
              </span>
            </div>
            <div className={cx('containContent')}>
              <div className={cx('content')}>
                <InputForm
                  placeholder={'Tên ngành hàng'}
                  classesWrapper={'normal'}
                  classname={cx('tag')}
                  icon={<SearchIcon className={cx('icon')} />}
                ></InputForm>
                <div className={cx('listCol')}>
                  <ul className={cx('col1')}>
                    {dataDm1.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx('itemCate')}
                          onClick={() => {
                            setchosseCate([
                              {dm1: item.madm1, ten: item.tendm1},
                            ]);
                          }}
                        >
                          <a>
                            <span>{item.tendm1}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={cx('col2')}>
                    {dataDm2.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx('itemCate')}
                          onClick={() => {
                            setchosseCate([
                              ...chosseCate,
                              {dm2: item.madm2, ten: item.tendm2},
                            ]);
                          }}
                        >
                          <a>
                            <span>{item.tendm2}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={cx('col3')}>
                    {dataDm3.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx('itemCate')}
                          onClick={() => {
                            setchosseCate([
                              ...chosseCate,
                              {dm3: item.madm3, ten: item.tendm3},
                            ]);
                          }}
                        >
                          <a>
                            <span>{item.tendm3}</span>
                            {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={cx('btn-action')}>
                  <button
                    className={cx('exit')}
                    onClick={() => {
                      setlistCate(!listCate);
                    }}
                  >
                    <span>Thoát</span>
                  </button>
                  <button
                    onClick={() => {
                      setchosseCate([...chosseCate]);
                      setlistCate(!listCate);
                    }}
                  >
                    <span>Xác nhận</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      ) : (
        <></>
      )}

      <span className={cx('url')}>Sản phẩm / Đăng sản phẩm</span>
      <div className={cx('titlePage')}>
        <div className={cx('text')}>Đăng sản phẩm</div>
        <a className={cx('Feedback')}>
          <LetterIcon />
          Gửi góp ý
        </a>
      </div>
      <div className={cx('content')}>
        <div className={cx('left')}>
          <BasicInfor />
          {chosseCate.length != 0 ? (
            <>
              <DetailInfor madm1={chosseCate[0].dm1} />
              <div className={cx('ship')}>
                <div className={cx('title')}>Vận chuyển</div>
                <form className={cx('choose')}>
                  <input className={cx('checkbox')} type="checkbox"></input>
                  <span>Chuyển phát tiêu chuẩn</span>
                </form>
              </div>
              <SEOInfor />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={cx('right')}>
          <div className={cx('guide')}>
            <div className={cx('container')}>
              <span>Nhập tên sản phẩm và chọn Ngành hàng</span>
              <InforIcon className={cx('icon')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProducts;
