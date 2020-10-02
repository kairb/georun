import React from 'react';
import { renderWithThemeWrapper } from '../../utils/test';
import Score from './Score';

describe('Score component', () => {
  it('should render with score', () => {
    const { container, getByText } = renderWithThemeWrapper(
      <Score score={1} />,
    );
    expect(getByText('1')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
