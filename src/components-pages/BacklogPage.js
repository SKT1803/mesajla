import React, { useState } from 'react';
import '../styles/backlog-table.css';

const BacklogPage = () => {
    const [selectedSprint, setSelectedSprint] = useState('Sprint 1');

    const sprints = {
        'Sprint 1': [
            { taskName: 'Planning Project', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes', general:true },
            { taskName: 'Selecting team members, juries and supervisor', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Selecting the project topic', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Allocating team members', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Creating Website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Designing the website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Adding necessary informations of participants', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Adding backlog document and reports', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Deciding Requirements', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Identifying core features', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Defining requirements and models', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Drafting user stories', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Technical Research', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 24, assignedToSprint: 'Yes',general:true },
            { taskName: 'Literature review about the similar projects', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Evaluating platform and device requirements', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Finding the most suitable technology options', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'User Experience', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 64, assignedToSprint: 'No' ,general:true},
            { taskName: 'Determining the user flow', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Sketching user interactions', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Creating the user interface', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Development Process', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 96, assignedToSprint: 'No',general:true },
            { taskName: 'Developing core functionalities', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Creating the database', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Developing the AI', story: 'No', sprintReady: 'No', priority: 'High', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Demonstration and Feedback', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No',general:true },
            { taskName: 'Creating the prototype', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 16, assignedToSprint: 'No' },
            { taskName: 'User testing and feedback collection', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' },
            { taskName: 'Identifying and solving problems', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' }
           
     
        ],
        'Sprint 2': [
            { taskName: 'Planning Project', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes', general:true },
            { taskName: 'Selecting team members, juries and supervisor', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Selecting the project topic', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Allocating team members', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Creating Website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Designing the website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Adding necessary informations of participants', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Adding backlog document and reports', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Deciding Requirements', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Identifying core features', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Defining requirements and models', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In progress', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Drafting user stories', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Technical Research', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In progress', storyPoints: 24, assignedToSprint: 'Yes',general:true },
            { taskName: 'Literature review about the similar projects', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Evaluating platform and device requirements', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Finding the most suitable technology options', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'User Experience', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 64, assignedToSprint: 'No' ,general:true},
            { taskName: 'Determining the user flow', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Sketching user interactions', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Creating the user interface', story: 'Yes', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Development Process', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 96, assignedToSprint: 'No',general:true },
            { taskName: 'Developing core functionalities', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Creating the database', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Developing the AI', story: 'No', sprintReady: 'No', priority: 'High', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Demonstration and Feedback', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No',general:true },
            { taskName: 'Creating the prototype', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 16, assignedToSprint: 'No' },
            { taskName: 'User testing and feedback collection', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' },
            { taskName: 'Identifying and solving problems', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' }
        ],
        'Sprint 3': [
            { taskName: 'Planning Project', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes', general:true },
            { taskName: 'Selecting team members, juries and supervisor', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Selecting the project topic', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Allocating team members', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Creating Website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Designing the website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Adding necessary informations of participants', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Adding backlog document and reports', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Deciding Requirements', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Identifying core features', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Defining requirements and models', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Drafting user stories', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Technical Research', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes',general:true },
            { taskName: 'Literature review about the similar projects', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Evaluating platform and device requirements', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Finding the most suitable technology options', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'User Experience', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 64, assignedToSprint: 'No' ,general:true},
            { taskName: 'Determining the user flow', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Sketching user interactions', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Creating the user interface', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Development Process', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 96, assignedToSprint: 'No',general:true },
            { taskName: 'Developing core functionalities', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Creating the database', story: 'No', sprintReady: 'No', priority: 'Medium', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Developing the AI', story: 'No', sprintReady: 'No', priority: 'High', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Demonstration and Feedback', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No',general:true },
            { taskName: 'Creating the prototype', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 16, assignedToSprint: 'No' },
            { taskName: 'User testing and feedback collection', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' },
            { taskName: 'Identifying and solving problems', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' }
            ],
            'Sprint 4': [
            { taskName: 'Planning Project', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes', general:true },
            { taskName: 'Selecting team members, juries and supervisor', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Selecting the project topic', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Allocating team members', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Creating Website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Designing the website', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Adding necessary informations of participants', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Adding backlog document and reports', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Deciding Requirements', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 32, assignedToSprint: 'Yes',general:true },
            { taskName: 'Identifying core features', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Defining requirements and models', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Drafting user stories', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Technical Research', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 24, assignedToSprint: 'Yes',general:true },
            { taskName: 'Literature review about the similar projects', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'Complete', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Evaluating platform and device requirements', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'Finding the most suitable technology options', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 8, assignedToSprint: 'Yes' },
            { taskName: 'User Experience', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 64, assignedToSprint: 'No' ,general:true},
            { taskName: 'Determining the user flow', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Sketching user interactions', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 16, assignedToSprint: 'Yes' },
            { taskName: 'Creating the user interface', story: 'Yes', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Development Process', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 96, assignedToSprint: 'No',general:true },
            { taskName: 'Developing core functionalities', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Creating the database', story: 'No', sprintReady: 'Yes', priority: 'Medium', status: 'In Progress', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Developing the AI', story: 'No', sprintReady: 'Yes', priority: 'High', status: 'In Progress', storyPoints: 32, assignedToSprint: 'No' },
            { taskName: 'Demonstration and Feedback', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 32, assignedToSprint: 'No',general:true },
            { taskName: 'Creating the prototype', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 16, assignedToSprint: 'No' },
            { taskName: 'User testing and feedback collection', story: 'Yes', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' },
            { taskName: 'Identifying and solving problems', story: 'No', sprintReady: 'No', priority: 'Low', status: 'Not Started', storyPoints: 8, assignedToSprint: 'No' }
            ],
        
    };

    return (
        <>
            <div className="button-container">
                {Object.keys(sprints).map((sprint) => (
                    <button
                        key={sprint}
                        onClick={() => setSelectedSprint(sprint)}
                        className={`sprint-button ${selectedSprint === sprint ? 'active' : ''}`}
                    >
                        {sprint}
                    </button>
                ))}
            </div>
            <div className="table-container">
                <table className="logs-table">
                    <thead>
                        <tr>
                            <th>TASK NAME</th>
                            <th>STORY</th>
                            <th>SPRINT READY</th>
                            <th>PRIORITY</th>
                            <th>STATUS</th>
                            <th>STORY POINTS</th>
                            <th>ASSIGNED TO SPRINT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sprints[selectedSprint].map((task, index) => (
                            <tr key={index} style={{backgroundColor: task.general ? '#f0dfc3' : ''}}>
                                <td style={{ width: '30%'}}>{task.taskName}</td>
                                <td style={{ width: '10%'}}>{task.story}</td>
                                <td style={{ width: '15%'}}>{task.sprintReady}</td>
                                <td style={{ width: '10%'}}>{task.priority}</td>
                                <td style={{ width: '10%'}}>{task.status}</td>
                                <td style={{ width: '10%'}}>{task.storyPoints}</td>
                                <td style={{ width: '15%'}}>{task.assignedToSprint}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BacklogPage;
