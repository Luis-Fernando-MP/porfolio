import { TechnologyStack, technologyStack } from '@/lib/techQuery/tech.type'
import IconButton from '@/shared/ui/IconButton'
import { type FC } from 'react'

interface Props {
  selectedStack?: TechnologyStack
  toggleStack: (stack: TechnologyStack) => void
}

const StacksButtons: FC<Props> = ({ selectedStack, toggleStack }) => {
  return (
    <div className='frow'>
      {Object.entries(technologyStack).map(([name, Icon]) => {
        const active = selectedStack === name
        return (
          <IconButton
            className='technologies-category'
            key={name}
            onClick={() => toggleStack(name as TechnologyStack)}
            active={active}
          >
            <Icon />
            <h4>{name}</h4>
          </IconButton>
        )
      })}
    </div>
  )
}

export default StacksButtons
