import React, {useState} from "react";

import { Button, Task, CreateTaskPopup, EditTaskPopup } from "../../components";

const Desk = ({ statusId, statusTitle, tasks, updateTasks }) => {
    let currTask = null;
    let [selectedStatus, setSelectedStatus] = useState(null);
    let [selectedTask, setSelectedTask] = useState(null);

    const preventEvent = (e) => e.preventDefault();

    const addTaskToArray = (inputTask, pointerTask, arr) => {
        const index = arr.findIndex((el) => el.id === pointerTask.id);

        return index !== -1
            ? [...arr.slice(0, index + 1), inputTask, ...arr.slice(index + 1)]
            : arr;
    }

    const onDrop = (e, id) => {
        e.dataTransfer.dropEffect = "move";
        const taskId = parseInt(e.dataTransfer.getData("taskId"));
        const cloneTasks = [...tasks]

        const newTasks = cloneTasks.map((x) => {
            if (x.id === taskId) {
                addTaskToArray(currTask, x, cloneTasks);
                x.status_id = id;
            }
            return x;
        });

        updateTasks(newTasks)
    }

    const onDragStart = (e, task) => {
        e.dataTransfer.dropEffect = "none";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("taskId", task.id.toString());
    }

    const onDragOver = (task) => {
        currTask = task;
    }

    const openCreateTask = (id) => {
        setSelectedStatus(id);
        setSelectedTask(null);
    }

    const openEditPopup = (payload) => {
        setSelectedTask(payload.id);
        setSelectedStatus(null);
    }

    return (
        <>
            <div
                className="desk"
                onDrop={e => onDrop(e, statusId)}
                onDragOver={e => preventEvent(e)}
                onDragEnter={e => preventEvent(e)}
                style={{
                    height: `${82 + (tasks.filter((x) => x.status_id === statusId).length - 1) * 42 + 42}px`
                }}
            >
                <div className="desk_title">
                    <h4> {statusTitle} </h4>
                </div>
                <div className="desk_tasks">
                    {
                        tasks && 
                        tasks.filter((item) => item.status_id === statusId).map((task, index) => {
                            return (
                                <Task
                                    edit={openEditPopup}
                                    onDragStart={e => onDragStart(e, task)}
                                    onDragOver={e => onDragOver(task)}
                                    style={{
                                        top: `${index * 40}px`
                                    }}
                                    draggable="true"
                                    task={task}
                                    key={task.id} />
                            )
                        })
                    }
                    <Button
                        onClick={() => openCreateTask(statusId)}
                        classNameOut="desk_action-btn"
                        style={{
                            top: `${tasks.filter((x) => x.status_id === statusId).length * 40}px`
                        }}
                    >
                        Добавить задачу
                    </Button>
                </div>
            </div>
            {selectedStatus && 
                <CreateTaskPopup isDialog={selectedStatus} show={(value) => setSelectedStatus(value)} />
            }
            {selectedTask && 
                <EditTaskPopup isDialog={selectedTask} show={(value) => setSelectedTask(value)} />
            }
        </>
    )
}

export { Desk }