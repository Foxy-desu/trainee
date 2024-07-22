import { useState } from 'react'
import TaskFormModel from './features/task_form/model/taskFormModel';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // function setMinDate() {
  //   const now = new Date(Date.now());
  //   const day = now.getDate();
  //   const month = now.getMonth() + 1;
  //   const year = now.getFullYear();

  //   return `${year}-${month < 10? '0'+month : month}-${day < 10? '0'+day : day}`
  // }

  return (
    <>
      <header>
        <h1 className='appTitle'>Мои задачи</h1>
        <div className='taskBtnBlock'>
          {/* <button className='taskBtn expand'>
              <span className='taskBtnLine'/>
              <span className='taskBtnLine'/>
          </button> */}
        </div>
        <TaskFormModel/>
        <>
          {/* <form action="">
            <div className='blockWrap'>
              <div className='titleWrap'>
                <label className='inputLabel' htmlFor='title'>
                  Заголовок:
                </label>
                <input className='taskInput extraPadding' id='title' type="text" placeholder="Купить корм для рыб"/>
              </div>
              <div>
                <label className='inputLabel' htmlFor='date'>
                  Выполнить до:
                </label>
                <input id='date' type="date" min={setMinDate()}/>
              </div>
            </div>
            <label className='inputLabel' htmlFor='description'>
              Описание:
            </label>
            <textarea className='taskInput extraPadding' id='description' placeholder='У Васи закончился корм - нужно купить...'></textarea>
            <div className='taskBtnBlock'>
              <button className='taskBtn' type="submit">+</button>
            </div>
          </form> */}
        </>
      </header>
      <main>
        <h2 style={{textAlign: 'center'}}>Список Задач</h2>
        <div>
          <form style={{display: 'flex', gap: '15px', justifyContent: 'flex-end'}}>
            <div>
            <label className='visuallyHidden' htmlFor="sort">
              Отсортировать список
            </label>
            <select id="sort" value=''>
              <option value="" disabled={true}>Сортировать по</option>
              <option value="completionDate">дате завершения</option>
              <option value="title">названию</option>
              <option value="creation time">дате создания</option>
            </select>
            </div>
            <div>
              <label className='visuallyHidden' htmlFor="filter">
                Отфильтровать список
              </label>
              <select id="filter" value="">
              <option value="" disabled={true}>Показать</option>
                <option value="all">все</option>
                <option value="complete">завершенные</option>
                <option value="incomplete">незавершенные</option>
              </select>
            </div>
          </form>
        </div>
        <ul className='taskList'>
          <li>
            <article className='card'>
              <div className='statusBar' style={{display: 'flex', gap: '15px', justifyContent: 'space-between'}}>
                <div className='statusBar_info'>
                  <span>Завершена</span>
                </div>
                <div className='statusBar_controls'>
                  <div className='btnGroup'>
                    <button>
                      <span className='visuallyHidden'>Удалить</span>
                      x
                    </button>
                    <button>
                      <span className='visuallyHidden'>Редактировать</span>
                      /
                    </button>
                    <button>
                      <span className='visuallyHidden'>Пометить как завершенную / пометить как незавершенную</span>
                      v
                    </button>
                  </div>
                </div>
              </div>
              <div className='taskData'>
                <h3>Позвонить снежному человеку</h3>
                <p>Давно не общались. Позвонить по номеру +817258693</p>
              </div>
            </article>
          </li>
          <li>
            <article className='card'>
              <div className='statusBar' style={{display: 'flex', gap: '15px', justifyContent: 'space-between'}}>
                <div className='statusBar_info'>
                  <span>Завершена</span>/<span>07/07/2024</span>
                </div>
                <div className='statusBar_controls'>
                  <div className='btnGroup'>
                    <button>
                      <span className='visuallyHidden'>Удалить</span>
                      x
                    </button>
                    <button>
                      <span className='visuallyHidden'>Редактировать</span>
                      /
                    </button>
                    <button>
                      <span className='visuallyHidden'>Пометить как завершенную / пометить как незавершенную</span>
                      v
                    </button>
                  </div>
                </div>
              </div>
              <div className='taskData'>
                <h3>Позвонить снежному человеку</h3>
                <p>Давно не общались. Позвонить по номеру +817258693</p>
              </div>
            </article>
          </li>
          <li>
            <article className='card'>
              <div className='statusBar' style={{display: 'flex', gap: '15px', justifyContent: 'space-between'}}>
                <div className='statusBar_info'>
                  <span>Завершена</span>/<span>07/07/2024</span>
                </div>
                <div className='statusBar_controls'>
                  <div className='btnGroup'>
                    <button>
                      <span className='visuallyHidden'>Удалить</span>
                      x
                    </button>
                    <button>
                      <span className='visuallyHidden'>Редактировать</span>
                      /
                    </button>
                    <button>
                      <span className='visuallyHidden'>Пометить как завершенную / пометить как незавершенную</span>
                      v
                    </button>
                  </div>
                </div>
              </div>
              <div className='taskData'>
                <h3>Позвонить снежному человеку</h3>
                <p>Давно не общались. Позвонить по номеру +817258693</p>
              </div>
            </article>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
