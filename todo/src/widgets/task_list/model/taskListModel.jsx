import { useSelector } from "react-redux";
import {useMemo, useState} from 'react';
import TaskList from "../ui/taskList";
import SortFilterControlls from "../../../entities/sort_filter_controls/ui/sortFilterControlls";

const TaskListModel = ()=> {
  const sortOptions = [
    {value: '', label: 'Сортировать по'},
    {value: 'completionDate', label: 'дате выполнения'},
    {value: 'completionDateLate', label: 'дате выполнения (подзние)'},
    {value: 'title', label: 'названию'},
    {value: 'titleEnd', label: 'названию (с конца)'},
    {value: 'creationTime', label: 'времени создания'},
    {value: 'creationTimeLate', label: 'времени создания (подзние)'},
  ];
  const filterOptions = [
    {value: '', label: 'Фильтровать'},
    {value: 'complete', label: 'выполненные'},
    {value: 'incomplete', label: 'невыполненные'},
    {value: 'all', label: 'все'},
  ];
  const tasks = useSelector(state=> state.tasks.tasks);
  const [currentSort, setCurrentSort] = useState('creationTimeLate');
  const [currentFilter, setCurrentFilter] = useState('all');

  const sortTasks =(tasks, sortType)=> {
    if (sortType) {
      switch(sortType) {
        case 'completionDate': {
          return tasks.sort((a, b)=>  {
            const firstTaskTime = new Date(a.completionDate).getTime();
            const secondTaskTime = new Date(b.completionDate).getTime();
            return firstTaskTime - secondTaskTime;
          } )
        };
        case 'completionDateLate': {
          return tasks.sort((a, b)=>  {
            const firstTaskTime = new Date(a.completionDate).getTime();
            const secondTaskTime = new Date(b.completionDate).getTime();
            return secondTaskTime - firstTaskTime;
          } )
        };
        case 'creationTime': {
          return tasks.sort((a, b)=> {
            //task id is a result of Date.now() invoked at the time of task creation
            return a.id - b.id;
          })
        };
        case 'creationTimeLate': {
          return tasks.sort((a, b)=> {
            //task id is a result of Date.now() invoked at the time of task creation
            return b.id - a.id;
          })
        };
        case 'title': {
          return tasks.sort((a,b) => {
            return a.title.localeCompare(b.title);
          })
        };
        case 'titleEnd': {
          return tasks.sort((a,b) => {
            return b.title.localeCompare(a.title);
          })
        };
        default: {
          return tasks;
        }
      }
    }
  };
  const filterTasks =(tasks, filter)=> {
    if(filter) {
      switch (filter) {
        case 'complete': {
          return tasks.filter(task => task.isComplete === true);
        }
        case 'incomplete': {
          return tasks.filter(task =>task.isComplete === false);
        }
        default: {
          return tasks;
        }
      }
    }
  };
  const sorted = useMemo(()=> {
    return sortTasks([...tasks], currentSort);
  }, [tasks, currentSort]);
  const filtered = useMemo(()=> {
    return filterTasks(sorted, currentFilter);
  }, [sorted, currentFilter]);

  const handleSort = (e)=> {
    setCurrentSort(e.target.value);
  };
  const handleFilter = (e)=> {
    setCurrentFilter(e.target.value);
  };

  return (
    <>
      <SortFilterControlls
        sortOptions={sortOptions}
        filterOptions={filterOptions}
        currentSort={currentSort}
        currentFilter={currentFilter}
        handleSort={handleSort}
        handleFilter={handleFilter} />
      <TaskList
        tasks={filtered}
      />
    </>
  )
};

export default TaskListModel;