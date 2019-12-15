import React from 'react'
import { Work, LaptopChromebook } from '@material-ui/icons'

import AvatarList from './AvatarList'

export default {
  title: 'Molecules/AvatarList'
}

export const Sample = () => {
  return (
    <AvatarList
      items={[
        {
          color: 'green',
          icon: <Work />,
          title: 'Java(6, 8, 11)',
          text:
            'Spring Framework(3.0.5.Release), Spring Boot(2.1.6.Release), MyBatis(3.5+)'
        },
        {
          color: 'blue',
          icon: <LaptopChromebook />,
          title: 'JavaScript',
          text: 'React(16.10.2), Storybook(5.2), Material-UI(4.5.1)'
        }
      ]}
    />
  )
}
