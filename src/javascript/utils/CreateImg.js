export function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  if (alt != null) img.alt = alt;
  return img;
}
