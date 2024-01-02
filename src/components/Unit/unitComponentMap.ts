import UnitError from "./UnitError/UnitError"

interface unitComponentMapTypes {
  [key: string] : React.FC
}

const unitComponentMap : unitComponentMapTypes = {
  noBodyError: UnitError
}

export default unitComponentMap