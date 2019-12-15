import React, { useMemo } from 'react'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core'
import { blue, red, green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  blue: {
    backgroundColor: blue[500]
  },
  red: {
    backgroundColor: red[500]
  },
  green: {
    backgroundColor: green[500]
  }
})

interface Props {
  items: {
    color?: AvatarColor
    icon: React.ReactNode
    title: string
    text?: string
  }[]
}

const Skills: React.FC<Props> = props => {
  const classes = useStyles()
  const selectColor = useMemo(() => {
    return (color: Color | undefined): string => {
      if (color === 'blue' || color === undefined) return classes.blue
      else if (color === 'red') return classes.red
      else if (color === 'green') return classes.green
      else return ''
    }
  }, [classes.blue, classes.green, classes.red])

  return (
    <List>
      {props.items.map((item, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar className={selectColor(item.color)}>{item.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  )
}

export default Skills
