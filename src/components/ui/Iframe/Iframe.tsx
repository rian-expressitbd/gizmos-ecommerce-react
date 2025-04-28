type IframeProps = {
  width: string;
  height: string;
  src: string;
  title: string;
};

export default function Iframe({ width, height, src, title }: IframeProps) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
