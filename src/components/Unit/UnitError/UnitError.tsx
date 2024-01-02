
interface props {
  message?: string
}

const UnitError : React.FC = ({ message } : props) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default UnitError