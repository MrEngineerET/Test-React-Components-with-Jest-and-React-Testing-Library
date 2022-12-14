import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test("render a number input with a 'Favorite Number' label", () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
})
