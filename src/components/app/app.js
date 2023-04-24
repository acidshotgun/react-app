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
                {name: 'Alisa J', salary: 1000, increase: false, rise: true, id: nextId()},
                {name: 'Tom W', salary: 1000, increase: true, rise: false, id: nextId()},
                {name: 'Mike W', salary: 3000, increase: false, rise: false, id: nextId()},
                {name: 'Aleksandr Z', salary: 5000, increase: false, rise: false, id: nextId()},
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

    // Сложный вар добавления печеньки
    // Получаем индекс нажатого элемента
    // Создаем переменную old с копией нажатого объекта
    // Создаем новый объект в который помещаем старый (...old) но меняем параметр печеньки на противоположный
    // Создаем новый массив в который будет записана копия старого до нажатого объекта + новый объект + объекты после
    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase}
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         // В data записывается новый измененный массив объектов
    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    // Простой вар
    // Будет возвращен сразу объект, вместо первого объекта state, у которого будет св-во data, поэтому после ({data}) круглые скобки
    // Те state data меняется на новый data
    // В data записываем результат data.map() тк map возвращает новый объект
    // И если выбранный элемент по id совпадает с нажатым id то возвращаем объект в который расзворачиваем item с измененным prop
    // Если условие не совпало то просто возвращаем этот объект (item)
    // Так возвращается массив объектов но с одним новым измененным зн-м

    // Второй аргумент prop получается при вызове ф-и и зависит от data атрибута выбранного элемента
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        // Переменные для хранения штата и сотрудников с премиями
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />
    
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
                    onToggleProp={this.onToggleProp}
                />
                <EmployessAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

// Экспорт его App в главный файл приложения index.js
export default App;