import React from 'react'

import Skills from '../../components/organisms/Skills'

interface Props {
  skills: Skill[]
}

const Contents: React.FC<Props> = props => {
  return (
    <div>
      <Skills skills={props.skills} />
    </div>
  )
}

export default Contents
