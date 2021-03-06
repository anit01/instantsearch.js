/* eslint-disable import/default */

import { storiesOf } from 'dev-novel';
import instantsearch from '../../instantsearch';
import { wrapWithHits } from '../../utils/wrap-with-hits.js';

const stories = storiesOf('ToggleRefinement');

export default () => {
  stories
    .add(
      'default',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.toggleRefinement({
            container,
            attribute: 'free_shipping',
          })
        );
      })
    )
    .add(
      'with label',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.toggleRefinement({
            container,
            attribute: 'free_shipping',
            templates: {
              labelText: 'Free Shipping (toggle single value)',
            },
          })
        );
      })
    )
    .add(
      'with on & off values',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.toggleRefinement({
            container,
            attribute: 'brand',
            on: 'Sony',
            off: 'Canon',
            templates: {
              labelText: 'Canon (not checked) or sony (checked)',
            },
          })
        );
      })
    );
};
