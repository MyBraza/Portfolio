import React, { FC, memo } from 'react'

type TImageProps = { src: string; alt: string; onClick: () => void , className:string}

const Image: FC<TImageProps> = memo(({ src, alt, onClick , className}: TImageProps) => (
  <img
    src={src}
    alt={alt}
    onClick={onClick}
    className={className}
  />
))

Image.displayName = 'Image'

export default Image
