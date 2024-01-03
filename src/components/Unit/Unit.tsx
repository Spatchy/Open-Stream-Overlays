import unitComponentMap from "./unitComponentMap" 

interface props {
  body? : Array<{
    id: string
    component: string
    errorMessage?: string
  }>
}

const Unit : React.FC = ({ body } : props) => {

  const ErrorComponent = unitComponentMap["unitError"]

  return (
    <>
      {
        body && body.length > 0
          ? body.map(item => { 
            let Component = unitComponentMap[item.component]
            if (!Component) {
              Component = ErrorComponent
              item.errorMessage = `Unrecognised component name: '${item.component}'`
            }
            return <Component key={item.id} message={item.errorMessage} />
          })
          : <ErrorComponent message="No body field was provided" />
      }
    </>
  )
}

export default Unit