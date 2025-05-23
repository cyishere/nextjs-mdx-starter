import type { ImageProps } from 'next/image';

import Image from 'next/image';

export type AppImageProps = ImageProps & {
  // Add any additional props specific to AppImage here
};

const AppImage: React.FC<AppImageProps> = (props) => {
  return (
    <figure
      className="flow"
      style={{ '--flow-space': '0.5em' } as React.CSSProperties}
    >
      <Image
        {...props}
        width={0}
        height={0}
        src={props.src}
        alt={props.alt || ''}
        sizes="100vw"
        style={{
          margin: '0',
          objectFit: 'cover',
          width: '100%',
          height: '400px',
          objectPosition: '50% 50%'
        }}
      />
      {props.title && (
        <figcaption className="text-sm text-light text-italic">
          {props.title}
        </figcaption>
      )}
    </figure>
  );
};

export default AppImage;
