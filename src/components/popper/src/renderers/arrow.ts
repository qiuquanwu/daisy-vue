import { Comment, h } from 'vue';

export default function renderArrow(showArrow: boolean): JSX.Element {
  return showArrow
    ? h(
        'div',
        {
          ref: 'arrowRef',
          class: 'yoga-popper__arrow',
        },
        null
      )
    : h(Comment, null, '');
}
