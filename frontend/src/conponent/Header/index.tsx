import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Slices/Auth";
import { useAppDispatch, useAppSelector } from "../../app/hook";

type Props = {};

const Header = (props: Props) => {
  const data = useAppSelector((state: any) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    setTimeout(() => {
      navigate("/login")
    }, 2000);
  }
  return (
    <div>
      <header className="header-area header-sticky mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">

                <a href="/" className="logo">
                  <img src="src/assets/images/logo.png"/>
                </a>

                <ul className="nav">
                  <li className="scroll-to-section"><a href="home" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#men">Men's</a></li>
                  <li className="scroll-to-section"><a href="#women">Women's</a></li>
                  <li className="scroll-to-section"><a href="#kids">Kid's</a></li>
                  <li className="submenu">
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li><a href="about">About Us</a></li>
                      <li><a href="products">Products</a></li>
                      <li><a href="single-product.html">Single Product</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </li>
                  <li className={`${data.isLogin ? "submenu" : ""} flex items-center`}>
                    {data.isLogin === true ?
                      <>
                        <a href="javascript:;">
                          <img className="max-w-[20px] mt-2" src={`${data?.user?.avatar}`} alt="" />

                        </a>
                        <ul>
                          <li><a href="#" onClick={handleLogout}>Đăng xuất</a></li>
                        </ul>
                      </>
                      :
                      <Link to='/login'>Đăng nhập</Link>
                    }
                  </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
