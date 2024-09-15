
function IframeWrapper({ src, ...props }) {
    return (
        <iframe
            id="video-frame"
            src={src}
            scrolling="no"
            frameBorder="0"
            style={{
                maxWidth: 640,
                width: '100%',
                overflow: 'auto',
            }}
            title={src}
            {...props}
        ></iframe>
    );
}

export default IframeWrapper;