
// Error-pages
import ErrorPage1 from '../Components/Pages/Error/Error_page1';
import ErrorPage2 from '../Components/Pages/Error/Error_page2';
import ErrorPage3 from '../Components/Pages/Error/Error_page3';
import ErrorPage4 from '../Components/Pages/Error/Error_page4';
import ErrorPage5 from '../Components/Pages/Error/Error_page5';

// Login 
import LoginSimple from '../Components/Pages/Auth/Login';
import LoginOne from '../Components/Pages/Auth/LoginOne';
import LoginTwo from '../Components/Pages/Auth/LoginTwo';
import LoginValidation from '../Components/Pages/Auth/LoginValidation';
import LoginTooltip from '../Components/Pages/Auth/LoginTooltip';
import LoginSweetalert from '../Components/Pages/Auth/LoginSweetalert';

//Register pages
import RegisterSimple from '../Components/Pages/Auth/RegisterSimple';
import RegisterBgImg from '../Components/Pages/Auth/RegisterBgImg';
import RegisterVideo from '../Components/Pages/Auth/RegisterVideo';
import UnlockUser from '../Components/Pages/Auth/UnlockUser';
import ForgotPwd from '../Components/Pages/Auth/ForgetPwd';
import ResetPwd from '../Components/Pages/Auth/ResetPassword';
import Maintenance from '../Components/Pages/Auth/Maintenance';

//ComingSoon Pages
import Comingsimple from '../Components/Pages/CommingSoon/ComingSimple';
import Comingwithbgvideo from '../Components/Pages/CommingSoon/ComingwithbgVideo';
import ComingbgImage from '../Components/Pages/CommingSoon/ComingSoonbgImg';

export const authRoutes = [  
  //Login and Register pages
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-simple`, Component: <LoginSimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-bg-img`, Component: <LoginOne /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-img`, Component: <LoginTwo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-validation`, Component: <LoginValidation /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-tooltip`, Component: <LoginTooltip /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login-sweetalert`, Component: <LoginSweetalert /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/register-simple`, Component: <RegisterSimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/register-bg-img`, Component: <RegisterBgImg /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/sign-up-two`, Component: <RegisterVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/unlock-user`, Component: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/forget-pwd`, Component: <ForgotPwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/reset-pwd`, Component: <ResetPwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/maintenance`, Component: <Maintenance /> },
 
  // coming soon
  { path: `${process.env.PUBLIC_URL}/pages/comingsimple/comingsoon`, Component: <Comingsimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsimple/coming-bg-video`, Component: <Comingwithbgvideo /> },  
  { path: `${process.env.PUBLIC_URL}/pages/comingsimple/coming-bg-img`, Component: <ComingbgImage /> },

  //Error
  { path: `${process.env.PUBLIC_URL}/pages/error/error-page1`, Component: <ErrorPage1/> },
  { path: `${process.env.PUBLIC_URL}/pages/error/error-page2`, Component: <ErrorPage2/> },
  { path: `${process.env.PUBLIC_URL}/pages/error/error-page3`, Component: <ErrorPage3/> },
  { path: `${process.env.PUBLIC_URL}/pages/error/error-page4`, Component: <ErrorPage4/> },
  { path: `${process.env.PUBLIC_URL}/pages/error/error-page5`, Component: <ErrorPage5/> },

];
