/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Example from '../component'

const props = {
  number: 10,
  increaseNumber: action('increase')
}

storiesOf('', module)
  .addDecorator(story => <div style={{ width: '95%', textAlign: 'center', marginTop: '50px' }}>{story()}</div>)
  .addWithInfo('default', '', () => (
    <Example {...props} />
  ))