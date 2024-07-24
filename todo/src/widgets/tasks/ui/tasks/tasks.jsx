import SortFilterControlls from '../../../../entities/sort_filter_controls/ui/sortFilterControlls';
import TaskList from '../task_list/taskList';
const Tasks =({controlls, list})=> {
  return (
    <>
      <SortFilterControlls
        sortOptions={controlls.sortOptions}
        filterOptions={controlls.filterOptions}
        currentSort={controlls.currentSort}
        currentFilter={controlls.currentFilter}
        handleSort={controlls.handleSort}
        handleFilter={controlls.handleFilter}
      />
      <TaskList
        tasks={list.filtered}
      />
    </>
  )
};

export default Tasks;