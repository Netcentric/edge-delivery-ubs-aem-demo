import { variantsClassesToBEM } from '../../scripts/common.js';

const variantClasses = ['bigimage', 'smallimage', 'v-center', 'h-center', 'image-right'];

export default function decorate(block) {
  const blockName = 'text-image';
  const container = block.querySelector(`.${blockName}__container`);
  if (container) {
    const nextSibling = container.nextElementSibling;
    if (nextSibling) {
      container.appendChild(nextSibling);
    }
  }
  // add variant classnames
  variantsClassesToBEM(block.classList, variantClasses, blockName);
  block.firstElementChild.classList.add(`${blockName}__container`);
  const pictureParent = block.querySelector('picture').parentElement;
  pictureParent?.classList.add(`${blockName}__image-container`);
}
