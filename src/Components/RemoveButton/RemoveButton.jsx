import './RemoveButton.css'
import RemoveIcon from "../RemoveIcon/RemoveIcon"

const RemoveButton = ({index, deleteElement}) => {
    return (
        <button 
        className='button--delete' 
        onClick={() =>deleteElement(index)}> 
            <RemoveIcon />
        </button>
    )
}

export default RemoveButton