import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
const PriceCardAccess = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: "column", alignItems:"flex-start"}} >
      {Object.values(props.obj1).map(Access => <p fontSize="16px" margin="6px 0"><CheckCircleIcon color={props.color}/> {Access}</p>)}
    </div>
  )
}

export default PriceCardAccess
