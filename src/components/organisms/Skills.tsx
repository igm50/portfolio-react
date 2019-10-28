import React, { useMemo } from 'react'
import {} from '@material-ui/core'
import { Work, LaptopChromebook, MarkunreadMailbox } from '@material-ui/icons'

import AvatarList from '../molecules/AvatarList'

interface Props {
  skills: Skill[]
}

const Skills: React.FC<Props> = props => {
  const selectIcon = useMemo(() => {
    return (icon?: SkillIcon): React.ReactNode => {
      if (icon === 'Work' || icon === undefined) return <Work />
      else if (icon === 'LaptopChromebook') return <LaptopChromebook />
      else return <MarkunreadMailbox />
    }
  }, [])

  const skillItems = useMemo(
    () =>
      props.skills.map(skill => {
        return {
          color: skill.color,
          icon: selectIcon(skill.icon),
          title: skill.title,
          text: skill.text
        }
      }),
    [props.skills, selectIcon]
  )

  return (
    <div>
      <AvatarList items={skillItems} />
    </div>
  )
}

export default Skills
