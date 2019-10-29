import React, { useMemo } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { Work, LaptopChromebook, MarkunreadMailbox } from '@material-ui/icons'
import {} from '@material-ui/styles'

import AvatarList from '../molecules/AvatarList'

const useStyles = makeStyles({
  title: {
    paddingLeft: 16
  }
})

interface Props {
  skills: Skill[]
}

const Skills: React.FC<Props> = props => {
  const classes = useStyles()

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
    <Box>
      <Typography className={classes.title} variant="h4">
        Skills
      </Typography>
      <AvatarList items={skillItems} />
    </Box>
  )
}

export default Skills
