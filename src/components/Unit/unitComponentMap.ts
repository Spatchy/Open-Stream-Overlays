import UnitError from "./UnitError/UnitError"

interface UnitComponentMapTypes {
  [key: string]: React.FC<{ message?: string }>;
}

const unitComponentMap: UnitComponentMapTypes = {
  unitError: UnitError
}

export default unitComponentMap