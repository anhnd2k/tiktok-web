import className from 'classnames/bind';
import styles from './SideBar.modul.scss';

const cx = className.bind(styles);
function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <h2>SideBar layout</h2>
        </div>
    );
}

export default SideBar;
