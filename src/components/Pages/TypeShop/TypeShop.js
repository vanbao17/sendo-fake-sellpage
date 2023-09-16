import classNames from "classnames/bind";
import styles from "./TypeShop.module.scss"
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import logo from "../../../Assets/Logo";
import ItemTick from "./ItemTick";
const cx = classNames.bind(styles)

function TypeShop() {
    return (
        <div className={cx("wrapper")}>
            <Header notNav/>
            <div className={cx("container")}>
                <h2>Bạn muốn kinh doanh loại Shop nào?</h2>
                <h3>Vui lòng chọn loại Shop bạn muốn mở. Một tài khoản chỉ mở được một trong hai loại Shop.</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <div className={cx("titleImage")}>
                                    <div>
                                        <img src={logo.shopsendo}></img>
                                        <span>Shop Sendo</span>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className={cx("titleImage")}>
                                    <div>
                                        <img src={logo.shopmail}></img>
                                        <span>Shop SenMall</span>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Miễn phí mở Shop</p></td>
                            <td><ItemTick type={true}/></td>
                            <td><ItemTick type={true}/></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Miễn phí mở Shop</p>
                                <span>Giấy phép kinh doanh và chứng từ thương hiệu, ngành hàng</span>
                            </td>
                            <td><ItemTick type={false}/></td>
                            <td><ItemTick type={true}/></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Cấp độ</p>
                            </td>
                            <td>
                                <span>Thường</span>    
                                <span>Uy Tín Cấp 1, 2, 3</span>    
                            </td>
                            <td>
                                <span>Thường</span>    
                                <span>Uy Tín Cấp 1, 2, 3</span>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Cấp độ</p>
                            </td>
                            <td>
                                <strong>Shop Thường</strong>    
                                <strong>Shop Uy Tín</strong>    
                            </td>
                            <td>
                                <strong>Shop Thường</strong>    
                                <strong>Shop Uy Tín</strong>     
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <p>Các quyền lợi khác</p>
                            </td>
                            <td>
                                <span>Shop Thường</span>    
                                <span>Shop Uy Tín</span>    
                            </td>
                            <td>
                                <span>Shop Thường</span>    
                                <span>Shop Uy Tín</span>     
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td ></td>
                            <td >
                                <a><p>Tạo shop Sendo</p></a>
                            </td>
                            <td >
                                <a><p>Tạo shop SenMail</p></a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default TypeShop;