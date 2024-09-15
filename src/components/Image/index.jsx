import images from '../../assets/img'

function Image({src = images.defaultImage, alt = 'img', ...props}) {
    return <img src={src} alt={alt} {...props} />;
}

export default Image;
