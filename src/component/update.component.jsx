import './update.styles.css'
const Update=(props)=>{

    return (
        <div>
            <input onChange={props.changeTask} value={props.updateData&&props.updateData.taskName} className='update' placeholder='Edit your Todo' />
            <button onClick={props.updateTask} className="edit">Update</button>
            <button onClick={props.cancelChange} className="cancel">Cancel</button>
        </div>
    )
}
export default Update