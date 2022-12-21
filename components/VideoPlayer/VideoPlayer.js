React, { useEffect, useRef } from 'react';
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VidPlayer = React.memo(({ videoRef }) => {
  return (
    <CloudinaryContext cloud_name="codedog">
      <Video
        publicId="videoplayer-demo"
        width="100%"
        controls
        innerRef={videoRef}
      />
    </CloudinaryContext>
  );
});

const VideoPlayer = () => {
  const videoRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inView === true) {
      videoRef.current.play();
    }
  });

  return (
    <div ref={ref}>
      <VidPlayer videoRef={videoRef} />
    </div>
  );
};

export default VideoPlayer;
