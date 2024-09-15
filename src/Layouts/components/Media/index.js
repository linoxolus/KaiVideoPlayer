import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function Media() {
    const [slug, setSlug] = useState(window.location.pathname);
    useEffect(() => {
        setSlug(window.location.pathname.split('/')[2]);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('media')}>
                    <iframe
                        src={`https://short.ink/${slug}`}
                        frameBorder="0"
                        allowFullScreen
                        // width="640"
                        // height="360"
                        title={slug}
                        className={cx('video-frame')}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Media;
