import { useParams } from "react-router-dom"

const EditFeedback = () => {

  const {id} = useParams()

  return(
    <h1>Edit Feedback - {id}</h1>
  )
}
export default EditFeedback;