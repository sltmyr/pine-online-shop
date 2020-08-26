import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';

afterEach(cleanup);

it('click on button calls close menu function', () => {
  const onClickCloseMenu = jest.fn();
  const { getByTestId } = render(
    <Router>
      <Menu onClickCloseMenu={onClickCloseMenu} />
    </Router>
  );
  const productsButton = getByTestId('coats-button');
  fireEvent.click(productsButton);
  expect(onClickCloseMenu).toHaveBeenCalledTimes(1);
});
