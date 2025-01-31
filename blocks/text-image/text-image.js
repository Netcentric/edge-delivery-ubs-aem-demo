import { variantsClassesToBEM } from '../../scripts/common.js';

const variantClasses = ['bigimage', 'smallimage', 'v-center', 'h-center', 'image-right'];

export default function decorate(block) {
  const blockName = 'text-image';
  const firstChild = block.firstElementChild;
  const secondChild = firstChild.nextElementSibling;
  if (secondChild) {
    if (block.classList.contains('image-right')) {
      firstChild.insertBefore(secondChild, firstChild.firstChild);
    } else {
      firstChild.appendChild(secondChild);
    }
  }
  // add variant classnames
  variantsClassesToBEM(block.classList, variantClasses, blockName);
  block.firstElementChild.classList.add(`${blockName}__container`);
  const pictureParent = block.querySelector('picture').parentElement;
  pictureParent?.classList.add(`${blockName}__image-container`);
}
