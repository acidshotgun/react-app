// app.js сюда будут импортированы все компоненты и внутри с ними будут манипуляции

// Импорт блока AppInfo (помещаем) и остальных компонентов
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployessAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {
    return (
        <div className="app">
            <AppInfo/>

            {/* Блок с двумя компонентами. Поиск и фильтры. */}
            {/* Два компонента с разным функционалом которые будут содержаться внутри*/}
            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList />
            <EmployessAddForm />
        </div>
    );
}

// Экспорт его App в главный файл приложения index.js
export default App;