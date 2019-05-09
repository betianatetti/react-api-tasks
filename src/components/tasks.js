import React from 'react';

const Tasks = ({ tasks }) => {
    return(
        <div>
            <center><h1>Tasks List</h1></center>
            {tasks.map((task) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{task.title}</h5>
                        <h6 class="card-body">{task.description}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Tasks;