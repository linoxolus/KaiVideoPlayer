import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import styles from './DefaultLayouts.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('nav')}>
                    <Link to="/">
                        <h1>Video</h1>
                    </Link>
                    <div className={cx('avatar')}>
                        <Image />
                    </div>
                </div>
                <div className={cx('action')}></div>
            </div>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
