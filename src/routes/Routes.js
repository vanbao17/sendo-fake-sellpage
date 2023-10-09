import Config from '../configs/Configs';
import ContactSendo from '../components/Pages/Contact/ContactSendo';
import ContactShiper from '../components/Pages/Contact/ContactShiper';
import Shop from '../components/Pages/Shop/Shop';
import Log from '../components/Pages/Log/Log';
import Newfeeds from '../components/Pages/Newfeeds/Newfeeds';
import Events from '../components/Pages/News/Events';
import Notification from '../components/Pages/News/Notification';
import Trend from '../components/Pages/News/Trend';
import Policy from '../components/Pages/Policy/Policy';
import HeaderNoneCate from '../components/layout/Header/HeaderNoneCate';
import CreateInforShop from '../components/Pages/CreateInforShop/CreateInforShop';
import TypeShop from '../components/Pages/TypeShop/TypeShop';
import Products from '../components/Pages/Products/Products';
const publicRoutes = [
  {
    path: Config.login,
    component: Log,
    layout: HeaderNoneCate,
    posittion: true,
  },
  {
    path: Config.taoshop,
    component: TypeShop,
    layout: HeaderNoneCate,
    posittion: true,
  },
  {
    path: Config.taoinforshop,
    component: CreateInforShop,
    layout: HeaderNoneCate,
    posittion: true,
  },
  {
    path: Config.bangtin,
    component: Newfeeds,
  },
  {
    path: Config.lienhe.lienhesendo,
    component: ContactSendo,
  },
  {
    path: Config.lienhe.nhavanchuyen,
    component: ContactShiper,
  },
  {
    path: Config.shopuytin,
    component: Shop,
  },
  // {
  //     path:Config.huongdan.chiasekinhnghiem,
  //     component:Experience
  // },
  // {
  //     path:Config.huongdan.huongdantinhnang,
  //     component:Feature
  // },
  {
    path: Config.tintuc.sukien,
    component: Events,
  },
  {
    path: Config.tintuc.thongbao,
    component: Notification,
  },
  {
    path: Config.tintuc.xuhuong,
    component: Trend,
  },
  {
    path: Config.chinhsach,
    component: Policy,
  },
  {
    path: Config.sanpham,
    component: Products,
  },
];
export default publicRoutes;
