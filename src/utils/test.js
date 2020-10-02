import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
export const renderWithThemeWrapper = (component) =>
  render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );