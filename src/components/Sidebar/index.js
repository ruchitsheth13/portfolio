import { Link } from 'react-router-dom';
import './index.scss';
import LogoR from '../../assets/images/logo-r.jpg';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoR} alt='logo' />
            <img src={LogoSubtitle} alt='ruchit' />
        </Link>
    </div>
)

export default Sidebar
