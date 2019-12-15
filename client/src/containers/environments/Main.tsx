import React from 'react'

import Contents from '../ecosystems/Contents'

interface Props {
  contentsProps: {
    skills: Skill[]
  }
}

const Main: React.FC<Props> = props => {
  return (
    <div>
      <Contents skills={props.contentsProps.skills} />
    </div>
  )
}

export default Main
