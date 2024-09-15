import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function Media() {
    // https://api.hydrax.net/cc845a7b8ced936b573c5586d3856e5c/list
    const [medias, setMedias] = useState({ items: [] });
    useEffect(() => {
        setMedias(require('../../../assets/json/list2.json'));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {medias.items.map((media, index) => {
                    return (
                        <Link
                            to={`/media/${media.slug}`}
                            className={cx('media')}
                            key={index}
                        >
                            {/* <iframe
                                src={`https://short.ink/${media.slug}`}
                                frameBorder="0"
                                allowFullScreen
                                title={index}
                            ></iframe> */}

                            <Image src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Media;
