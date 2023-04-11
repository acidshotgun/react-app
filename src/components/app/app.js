// app.js сюда будут импортированы все компоненты и внутри с ними будут манипуляции

// Импорт блока AppInfo (помещаем) и остальных компонентов
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployessAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

    // Иммитация базы данных
    // Она будет передана в кач-ве свойства в <EmployeesList/>
    const data = [
        {name: 'Alisa J.', salary: 800, increase: false, id: 1},
        {name: 'Tom W.', salary: 800, increase: true, id: 2,},
        {name: 'Mike W.', salary: 3000, increase: false, id: 3},
        {name: 'Aleksandr Z.', salary: 5000, increase: true, id: 4},
    ];

    return (
        <div className="app">
            <AppInfo/>

            {/* Блок с двумя компонентами. Поиск и фильтры. */}
            {/* Два компонента с разным функционалом которые будут содержаться внутри*/}
            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            {/* В компоненты можно передавать что угодно поэтому передадим массив БД */}
            {/* Теперь массив БД data можно использовать внутри компонента EmployeesList */}
            {/* ВАЖНО ЧТО ЭТОТ МАССИВ СТАНЕТ ОБЪЕКТОМ и нужна будет деструктуризация */}
            <EmployeesList data={data}/>
            <EmployessAddForm />
        </div>
    );
}

// Экспорт его App в главный файл приложения index.js
export default App;