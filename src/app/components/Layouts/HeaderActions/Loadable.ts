/**
 *
 * Asynchronously loads the component for HeaderActions
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HeaderActions = lazyLoad(
  () => import('./index'),
  module => module.HeaderActions,
);
