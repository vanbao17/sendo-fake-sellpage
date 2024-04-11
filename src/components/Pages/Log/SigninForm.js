import classNames from 'classnames/bind';
import styles from './Log.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useState, useRef, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Firebase from './Firebase';
import {RecaptchaVerifier, getAuth, signInWithPhoneNumber} from 'firebase/auth';
import {Context} from '../../../store/Context';
const cx = classNames.bind(styles);
function SigninForm() {
  const {phoneUser, setphoneUser} = useContext(Context);

  const [showPass, setshowPasss] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('INPUT_PHONE_NUMBER');
  const [result, setResult] = useState('');
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(false);

  const auth = Firebase.auth;
  const navigate = useNavigate();
  const refInputPass = useRef();
  const refPhoneNum = useRef();

  useEffect(() => {
    if (phoneNumber.length >= 1) refPhoneNum.current.disabled = false;
    else refPhoneNum.current.disabled = true;
  });
  const signin = () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            console.log('recaptcha resolved..');
          },
        },
      );
      signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
        .then((result) => {
          setResult(result);
          setStep('VERIFY_OTP');
          alert('code sent');
        })
        .catch((err) => {
          alert(err);
          window.location.reload();
        });
    } catch (error) {
      console.log('error sending otp ' + error);
    }
  };
  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: phoneNumber, pass: ''}),
    };
    fetch('http://localhost:3001/api/v1/get-shop', options)
      .then((response) => response.json())
      .then((dt) => setdata(dt))
      .catch((err) => {
        if (err) throw err;
      });
  }, [phoneNumber]);
  useEffect(() => {
    if (step == 'VERIFY_SUCCESS') {
      const filData = data.filter((item) => item.phone == phoneNumber);
      if (filData.length == 0) {
        const acc = {
          phone: phoneNumber,
          pass: refInputPass.current.value,
        };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(acc),
        };
        fetch('http://localhost:3001/api/v1/create-shop', options)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              setphoneUser(phoneNumber);
              navigate('/tao-shop');
            }
          })
          .catch((err) => {
            if (err) throw err;
          });
      } else {
        alert('trung so dien thoai roi');
      }
    }
  }, [step]);
  const ValidateOtp = () => {
    setstate(!state);
    if (otp === null) return;
    result
      .confirm(otp)
      .then((result) => {
        setStep('VERIFY_SUCCESS');
      })
      .catch((err) => {
        alert('Incorrect code');
      });
  };
  return (
    <form action="POST" method="">
      <form method="POST" className={cx('phoneUser')}>
        <div id="recaptcha-container"></div>
        <div className={cx('wrapp')}>
          <label htmlFor="phonenum">Số điện thoại</label>
          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="text"
            id="phonenum"
            className={cx('phonenum')}
            name="phonenum"
            placeholder="Nhập SĐT gồm 10 chữ số"
          />
        </div>
        <div className={cx('btnCode')}>
          <button></button>
          <span
            ref={refPhoneNum}
            className={cx(phoneNumber.length >= 1 ? 'btn' : 'hide')}
            onClick={signin}
          >
            Gửi mã xác thực
          </span>
        </div>
      </form>
      <div className={cx('codeAccept', 'wrapp')}>
        <label htmlFor="code">Mã xác thực</label>
        <input
          type="text"
          id="code"
          className={cx('code')}
          name="code"
          placeholder="Gồm 6 chữ số từ SĐT đã đăng ký"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />
      </div>
      <div className={cx('passUser')}>
        <label htmlFor="password">Mật khẩu</label>
        <div className={cx('containerPass')}>
          <input
            type={showPass === false ? 'password' : 'text'}
            ref={refInputPass}
            id="password"
            name="password"
            className={cx('password')}
            placeholder="Tạo mật khẩu"
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
      </div>
      <div className={cx('rule')}>
        <span>
          Bằng việc Đăng ký, bạn đã đồng ý với Sendo về{' '}
          <a href="#">Điều khoản dịch vụ</a> &{' '}
          <a href="#">Chính sách bán hàng</a>.
        </span>
      </div>
      <div className={cx('btnlogin')}>
        {/* <button></button> */}
        <span
          onClick={() => {
            ValidateOtp();
          }}
        >
          Đăng ký
        </span>
      </div>
      <div className={cx('other')}>
        <div className={cx('containerOr')}>
          <span>Hoặc</span>
        </div>
        <div className={cx('btnUseAccOther')}>
          <button>
            <img src="https://media3.scdn.vn/img4/2020/10_07/TSN86pxkwQj8Wm8e2guz.png"></img>
            <span>Đăng ký bằng tài khoản mua hàng</span>
          </button>
        </div>
      </div>
      <span className={cx('btnTo', 'btnToLogin')}>
        Bạn đã có tài khoản ? <a href="#">Đăng nhập ngay </a>
      </span>
    </form>
  );
}

export default SigninForm;
