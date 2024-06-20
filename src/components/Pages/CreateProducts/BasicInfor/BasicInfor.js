import classNames from 'classnames/bind';
import styles from './BasicInfor.module.scss';
import {
  CalendarIcon,
  CameraIcon,
  InforIcon,
  LetterIcon,
  MoutainIcon,
  PenIcon,
} from '../../../Icons';
import 'react-quill/dist/quill.snow.css';
import InputContainer from '../InputContainer';
import InputForm from '../../../layout/components/InputForm/InputForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import WordMini from '../WordMini/WordMini';
import ButtonChange from '../../../layout/components/ButtonChange/ButtonChange';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../../store/Context';
import DetailInfor from '../DetailInfor/DetailInfor';
import DragFile from '../DragFile/DragFile';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const cx = classNames.bind(styles);

function BasicInfor({submitData}) {
  const {listCate, setlistCate} = useContext(Context);
  const {chosseCate, setchosseCate} = useContext(Context);
  const [stateDragFileImage, setstateDragFileImage] = useState(false);
  const [stateDragFileVideo, setstateDragFileVideo] = useState(false);
  const [stateDragFileImageProfile, setstateDragFileImageProfile] =
    useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [finalData, setfinalData] = useState({
    name: '',
    dm1: chosseCate.length !== 0 ? chosseCate[0].dm1 : null,
    dm2: chosseCate.length > 1 ? chosseCate[1].dm2 : null,
    dm3: chosseCate.length > 2 ? chosseCate[2].dm3 : null,
    imageProfile: null,
    imageOther: [],
    video: null,
    desc: null,
    code: null,
    stateProduct: null,
    priceDefault: null,
    priceSale: null,
    beginDate: null,
    endDate: null,
    quanlity: null,
    weight: null,
    length: null,
    width: null,
    height: null,
  });
  useEffect(() => {
    submitData(finalData);
  }, [finalData]);
  const handleStateImage = (state) => {
    setstateDragFileImage(state);
  };
  const handleStateVideo = (state) => {
    setstateDragFileVideo(state);
  };

  const handleDataFinal = (data) => {
    const updatedFinalData = {...finalData};
    updatedFinalData[data.key] = data.value;
    setfinalData(updatedFinalData);
  };

  return (
    <div className={cx('wrapperBasicInfor')}>
      {stateDragFileImageProfile == true ? (
        <DragFile
          handleUrlProfile={handleDataFinal}
          state={() => {
            setstateDragFileImageProfile(false);
          }}
          title={'imagep'}
        />
      ) : (
        <></>
      )}{' '}
      {stateDragFileImage == true ? (
        <DragFile
          handleUrl={handleDataFinal}
          state={handleStateImage}
          title={'image'}
        />
      ) : (
        <></>
      )}
      {stateDragFileVideo == true ? (
        <DragFile
          handleUrlVid={handleDataFinal}
          state={handleStateVideo}
          title={'video'}
        />
      ) : (
        <></>
      )}
      <div className={cx('title')}>Nhập tên sản phẩm và chọn Ngành hàng</div>
      <div className={cx('information')}>
        <InforIcon className={cx('icon')} />
        <span>
          Không còn tốn thời gian, bạn có thể đăng nhanh sau khi nhập đủ thông
          tin cơ bản. Xem <a> Hướng dẫn</a> nếu chưa rõ cách đăng sản phẩm bạn
          nhé.
        </span>
      </div>
      <InputContainer text={'Tên sản phẩm '} important={true}>
        <InputForm
          onHandleBasicInfor={handleDataFinal}
          keyText="name"
          classesWrapper={cx('input')}
          placeholder={'Nhập tên sản phẩm từ 10 - 250 ký tự'}
        />
      </InputContainer>
      <InputContainer text={' '}>
        <div className={cx('progress')}></div>
        <div className={cx('salePoint')}>
          <span>Chưa đủ thông tin để đề xuất cải thiện (0 đề xuất)</span>
          <span className={cx('point')}>
            0/30 điểm SEO
            <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
          </span>
        </div>
      </InputContainer>
      <InputContainer text={'Ngành hàng'} important={true}>
        {chosseCate.length !== 3 ? (
          <span
            className={cx('urlCate')}
            onClick={() => {
              setlistCate(!listCate);
            }}
          >
            Chưa chọn ngành hàng
            <PenIcon className={cx('iconpen')} width="14px" height="14px" />
          </span>
        ) : (
          <span
            onClick={() => {
              setlistCate(!listCate);
            }}
          >
            {chosseCate[0].ten + '>'} {chosseCate[1].ten}{' '}
            {'>' + chosseCate[2].ten}
          </span>
        )}

        <ul className={cx('listurlCate')}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </InputContainer>
      {chosseCate.length !== 0 ? (
        <>
          <InputContainer text={'Ảnh sản phẩm'} important={true}>
            <span className={cx('textImage')}>
              Thêm 1 ảnh đại diện. Tổng tối đa 10 ảnh.
            </span>
            <div className={cx('addImagePro')}>
              <div
                className={cx('profile')}
                onClick={() => {
                  setstateDragFileImageProfile(!stateDragFileImageProfile);
                }}
              >
                <div className={cx('iconMoutain')}>
                  <MoutainIcon className={cx('icon')} />
                </div>
                <span>Ảnh đại diện</span>
              </div>
              <div
                className={cx('imgDesc')}
                onClick={() => {
                  setstateDragFileImage(!stateDragFileImage);
                }}
              >
                <div className={cx('iconMoutain')}>
                  <MoutainIcon className={cx('icon')} />
                </div>
                <span>Thêm ảnh</span>
              </div>
            </div>
          </InputContainer>
          <InputContainer text={'Video sản phẩm'} important={true}>
            <div className={cx('addImagePro')}>
              <div
                className={cx('profile')}
                onClick={() => {
                  setstateDragFileVideo(!stateDragFileVideo);
                }}
              >
                <div className={cx('iconCamera')}>
                  <CameraIcon className={cx('icon')} />
                </div>
                <span>Thêm video</span>
              </div>
            </div>
          </InputContainer>
          <InputContainer text={'Mô tả sản phẩm '} important={true}>
            <div className={cx('containerWord')}>
              <WordMini onHandleBasicInfor={handleDataFinal} keyText="desc" />
            </div>
          </InputContainer>
          <InputContainer
            text={'Mã sản phẩm '}
            important={true}
            textQuanlity={true}
            className={'formNormal'}
          >
            <InputForm
              classesWrapper={cx('input')}
              handleData={handleDataFinal}
              onHandleBasicInfor={handleDataFinal}
              keyText="code"
              placeholder={'Nhập mã sản phẩm tối thiểu 3 - 45 ký tự'}
            />
          </InputContainer>
          <InputContainer text={'Tình trạng hàng'}>
            <ButtonChange
              status={true}
              data={['Đang bán', 'Ngừng bán']}
              onHandleBasicInfor={handleDataFinal}
              keyText="stateProduct"
            />
          </InputContainer>
          <InputContainer text={'Giá gốc sản phẩm *'} className={'formNormal'}>
            <InputForm
              classesWrapper={cx('input')}
              placeholder={'Trên 8.000đ'}
              onHandleBasicInfor={handleDataFinal}
              keyText="priceDefault"
              unit={'đ'}
            />
          </InputContainer>
          <InputContainer text={'Giá khuyến mãi'} className={'formNormal'}>
            <InputForm
              classesWrapper={cx('input')}
              placeholder={'Trên 1.000đ'}
              onHandleBasicInfor={handleDataFinal}
              keyText="priceSale"
              unit={'đ'}
            />
          </InputContainer>
          <InputContainer
            text={'Thời gian khuyến mãi'}
            className={'formNormal'}
            important={true}
          >
            {/* <InputForm
              classesWrapper={cx('input')}
              placeholder={'Ngày bắt đầu - ngày kết thúc'}
              iconright={<CalendarIcon />}
            /> */}
            <div className={cx('containerDate')}>
              <DatePicker
                className={cx('data_left')}
                selected={startDate}
                onChange={(date) => {
                  handleDataFinal({key: 'beginDate', value: date});
                }}
              />
              <span>Đến</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  handleDataFinal({key: 'endDate', value: date});
                }}
              />
              <div style={{marginTop: '12px'}}></div>
            </div>
            <ButtonChange
              status={false}
              data={[
                'Ngừng bán',
                'Đến ngày hiệu lực sẽ tự động bật. Tắt nếu muốn dừng khuyến mãi',
              ]}
            />
          </InputContainer>
          <InputContainer text={'Số lượng tồn kho'} className={'formNormal'}>
            <InputForm
              classesWrapper={cx('input')}
              placeholder={'Số lượng'}
              onHandleBasicInfor={handleDataFinal}
              keyText="quanlity"
              value={100}
            />
          </InputContainer>
          <InputContainer text={'Khối lượng'} className={'formNormal'}>
            <InputForm
              classesWrapper={cx('input')}
              placeholder={'Từ 10 - 150.000g'}
              onHandleBasicInfor={handleDataFinal}
              keyText="weight"
              unit={'g'}
            />
          </InputContainer>
          <InputContainer text={'Kích thước đóng gói'} important={true}>
            <div className={cx('listInput')}>
              <InputForm
                classesWrapper={cx('smallwrapper', 'input')}
                placeholder={'Dài '}
                onHandleBasicInfor={handleDataFinal}
                keyText="length"
                unit={'cm'}
              />
              <InputForm
                classesWrapper={cx('smallwrapper', 'input')}
                placeholder={'Rộng'}
                onHandleBasicInfor={handleDataFinal}
                keyText="width"
                unit={'cm'}
              />
              <InputForm
                classesWrapper={cx('smallwrapper', 'input')}
                placeholder={'Cao'}
                onHandleBasicInfor={handleDataFinal}
                keyText="height"
                unit={'cm'}
              />
            </div>
          </InputContainer>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BasicInfor;
