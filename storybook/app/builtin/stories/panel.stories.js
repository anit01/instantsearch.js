/* eslint-disable import/default */

import { storiesOf } from 'dev-novel';
import instantsearch from '../../instantsearch';
import { wrapWithHits } from '../../utils/wrap-with-hits.js';

const stories = storiesOf('Panel');

export default () => {
  stories
    .add(
      'with default',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.panel({
            templates: {
              header: ({ results }) =>
                `Header ${results ? `| ${results.nbHits} results` : ''}`,
              footer: 'Footer',
            },
            hidden: ({ results }) => results.nbHits === 0,
          })(instantsearch.widgets.refinementList)({
            container,
            attribute: 'brand',
          })
        );
      })
    )
    .add(
      'with ratingMenu',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.panel({
            templates: {
              header: ({ results }) =>
                `Header ${results ? `| ${results.nbHits} results` : ''}`,
              footer: 'Footer',
            },
            hidden: ({ results }) => results.nbHits === 0,
          })(instantsearch.widgets.ratingMenu)({
            container,
            attribute: 'price',
          })
        );
      })
    )
    .add(
      'with menu',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.panel({
            templates: {
              header: ({ results }) =>
                `Header ${results ? `| ${results.nbHits} results` : ''}`,
              footer: 'Footer',
            },
            hidden: ({ results }) => results.nbHits === 0,
          })(instantsearch.widgets.menu)({
            container,
            attribute: 'brand',
          })
        );
      })
    );
};
