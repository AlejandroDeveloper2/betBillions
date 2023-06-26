import { ImageProps } from "../../../types";

/*styles */
import { Image as ImageStyled } from "./Image.style";

const Image = (props: ImageProps): JSX.Element => {
  const { source, alt, dimensions } = props;

  return (
    <ImageStyled
      src={source}
      alt={alt}
      loading="lazy"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default Image;
