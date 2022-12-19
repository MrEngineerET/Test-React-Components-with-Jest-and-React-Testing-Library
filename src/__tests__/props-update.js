import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {FavoriteNumber} from '../favorite-number'

test('passing an invalid value shows an error message', () => {
  const {rerender} = render(<FavoriteNumber min={0} max={10} />)
  const inputElement = screen.getByLabelText(/favorite number/i)
  userEvent.type(inputElement, '22')
  let alert = screen.getByRole('alert')
  expect(alert).toHaveTextContent(/the number is invalid/i)

  rerender(<FavoriteNumber min={0} max={30} />)
  alert = screen.queryByRole('alert')
  expect(alert).not.toBeInTheDocument()
})
