import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

test('renders Display and ButtonPanel components', () => {
  const snap = renderer.create(<ButtonPanel />).toJSON();
  expect(snap).toMatchSnapshot();
});
