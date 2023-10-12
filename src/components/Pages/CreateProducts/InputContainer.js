import classNames from 'classnames/bind';
import styles from './CreateProducts.module.scss';
import {WarningIcon} from '../../Icons';
const cx = classNames.bind(styles);

function InputContainer({
  children,
  text,
  important,
  warning,
  textQuanlity,
  className,
}) {
  return (
    <div className={cx('ContainerInput')}>
      <span>
        {text}
        {important ? '*' : ''}
      </span>
      <div className={cx('content', className)}>
        {children}
        {textQuanlity ? <span className={cx('textQuanlity')}>0</span> : <></>}
        {warning ? (
          <span className={'warning'}>
            <WarningIcon className={cx('icon')} />
            Tên sản phẩm không được để trống.
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default InputContainer;
