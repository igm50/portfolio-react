import React from 'react'

import Skills from './Skills'

export default {
  title: 'Organisms/Skills'
}

export const Sample = () => {
  return (
    <Skills
      skills={[
        {
          color: 'blue',
          icon: 'Work',
          title: 'Java(6, 8, 11)',
          text:
            'Spring Framework(3.0.5.Release), Spring Boot(2.1.6.Release), MyBatis(3.5+)'
        },
        {
          color: 'green',
          icon: 'LaptopChromebook',
          title: 'JavaScript',
          text:
            'React(16.10.2), Storybook(5.2), Material-UI(4.5.1), JQuery(1.6.2)'
        },
        {
          color: 'red',
          icon: 'MarkunreadMailbox',
          title: 'PostgreSQL(9.0)'
        }
      ]}
    />
  )
}
