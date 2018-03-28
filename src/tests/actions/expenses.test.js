
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action generator', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});