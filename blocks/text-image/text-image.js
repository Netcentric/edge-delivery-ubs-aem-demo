import { variantsClassesToBEM } from '../../scripts/common.js';

const variantClasses = ['bigimage', 'smallimage', 'v-center', 'h-center', 'image-right'];

export default function decorate(block) {
  const blockName = 'text-image';
  // add variant classnames
  if (block.classList.contains('image-right')) {
    const secondChild = block.children[1];
    block.insertBefore(secondChild, block.firstChild);
  }
  variantsClassesToBEM(block.classList, variantClasses, blockName);
  block.firstElementChild.classList.add(`${blockName}__container`);
  const pictureParent = block.querySelector('picture').parentElement;
  pictureParent?.classList.add(`${blockName}__image-container`);
}
