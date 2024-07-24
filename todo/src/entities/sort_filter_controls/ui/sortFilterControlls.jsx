import { MySelect } from '../../../components';
import cl from './sortFilterControlls.module.scss';

const SortFilterControlls =({sortOptions, filterOptions, currentSort, currentFilter, handleFilter, handleSort})=> {
  
  return (
    <form className={cl.controllsBlock}>
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