import { MySelect } from '../../../components';
import cl from './sortFilterControlls.module.scss';

const SortFilterControlls =({sortOptions, filterOptions, currentSort, currentFilter, handleFilter, handleSort})=> {
  
  return (
    <form>
      <div className={cl.formBlockWrap}>
        <MySelect label='Отсортировать список' options={sortOptions} currentOption={currentSort} onChange={handleSort}/>
      </div>
      <div className={cl.formBlockWrap}>
        <MySelect label='Отфильтровать список' options={filterOptions} currentOption={currentFilter} onChange={handleFilter}/>
      </div>
    </form>
  )
};

export default SortFilterControlls;