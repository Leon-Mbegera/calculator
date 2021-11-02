import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

test('renders Display and ButtonPanel components', () => {
  const clickHandler = jest.fn();
  const snap = renderer.create(<ButtonPanel clickHandler={clickHandler} />).toJSON();
  expect(snap).toMatchSnapshot();
});
