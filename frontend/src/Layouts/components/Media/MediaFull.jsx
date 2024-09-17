import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function MediaFull() {
    // https://api.hydrax.net/cc845a7b8ced936b573c5586d3856e5c/list
    const [medias, setMedias] = useState({ items: [] });
    useEffect(() => {
        fetch('http://localhost:2008/list')
            .then((res) => res.json())
            .then((res) => {
                setMedias(res);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {medias.items.map((media, index) => {
                    return (
                        <iframe
                            src={`https://short.ink/${media.slug}`}
                            frameBorder="0"
                            allowFullScreen
                            title={index}
                        ></iframe>
                    );
                })}
            </div>
        </div>
    );
}

export default MediaFull;
