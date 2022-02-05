const ImageLoader = ({ src, width, height }) => {
  return `https://images.pexels.com/photos/${src}?auto=compress&cs=tinysrgb&dpr=2&h=${height}&w=${width}`;
};

export default ImageLoader;
