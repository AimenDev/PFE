import React, { useState, useEffect } from 'react';
import './charges.css';

const TaskTable = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [
      { id: 1, identifiant:'1', taskName: 'Suivi des dépenses et des revenus', duree:'1 semaine', status: 'En attent' },
      { id: 2, identifiant:'2', taskName: 'Collecte des cotisations', duree:'4 semaine', status: 'Terminé' },
      { id: 3, identifiant:'3', taskName: 'Organisation des travaux de réparation et de maintenance', duree:'3 semaine', status: 'En attent' },
      { id: 4, identifiant:'4', taskName: 'Traitement des demandes et des plaintes des résidents', duree:'2 semaine', status: 'En attent' },
      { id: 5, identifiant:'5', taskName: 'Diffusion dinformations sur les événements à venir', duree:'2 semaine', status: 'En attent' }
    ];
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleStatusChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === 'En attent' ? 'Terminé' : 'En attent' }
          : task
      )
    );
  };

  return (
    <div>
      <p className='lol'>Liste des charges :</p>
      <table className='tbbl'>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Identifiant</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Charge</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Durée(semaines)</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>{task.identifiant}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>{task.taskName}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>{task.duree}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>
                <button
                  style={{
                    backgroundColor: task.status === 'En attent' ? '#ff7f50' : '#32cd32',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleStatusChange(task.id)}
                >
                  {task.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
