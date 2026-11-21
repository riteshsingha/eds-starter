export default function decorate(block) {
  const col = block.querySelector(':scope > div > div');
  if (!col) return;
  const picture = col.querySelector('picture');
  if (picture) {
    block.prepend(picture);
  }
}
