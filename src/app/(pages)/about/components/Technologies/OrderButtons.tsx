import { OrderBy, OrderDirection, listOfOrders } from '@/lib/techQuery/tech.type'
import IconButton from '@/shared/ui/IconButton'
import { SortAscIcon, SortDescIcon } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  orderBy: OrderBy[]
  toggleOrderBy: (key: OrderBy) => void
  orderDirection: OrderDirection
  setOrderDirection: Dispatch<SetStateAction<OrderDirection>>
}

const OrderButtons: FC<Props> = ({ orderBy, toggleOrderBy, orderDirection, setOrderDirection }) => {
  return (
    <>
      {listOfOrders.map(order => {
        const active = orderBy.includes(order)
        return (
          <IconButton className='border' key={`${order}-orderBy`} onClick={() => toggleOrderBy(order)} active={active}>
            {order}
          </IconButton>
        )
      })}
      <IconButton
        className='border'
        disable={orderBy.length <= 0}
        onClick={() => setOrderDirection(dir => (dir === 'asc' ? 'desc' : 'asc'))}
        label={orderDirection === 'asc' ? 'ascendente' : 'descendente'}
      >
        {orderDirection === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
      </IconButton>
    </>
  )
}

export default OrderButtons
