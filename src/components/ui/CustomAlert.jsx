import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./alert"
 
function CustomAlert({variant, title, description}) {
  return (
    <Alert variant = {variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}

export default CustomAlert;