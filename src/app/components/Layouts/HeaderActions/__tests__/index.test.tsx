import * as React from 'react';
import { render } from '@testing-library/react';

import { HeaderActions } from '..';

describe('<HeaderActions  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HeaderActions />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
