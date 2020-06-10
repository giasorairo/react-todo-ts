import React from 'react';
import { Task } from "../Types";

// taskをpropsで受け取るので型の定義
type Props = {
  task: Task,
};

const TaskItem: React.FC<Props> = ({task}) => {
  return (
    <li>
      <label>
        <input type="checkbox" className="checkbox-input" />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button className="btn is-delete">delete</button>
    </li>
  );
};

export default TaskItem;
