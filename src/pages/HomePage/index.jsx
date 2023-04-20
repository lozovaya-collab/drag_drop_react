import { React } from "react";

import { Desk } from "../../components/Desk";

const HomePage = () => {
  const statuses =  [
        {
          id: 1,
          name: "сделать",
        },
        {
          id: 2,
          name: "в процессе",
        },
        {
          id: 3,
          name: "закончено",
        },
      ]
      
  const tasks = [
    {
      status_id: 1,
      title: 'hhhhh',
      description: 'gagagagag'
    }
  ];
  const users = [];

  return (
    <div className="todo-app">
      {
        statuses && statuses.map((status) => {
            return (
              <Desk statusId={status.id} statusTitle={status.name} tasks={tasks} key={status.id}/>
            );
        })
      }
    </div>
  )
}

export {  HomePage }