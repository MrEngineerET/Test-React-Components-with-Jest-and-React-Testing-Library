import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line testing-library/no-dom-import
import {getQueriesForElement} from '@testing-library/dom'
import {FavoriteNumber} from '../favorite-number'

test("render a number input with a 'Favorite Number' label", () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  const {getByLabelText} = getQueriesForElement(div)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
