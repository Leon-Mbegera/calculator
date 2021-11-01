import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

test('Button panel displays all calculator buttons', () => {
  const onOperationClick = jest.fn();
  const onNumberClick = jest.fn();
  const tree = renderer
    .create(
      <ButtonPanel
        onOperationClick={onOperationClick}
        onNumberClick={onNumberClick}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
