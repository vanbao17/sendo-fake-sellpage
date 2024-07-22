import classNames from 'classnames/bind';
import {useNavigate} from 'react-router-dom';
import styles from './CreateProducts.module.scss';
import {
  CameraIcon,
  CloseIcon,
  DocTickIcon,
  InforIcon,
  LetterIcon,
  SearchIcon,
} from '../../Icons';
import BasicInfor from './BasicInfor/BasicInfor';
import SEOInfor from './SEOInfor/SEOInfor';
import Popup from '../../layout/components/Popup/Popup';
import InputForm from '../../layout/components/InputForm/InputForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../store/Context';
import DetailInfor from './DetailInfor/DetailInfor';
const cx = classNames.bind(styles);

function CreateProducts() {
  const {listCate, setlistCate} = useContext(Context);
  const [dataDm1, setdataDm1] = useState([]);
  const [dataDm2, setdataDm2] = useState([]);
  const [dataDm3, setdataDm3] = useState([]);
  const {blackPlace, seblackPlace} = useContext(Context);
  const {chosseCate, setchosseCate} = useContext(Context);
  const [dataBasicInfor, setdataBasicInfor] = useState([]);
  const [dataDetail, setdataDetail] = useState([]);
  const [finalData, setfinalData] = useState({});
  const nav = useNavigate();

  const handleDataBasicInfor = (data) => {
    setdataBasicInfor(data);
  };
  const handleDataDetail = (data) => {
    setdataDetail(data);
  };
  useEffect(() => {
    if (chosseCate.length >= 3) {
      setfinalData({
        ...dataBasicInfor,
        dataDetail,
        dm1: chosseCate[0].dm1,
        dm2: chosseCate[1].dm2,
        dm3: chosseCate[2].dm3,
      });
    }
  }, [dataDetail, dataBasicInfor, chosseCate]);
  useEffect(() => {
    fetch('https://sdvanbao17.id.vn/api/v1/danhmuc1')
      .then((response) => response.json())
      .then((data) => setdataDm1(data))
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  useEffect(() => {
    if (chosseCate[0] != null) {
      fetch('https://sdvanbao17.id.vn/api/v1/danhmuc2/' + chosseCate[0].dm1)
        .then((response) => response.json())
        .then((data) => setdataDm2(data))
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, [chosseCate[0]]);
  useEffect(() => {
    if (chosseCate[1] != null) {
      fetch(
        'https://sdvanbao17.id.vn/api/v1/danhmuc3withdm2/' + chosseCate[1].dm2,
      )
        .then((response) => response.json())
        .then((data) => setdataDm3(data))
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, [chosseCate[1]]);
  const addDetailProduct = async (idProduct) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idProduct, finalData}),
    };

    try {
      const response = await fetch(
        'https://sdvanbao17.id.vn/api/v1/addDetailProduct',
        option,
      );
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false; // Trả về false trong trường hợp có lỗi
    }
  };

  const addDataAttrProduct = async (idProduct) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idProduct, dataDetail}),
    };
    try {
      const response = await fetch(
        'https://sdvanbao17.id.vn/api/v1/createAttrProduct',
        option,
      );
      if (response.status === 200) {
        const resultDetailProduct = await addDetailProduct(idProduct);
        return resultDetailProduct === true;
      } else {
        return false; // Trường hợp status không phải 200
      }
    } catch (err) {
      console.log(err);
      return false; // Trả về false trong trường hợp có lỗi
    }
  };

  const handleCreateProduct = () => {
    const nameProduct = finalData.name;
    const imageProduct = finalData.imageProfile;
    const video = finalData.video;
    const selledQuality = finalData.quanlity;
    const QuanlityExists = 100;
    const status = finalData.stateProduct;
    const priceDefault = finalData.priceDefault;
    const priceSale = finalData.priceSale;
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;
    const datePublic = formattedDate;
    const madm1 = finalData.dm1;
    const madm2 = finalData.dm2;
    const madm3 = finalData.dm3;
    const phone = sessionStorage.getItem('phone');
    fetch('https://sdvanbao17.id.vn/api/v1/get-shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: phone}),
    })
      .then((rs) => rs.json())
      .then((shop) => {
        const idShop = shop[0].idShop;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nameProduct,
            imageProduct,
            video,
            selledQuality,
            QuanlityExists,
            status,
            priceDefault,
            priceSale,
            datePublic,
            madm1,
            madm2,
            madm3,
            idShop,
          }),
        };
        fetch('https://sdvanbao17.id.vn/api/v1/createProduct', options)
          .then((response1) => response1.json())
          .then((idProduct) => {
            const result = addDataAttrProduct(idProduct);
            if (result) {
              nav('/san-pham');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <CloseIcon
                  onClick={() => {
                    seblackPlace(!blackPlace);
                  }}
                  className={cx('iconClose')}
                />
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
                          className={cx(
                            'itemCate',
                            typeof chosseCate[0] !== 'undefined'
                              ? chosseCate[0].dm1 == item.madm1
                                ? 'active1'
                                : ''
                              : '',
                          )}
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
                          className={cx(
                            'itemCate',
                            typeof chosseCate[1] !== 'undefined'
                              ? chosseCate[1].dm2 == item.madm2
                                ? 'active2'
                                : ''
                              : '',
                          )}
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
                          className={cx(
                            'itemCate',
                            // chosseCate[chosseCate.length - 1].dm3 == item.madm3
                            //   ? 'active3'
                            //   : '',
                          )}
                          onClick={() => {
                            setchosseCate([
                              ...chosseCate,
                              {dm3: item.madm3, ten: item.tendm3},
                            ]);
                          }}
                        >
                          <a>
                            <span>{item.tendm3}</span>
                            {chosseCate[chosseCate.length - 1].dm3 ==
                            item.madm3 ? (
                              <FontAwesomeIcon icon={faCheck} />
                            ) : (
                              <></>
                            )}
                            {/*  */}
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
                    className={cx(chosseCate.length == 3 ? 'susscess' : '')}
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
          <BasicInfor submitData={handleDataBasicInfor} />
          {chosseCate.length == 3 ? (
            <>
              <DetailInfor
                madm1={chosseCate[0].dm1}
                submitData={handleDataDetail}
              />
              <div className={cx('ship')}>
                <div className={cx('title')}>Vận chuyển</div>
                <form className={cx('choose')}>
                  <input className={cx('checkbox')} type="checkbox"></input>
                  <span>Chuyển phát tiêu chuẩn</span>
                </form>
              </div>
              <SEOInfor />
              <div className={cx('wrapper_action_publicProduct')}>
                <div className={cx('process')}>
                  <span>Tổng điểm SEO</span>
                  <div className={cx('process_input')}></div>
                  <span>0/115</span>
                </div>
                <div className={cx('buttons')}>
                  <button className={cx('btn')}>
                    <span>Lưu nháp</span>
                  </button>
                  <button className={cx('btn')}>
                    <span>Đăng</span>
                  </button>
                  <button
                    className={cx('btn', 'action')}
                    onClick={handleCreateProduct}
                  >
                    <span>Đăng và tạo tiếp</span>
                  </button>
                </div>
              </div>
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
