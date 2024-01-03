
interface props {
  message?: string
}

const UnitError : React.FC = ({ message } : props) => {
  return (
    <div>
      {"Error: " + message}
    </div>
  )
}

export default UnitError