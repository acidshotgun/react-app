// app.js сюда будут импортированы все компоненты и внутри с ними будут манипуляции
import { Component } from 'react';
import nextId from "react-id-generator";

// Импорт блока AppInfo (помещаем) и остальных компонентов
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployessAddForm from '../employees-add-form/employees-add-form';

import './app.css';


// App превратили в классовый компонент чтобы можно было работать с состояниями а именно с data
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Иммитация базы данных
            // Она будет передана в кач-ве свойства в <EmployeesList/>
            data: [
                {name: 'Alisa J', salary: 800, increase: false, rise: true, id: nextId()},
                {name: 'Tom W', salary: 800, increase: true, rise: false, id: nextId()},
                {name: 'Mike W', salary: 3000, increase: false, rise: false, id: nextId()},
                {name: 'Aleksandr Z', salary: 5000, increase: true, rise: false, id: nextId()},
            ]
        }
    }
    
    // Метод удаления items из list он будет передаваться до самых items
    // Метод передается тут тк он работает с БД data 

    // Задача найти объект массива data по id чтобы этот элемент удалить из списка по id
    // Затем мы должны изменить state чтобы чтобы создать новое состояние

    // Изменять state напрямую нельзя! Это иммутабельность
    // В этом случае нам нужно создать новый объект отфильтровав старый и заменить
    // В данноый момент data фильтруется и зписывает в новый массив data то что !== id
    // Id берем в компоненте list. Из деструктуризированного объекта. Ф-я onDelete будет вызываться с этим id
    // Те там метод передается в item уже с id  итам с ним будеты вызываться для удаления конкретного элемента по его собств id
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Домашка
    // Ф-я вызывается в формах и в кач-ве аргументов берет данные которые записан ф-й onValueChange при событии onChange
    // Ф-я будет вызыватся в формах ф-й submitValues()
    addItem = (newName, newSalary) => {
        this.setState(({data}) => {
            return {
                data: [...data, {name: newName, salary: newSalary, increase: false, rise: false, id: nextId()}]
            }
        })
    }

    onToggleIncrease = (id) => {
        console.log(`Increase this ${id}`);
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
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
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployessAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

// Экспорт его App в главный файл приложения index.js
export default App;