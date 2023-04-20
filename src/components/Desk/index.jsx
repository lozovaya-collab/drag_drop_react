import { Button } from "../UI/Button";
import { Task } from "../Task";

const Desk = ({statusId, statusTitle, tasks}) => {
    return (
        <div className="desk">
            <div className="desk_title">
                <h4> {statusTitle} </h4>
            </div>
            <div className="desk_tasks">
                {
                    tasks && 
                    tasks.filter((item) => item.status_id === statusId).map(task => {
                        return (
                            <Task task={task} key={task.id} />
                        )
                    })
                }
            {/* <Button classNameOut="desk_action-btn">Добавить задачу</Button> */}
            </div>
        </div>
    )
}

export { Desk }