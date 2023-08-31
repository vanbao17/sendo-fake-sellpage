import Config from "../configs/Configs"
import Trend from "../components/layout/components/News/Trend"
import Events from "../components/layout/components/News/Events"
import Notification from "../components/layout/components/News/Notification"
import ContactSendo from "../components/layout/components/Contact/ContactSendo"
import ContactShiper from "../components/layout/components/Contact/ContactShiper"
import Feature from "../components/layout/components/Guide/Feature"
import Experience from "../components/layout/components/Guide/Experience"
import Profile from "../components/layout/components/Profile/Profile"
import Policy from "../components/layout/components/Policy/Policy"
import Shop from "../components/layout/components/Shop/Shop"
const publicRoutes = [
    {
        path:Config.bangtin,
        conponent:News
    },
    {
        path:Config.lienhe.lienhesendo,
        conponent:ContactSendo
    },
    {
        path:Config.lienhe.nhavanchuyen,
        conponent:ContactShiper
    },
    {
        path:Config.shopuytin,
        conponent:Shop
    },
    {
        path:Config.huongdan.chiasekinhnghiem,
        conponent:Experience 
    },
    {
        path:Config.huongdan.huongdantinhnang, 
        conponent:Feature
    },
    {
        path:Config.tintuc.sukien, 
        conponent:Events
    },
    {
        path:Config.tintuc.thongbao, 
        conponent:Notification             
    }, 
    {
        path:Config.tintuc.xuhuong,
        conponent:Trend
    },
    {
        path:Config.chinhsach,
        conponent:Policy
    }
]
export default publicRoutes