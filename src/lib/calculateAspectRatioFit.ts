// https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
function calculateAspectRatioFit({
  width,
  height,
  maxWidth,
  maxHeight,
}: {
  width: number
  height: number
  maxWidth: number
  maxHeight: number
}) {
  const ratio = Math.min(maxWidth / width, maxHeight / height)
  return { width: width * ratio, height: height * ratio }
}

export { calculateAspectRatioFit }
