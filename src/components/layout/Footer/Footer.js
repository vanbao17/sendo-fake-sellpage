import classNames from 'classnames/bind'
import styles from "./Footer.module.scss"
const cx = classNames.bind(styles)
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('footerLeft')}>
        <img src='https://media3.scdn.vn/img4/2020/04_23/ymBl1oAoEhjY1O6VGsLd.png'></img>
        <div className={cx("infor")}>
          <p>Công ty Cổ phần Công nghệ Sen Đỏ</p>
          <span>Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận,</span>
          <span>KCX Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</span>
          <span>Số ĐKKD: 0312776486</span>
        </div>
      </div>
      <div className={cx('footerRight')}>
        <a><img src='https://media3.scdn.vn/img4/2022/06_08/1lFg9Uwn2FBAsKeVCGVk.png'></img></a>
        <a><img src='https://media3.scdn.vn/img4/2022/06_08/gb4KWuzBjqG6edEmfnGF.png'></img></a>
        <a><img src='https://media3.scdn.vn/img4/2022/06_08/kun6HROKp7f12SCrCVEJ.png'></img></a>
      </div>
    </div>
  )
}

export default Footer
