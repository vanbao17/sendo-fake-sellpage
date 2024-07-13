import {Context} from './Context';
import {useEffect, useState} from 'react';
function Provider({children}) {
  const [hidemenu, sethidemenu] = useState(false);
  const [icon, seticon] = useState(true);
  const [menufix, setmenufix] = useState(false);
  const [listCate, setlistCate] = useState(false);
  const [chosseCate, setchosseCate] = useState([]);
  const [phoneUser, setphoneUser] = useState('');
  const [chatBox, setchatBox] = useState(false);
  useEffect(() => {
    const fixedMenu = () => {
      if (document.documentElement.scrollTop > 50) {
        setmenufix(true);
      } else {
        setmenufix(false);
      }
    };
    window.addEventListener('scroll', fixedMenu);
    return () => {
      window.removeEventListener('scroll', fixedMenu);
    };
  });
  return (
    <Context.Provider
      value={{
        hidemenu,
        sethidemenu,
        icon,
        seticon,
        menufix,
        setmenufix,
        listCate,
        setlistCate,
        chosseCate,
        setchosseCate,
        phoneUser,
        setphoneUser,
        chatBox,
        setchatBox,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Provider;
