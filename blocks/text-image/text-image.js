import { variantsClassesToBEM } from '../../scripts/common.js';

const variantClasses = ['bigimage', 'smallimage', 'v-center', 'h-center', 'image-right'];

export default function decorate(block) {
  const blockName = 'text-image';
  // add variant classnames
  if (block.classList.contains('image-right')) {
    const container = block.firstElementChild;
    const secondChild = container.children[1];
    container.insertBefore(secondChild, container.firstChild);
  }
  variantsClassesToBEM(block.classList, variantClasses, blockName);
  block.firstElementChild.classList.add(`${blockName}__container`);
  const pictureParent = block.querySelector('picture').parentElement;
  pictureParent?.classList.add(`${blockName}__image-container`);
}
