import classNames from 'classnames/bind';
import styles from './Log.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
const cx = classNames.bind(styles);
function LoginForm() {
  const [showPass, setshowPasss] = useState(false);
  const [valueInput, setvalueInput] = useState({mail: NaN, pass: NaN});
  let errMail = true;
  let errPass = true;
  valueInput.mail.length < 1 ? (errMail = false) : console.log(123);
  valueInput.pass.length < 6 ? (errPass = false) : console.log(123);
  const navigate = useNavigate();
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
          onChange={(e) => {
            setvalueInput({mail: e.target.value, pass: valueInput.pass});
          }}
          type="text"
          id="emailsdt"
          name="emailsdt"
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
            onChange={(e) => {
              setvalueInput({mail: valueInput.mail, pass: e.target.value});
            }}
            type={showPass === false ? 'password' : 'text'}
            id="password"
            name="password"
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
        <button>
          <span
            onClick={() => {
              navigate('/tao-shop');
            }}
          >
            Đăng nhập
          </span>
        </button>
      </div>
      <span className={cx('btnTo', 'btnToSignIn')}>
        Bạn chưa có tài khoản ? <a href="#">Đăng ký ngay </a>
      </span>
    </form>
  );
}

export default LoginForm;
