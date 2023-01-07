import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components';

jest.mock('react-redux');
describe('Test component', () => {
  test('Test Header components', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
