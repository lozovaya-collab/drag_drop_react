import React from 'react';

import deletePng from '../../assets/images/delete.png';

const Task = ({ task, edit, ...props }) => {

    return (
        <div className="desk_tasks__item" {...props}>
            <div className="task-wrapper">
                <div className="task-wrapper_container">
                    <p className="task-wrapper_container__login">
                        user
                    </p>
                </div>

                <h5 onClick={() => edit(task)}  className="task-wrapper_name">
                    { task.title }
                </h5>

                <div
                    className="task-wrapper_container"
                    >
                    <img
                        className="task-wrapper_container__icon"
                        src={deletePng}
                        alt="del"
                    />
                </div>
            </div>
        </div>
    )
}

export { Task }