import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import image from '~/assets/img';
import styles from './Header.module.scss';

const cx = className.bind(styles);

console.log(image);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search user and videos" spellCheck={false} />
                    {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading-spiner')} icon={faSpinner} /> */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action-header')}></div>
            </div>
        </header>
    );
}

export default Header;
