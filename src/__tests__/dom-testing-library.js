import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line testing-library/no-dom-import
import {getQueriesForElement} from '@testing-library/dom'
import {FavoriteNumber} from '../favorite-number'

function render(ui) {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  const queries = getQueriesForElement(container)
  return {...queries, container}
}

test("render a number input with a 'Favorite Number' label", () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
