import classNames from 'classnames/bind';
import styles from './Log.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState, useRef, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Context} from '../../../store/Context';
import Cookies from 'js-cookie';
const cx = classNames.bind(styles);
function LoginForm() {
  const [showPass, setshowPasss] = useState(false);
  const [valueInput, setvalueInput] = useState({mail: NaN, pass: NaN});
  const [dataShop, setdataShop] = useState();
  let errMail = true;
  let errPass = true;
  valueInput.mail.length < 1 ? (errMail = false) : (errMail = true);
  valueInput.pass.length < 6 ? (errPass = false) : (errPass = true);
  const navigate = useNavigate();
  const refPhone = useRef();
  const refPass = useRef();
  const {phoneUser, setphoneUser} = useContext(Context);

  const checkAccount = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valueInput),
    };
    fetch('https://sdvanbao17.id.vn/api/v1/get-shop', options)
      .then((response) => response.json())
      .then((dt) => {
        if (dt.length !== 0) {
          const inforAcc = dt[0];
          sessionStorage.setItem('phone', inforAcc.phone);
          if (
            inforAcc.phone == refPhone.current.value &&
            inforAcc.password == refPass.current.value
          ) {
            const optionsgetshop = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({id: inforAcc.idShop}),
            };
            fetch(
              `https://sdvanbao17.id.vn/api/v1/get-shopSendmail`,
              optionsgetshop,
            )
              .then((response) => response.json())
              .then((data) => {
                if (data.length !== 0) {
                  const newData = data.filter(
                    (it) => it.idShop == inforAcc.idShop,
                  );
                  if (newData.length !== 0) {
                    navigate('/bang-tin');
                  }
                } else {
                  fetch(
                    `https://sdvanbao17.id.vn/api/v1/get-shopSendo`,
                    optionsgetshop,
                  )
                    .then((response) => response.json())
                    .then((data1) => {
                      if (data1.length !== 0) {
                        const newData1 = data1.filter(
                          (it1) => it1.idShop == inforAcc.idShop,
                        );
                        if (newData1.length !== 0) {
                          navigate('/bang-tin');
                        }
                      } else {
                        navigate('/tao-shop', {state: {dt: inforAcc.idShop}});
                      }
                    });
                }
              });
          } else {
            alert('sai mat khau');
          }
        } else {
          // navigate('/tao-shop', {state: {dt: inforAcc.idShop}});
        }
      })
      .catch((err) => {
        if (err) throw err;
      });

    setvalueInput({mail: refPhone.current.value, pass: refPass.current.value});
  };
  // if (dataShop.length !== 0) {
  //   const filData = dataShop.filter((item) => item.phone == valueInput.mail);
  //   if (filData.length == 1) {
  //     Cookies.set('phone', refPhone.current.value, {expires: 7});
  //     navigate('/tao-shop', {state: {dt: dataShop[0].idShop}});
  //   }
  // }

  // if (dataSendo.length == 0 && dataSenmail.length !== 0) {
  //   navigate('/bang-tin');
  // } else {
  //   navigate('/bang-tin');
  // }
  // if (dataSendo.length == 0 && dataSenmail.length == 0) {
  //   navigate('/tao-shop');
  // }

  // useEffect(() => {
  //   if (dataShop !== undefined) {
  //     if (
  //       dataShop.phone == refPhone.current.value &&
  //       dataShop.password == refPass.current.value
  //     ) {
  //       const options = {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({id: dataShop[0].idShop}),
  //       };
  //       fetch(`https://sdvanbao17.id.vn/api/v1/get-shopSendmail`, options)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data.length !== 0) {
  //             const newData = data.filter(
  //               (it) => it.idShop == dataShop[0].idShop,
  //             );
  //             if (newData.length !== 0) {
  //               navigate('/bang-tin');
  //             }
  //           } else {
  //             fetch(`https://sdvanbao17.id.vn/api/v1/get-shopSendo`, options)
  //               .then((response) => response.json())
  //               .then((data1) => {
  //                 if (data1.length !== 0) {
  //                   const newData1 = data1.filter(
  //                     (it1) => it1.idShop == dataShop[0].idShop,
  //                   );
  //                   if (newData1.length !== 0) {
  //                     navigate('/bang-tin');
  //                   }
  //                 } else {
  //                   navigate('/tao-shop');
  //                 }
  //               });
  //           }
  //         });
  //     } else {
  //       alert('sai mat khau');
  //     }
  //   }
  // }, []);

  // useEffect(() => {}, [valueInput]);
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
      <div
        className={cx('btnlogin')}
        onClick={() => {
          checkAccount();
        }}
      >
        <span>Đăng nhập</span>
      </div>
      <span className={cx('btnTo', 'btnToSignIn')}>
        Bạn chưa có tài khoản ? <a href="#">Đăng ký ngay </a>
      </span>
    </form>
  );
}

export default LoginForm;
