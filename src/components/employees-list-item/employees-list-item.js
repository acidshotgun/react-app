// это компонент элемента в списке сотрудников
// Содержащий ин-ю
import { Component } from 'react';
import './employees-list-item.css';

// Указать пропс (деструктуризация)
// Пропс идет из app.js

// Для работы с состоянием переделаем наш компонент в классовый
// props - это объект с переданными в этот компонент св-ми ниже по иерархии
class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    // Тут будет использован callback тк идет зависимость от предыдущего состояния increase: false/true
    // Внутри callback исользуется state(состояние) и чтобы не прописывать путь к нужному состоянию
    // Деструктуризацией мы напрямую обратились к ({increase})
    // - !increase говорит что св-во будет противоположное тому что было до
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase,
        }))
    }

    // Метод, меняющий состояние звездочки
    onLike = () => {
        this.setState(({like}) => ({
            like: !like,
        }))
    }

    render() {
        // Достаем из переданных пропсов переменные
        // в т.ч. ф-ю удаления
        const { name, salary, onDelete } = this.props;
        // increase теперь мы получаем не из пропса а из состояния (там находится то что динамически меняется как раз)
        // Так же и like
        const { increase, like } = this.state;

        // Структура будет формироваться исходя из переданных из БД свойств
        // Имя ЗП и премия
        // Чтобы указать премию мы проверяем ее статус в БД true/false
        // Если true, то к верстке присоеденим ' increase'
        // Сам класс верстки формируется из переменной classNames
        let classNames = "list-group-item d-flex justify-content-between";

        // Тут логическая проверка increase будет определять цвет премии
        // Изначально премии нет но при нажатии на печенье true то премия есть
        if (increase) {
            classNames += ' increase';
        }

        // Проверка звездочки
        if (like) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>

                    {/* У кнопки будет слушатель что меняет премию */}
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }    
}

export default EmployeesListItem;