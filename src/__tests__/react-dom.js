import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test("render a number input with a 'Favorite Number' label", () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  // eslint-disable-next-line jest-dom/prefer-to-have-text-content
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
  expect(div.querySelector('input').type).toBe('number')
})
