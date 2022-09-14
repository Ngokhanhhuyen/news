import classNames from 'classnames/bind';
import Search from '../../../../Pages/Search';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img
                    className={cx('logo')}
                    src={`http://localhost:8081/image/monkey1.png`}
                    alt=""
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                />
                <div className={cx('listPage')}>
                    <a className={cx('list-Item')} href="http://localhost:3000">
                        Home
                    </a>
                    <a className={cx('list-Item')} href="http://google.com">
                        Contact
                    </a>
                    <a className={cx('list-Item')} href="http://google.com">
                        Blog
                    </a>
                </div>
            </div>
            <div className="right">
                <Search />
            </div>
        </div>
    );
}

export default Header;
