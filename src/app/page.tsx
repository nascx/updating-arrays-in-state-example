'use client'

import React, { ChangeEvent, useState } from 'react';

let i = 1

type Tasks = {
  id: number,
  title: string,
  status: string
}


const App = () => {

  const initialTasks = [
    {
      id: 0,
      title: 'Aprender inglês',
      status: 'To do',
    },
    {
      id: 1,
      title: 'Aprender Python',
      status: 'To do'
    }
  ]

  const [title, setTitle] = useState<string>('')

  const [tasks, setTasks] = useState<Tasks[]>(initialTasks)

  //for add a new item in array
  const add = () => {
    setTasks(prevTasks => [
      ...prevTasks, { id: i + 1, title: title, status: 'To do' }
    ])
    i + 1
  }

  //for remove item from array
  const remove = (id: number) => {
    setTasks(prevPlaylist =>
      prevPlaylist.filter(muisc => muisc.id !== id)
    )
  }

  //transforming a array
  const tranforming = (id: number) => {
    const newTasks = tasks.map((task) => {

      if (task.id !== id) {
        return task
      } else {
        return { ...task, status: 'Done' }
      }
    })
    setTasks(newTasks)
  }

  //replacing items in an array
  const replacing = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task
      } else {
        return { id: task.id, title: 'replacing task', status: 'doing'}
      }
    })
    setTasks(newTasks)
  }

  return (
    <>
      <h1>Add new music to playlist</h1>
      <input type="text" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {tasks?.map((task) => (
          <>
            <li key={task.id}>{`${task.title}, status: ${task.status}`}</li>
            <button onClick={() => remove(task.id)}>Delete</button>
            <button onClick={() => tranforming(task.id)}>Done</button>
            <button onClick={() => replacing(task.id)}>Replacing</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
