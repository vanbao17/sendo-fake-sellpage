import classNames from 'classnames/bind';
import styles from './Defaultlaytout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import {useContext} from 'react';
import {Context} from '../../../store/Context';
import BlackPlace from './BlackPlace';
const cx = classNames.bind(styles);
function Defaultlaytout({children}) {
  const {hidemenu, sethidemenu} = useContext(Context);
  const {listCate, setlistCate} = useContext(Context);
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx(hidemenu == false ? 'content' : 'wrappContent')}>
          {children}
          <Footer />
        </div>
      </div>
      {listCate == true ? <BlackPlace /> : <></>}
    </div>
  );
}

export default Defaultlaytout;
