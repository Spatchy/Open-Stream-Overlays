import unitComponentMap from "./unitComponentMap" 

interface props {
  body? : Array<{
    id: string
    component: string
  }>
}

const Unit : React.FC = ({ body } : props) => {

  return (
    <>
      {body ? body.map(i => unitComponentMap[i.component]) : unitComponentMap["noBodyError"] }
    </>
  )
}

export default Unit