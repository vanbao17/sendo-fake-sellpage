import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import {useState, useRef} from 'react';
import 'tippy.js/dist/tippy.css'; // Import CSS của Tippy
import 'tippy.js/animations/scale.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {SearchIcon} from '../../../Icons';
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
  iconright,
  classesWrapper,
  banFocus,
  search,
  unit,
  onSelectDropBox,
}) {
  const classes = cx(
    classname ?? '',
    'input',
    icon != null ? 'text-indent' : '',
  );
  const [showTippy, setshowTippy] = useState(false);
  const [valueDropbox, setvalueDropbox] = useState(
    // item.value != undefined ? item.value : item,
    tippyData != undefined
      ? tippyData[0].value != undefined
        ? tippyData[0].value
        : tippyData[0]
      : '',
  );
  const divRef = useRef();
  const handelCallback = (e) => {
    onCallback(e.target.value);
  };
  const handleSelected = (data) => {
    onSelectDropBox(data);
  };
  return (
    <div className={cx('wrapper', classesWrapper, classname)}>
      <div className={cx('container')}>
        <label htmlFor={name}>{text ?? ''}</label>
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
                          //handleSelected(item.value);
                          onSelectDropBox(item);
                          setvalueDropbox(
                            item.value != undefined ? item.value : item,
                          );
                          setshowTippy(!showTippy);
                          divRef.current.innerHtml =
                            item.value != undefined ? item.value : item;
                        }}
                      >
                        <span>
                          {item.value != undefined ? item.value : item}
                        </span>
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
            {iconright ? (
              <div className={cx('icon', 'position')}>{iconright}</div>
            ) : (
              <></>
            )}

            {unit ? (
              <div className={cx('unit', 'position')}>{unit}</div>
            ) : (
              <></>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default InputForm;
