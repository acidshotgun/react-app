// Это компонент списка сотрудников

// Сюда импортируем компонет который будет содержать ин-ю о сотруднике
// Основной компонет будет ипортирован в App вместе с 3 внутренними

// Это элемент списка и он будет находится в ul списке
// Поэтому мы импортируем этот компонент сюда
// так мы его переиспользуем

// app-list дополнительно стилизуем

import EmployeesListItem from '../employees-list-item/employees-list-item.js';

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmployeesList;