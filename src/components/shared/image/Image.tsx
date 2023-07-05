import { ImageProps } from "../../../types";

/*styles */
import { Image as ImageStyled } from "./Image.style";

const Image = (props: ImageProps): JSX.Element => {
  const { source, alt, size } = props;

  return (
    <ImageStyled
      src={source}
      alt={alt}
      loading="lazy"
      lg={{
        width: size.lg,
        height: size.lg,
      }}
      md={{
        width: size.md,
        height: size.md,
      }}
      sm={{
        width: size.sm,
        height: size.sm,
      }}
    />
  );
};

export default Image;
