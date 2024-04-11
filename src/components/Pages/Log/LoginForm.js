import classNames from 'classnames/bind';
import styles from './Log.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState, useRef, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Context} from '../../../store/Context';

const cx = classNames.bind(styles);
function LoginForm() {
  const [showPass, setshowPasss] = useState(false);
  const [valueInput, setvalueInput] = useState({mail: NaN, pass: NaN});
  const [data, setdata] = useState([]);
  let errMail = true;
  let errPass = true;
  valueInput.mail.length < 1 ? (errMail = false) : (errMail = true);
  valueInput.pass.length < 6 ? (errPass = false) : (errPass = true);
  const navigate = useNavigate();
  const refPhone = useRef();
  const refPass = useRef();
  const {phoneUser, setphoneUser} = useContext(Context);
  const checkAccount = () => {
    setvalueInput({mail: refPhone.current.value, pass: refPass.current.value});
  };
  if (data.length != 0) {
    const filData = data.filter((item) => item.phone == valueInput.mail);
    if (filData.length == 1) {
      setphoneUser(refPhone.current.value);
      navigate('/tao-shop');
    }
  }
  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valueInput),
    };
    fetch('http://localhost:3001/api/v1/get-shop', options)
      .then((response) => response.json())
      .then((dt) => setdata(dt))
      .catch((err) => {
        if (err) throw err;
      });
  }, [valueInput]);
  return (
    <form method="GET">
      <div className={cx('mailUser')}>
        <label
          htmlFor="emailsdt"
          className={cx(errMail == false ? 'errLabel' : '')}
        >
          {' '}
          Nhập Email hoặc số điện thoại
        </label>
        <input
          type="text"
          id="emailsdt"
          name="emailsdt"
          ref={refPhone}
          className={cx('emailsdt', errMail == false ? 'errInput' : '')}
          placeholder="Email hoặc số điện thoại của bạn"
        />
        {errMail == false ? (
          <span className={cx('mailErr', 'err')}>Vui lòng không bỏ trống</span>
        ) : (
          <></>
        )}
      </div>
      <div className={cx('passUser')}>
        <label
          htmlFor="password"
          className={cx(errPass == false ? 'errLabel' : '')}
        >
          Mật khẩu
        </label>
        <div className={cx('containerPass')}>
          <input
            type={showPass === false ? 'password' : 'text'}
            id="password"
            name="password"
            ref={refPass}
            className={cx('password', errPass == false ? 'errInput' : '')}
            placeholder="Nhập mật khẩu của bạn"
          />
          {showPass == false ? (
            <div
              onClick={() => {
                setshowPasss(true);
              }}
              className={cx('iconEye')}
            >
              <FontAwesomeIcon icon={faEye} />
            </div>
          ) : (
            <div
              onClick={() => {
                setshowPasss(false);
              }}
              className={cx('iconEye')}
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          )}
        </div>
        {errPass == false ? (
          <span className={cx('passErr', 'err')}>
            Vui lòng nhập mật khẩu từ 6 ký tự.
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className={cx('actionuser')}>
        <span></span>
        <a href="#">Quên mật khẩu</a>
      </div>
      <div className={cx('btnlogin')}>
        <span
          onClick={() => {
            checkAccount();
          }}
        >
          Đăng nhập
        </span>
      </div>
      <span className={cx('btnTo', 'btnToSignIn')}>
        Bạn chưa có tài khoản ? <a href="#">Đăng ký ngay </a>
      </span>
    </form>
  );
}

export default LoginForm;
