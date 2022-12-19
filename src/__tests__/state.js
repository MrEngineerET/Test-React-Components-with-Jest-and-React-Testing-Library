import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {FavoriteNumber} from '../favorite-number'

test('passing an invalid value shows an error message', () => {
  render(<FavoriteNumber min={0} max={10} />)
  const inputElement = screen.getByLabelText(/favorite number/i)
  userEvent.type(inputElement, '22')
  const alert = screen.getByRole('alert')
  expect(alert).toHaveTextContent(/the number is invalid/i)
})
