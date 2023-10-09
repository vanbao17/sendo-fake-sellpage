import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import {useState, useRef} from 'react';
import 'tippy.js/dist/tippy.css'; // Import CSS của Tippy
import 'tippy.js/animations/scale.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function InputForm({
  text,
  name,
  type,
  placeholder,
  classname,
  value,
  onCallback,
  tippyData,
  icon,
}) {
  const classes = cx(
    classname ?? '',
    'input',
    icon != null ? 'text-indent' : '',
  );
  const [showTippy, setshowTippy] = useState(false);
  const [valueDropbox, setvalueDropbox] = useState(
    tippyData != undefined ? tippyData[0] : '',
  );
  const divRef = useRef();
  const handelCallback = (e) => {
    onCallback(e.target.value);
  };

  return (
    <div className={cx('wrapper', classes)}>
      <div className={cx('container')}>
        <label htmlFor={name}>{text}</label>
        {tippyData ? (
          <TippyHeadless
            interactive={true}
            offset={[0, 5]}
            delay={[100, 10]}
            placement="bottom"
            visible={showTippy}
            render={() => (
              <div className={cx('containerTippy')}>
                <ul>
                  {tippyData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setvalueDropbox(item);
                          setshowTippy(!showTippy);
                          divRef.current.innerHtml = item;
                        }}
                      >
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          >
            <div
              className={cx('inputTippy')}
              onClick={() => {
                setshowTippy(!showTippy);
              }}
            >
              {icon}
              <div
                ref={divRef}
                className={cx(
                  'cbb',
                  showTippy == true ? 'shadowBox' : '',
                  icon != null ? 'text-indent' : '',
                )}
              >
                {valueDropbox}
              </div>
              {/* <input onChange={handelCallback} id={name} name={name} type={type??'text'} placeholder={placeholder} className={classes} value={valueDropbox.length>0?valueDropbox:value}/>  */}
              <FontAwesomeIcon
                className={cx('icon')}
                icon={showTippy ? faChevronUp : faChevronDown}
              />
            </div>
          </TippyHeadless>
        ) : (
          <form>
            {icon}
            <input
              onChange={onCallback ? handelCallback : null}
              id={name}
              name={name}
              type={type ?? 'text'}
              placeholder={placeholder}
              className={classes}
              value={value}
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default InputForm;
