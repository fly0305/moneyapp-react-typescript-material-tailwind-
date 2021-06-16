const createImage = (contents: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = contents;
    img.onload = () => resolve(img);
  });

type resizeDataURLFunction = (
  contents: string,
  options?: {
    maxWidth?: number;
    maxHeight?: number;
    compression?: number;
  }
) => Promise<string>;

export const resizeDataURL: resizeDataURLFunction = async (contents, options) => {
  const { maxWidth, maxHeight, compression } = {
    maxWidth: 1500,
    maxHeight: 1500,
    compression: 0.7,
    ...options,
  };

  const img = await createImage(contents);

  // scales the image to ensure it fits within the specified constraints
  const WScaleFactor = img.width > maxWidth ? maxWidth / img.width : 1;
  const HScaleFactor = img.height > maxHeight ? maxHeight / img.height : 1;
  const ScaleFactor = Math.min(WScaleFactor, HScaleFactor);

  const newWidth = Math.floor(img.width * ScaleFactor);
  const newHeight = Math.floor(img.height * ScaleFactor);

  const canvas = document.createElement('canvas');

  canvas.width = newWidth;
  canvas.height = newHeight;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    const newImg = canvas.toDataURL('image/jpeg', compression);

    return newImg;
  } else {
    throw new Error('Error getting canvas context');
  }
};
