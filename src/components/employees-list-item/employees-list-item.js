
import './employees-list-item.css';

// Указать пропс (деструктуризация)
// Пропс идет из app.js

// Для работы с состоянием переделаем наш компонент в классовый
// props - это объект с переданными в этот компонент св-ми выше по иерархии
const EmployeesListItem = (props) => {

    // Достаем из переданных пропсов переменные
    // в т.ч. ф-ю удаления
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

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
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span 
                style={{fontSize: 30}}
                onClick={onToggleProp} 
                data-toggle="rise" 
                className="list-group-item-label">{name + '.'}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>

                {/* У кнопки будет слушатель что меняет премию */}
                <button type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                    onClick={onToggleProp}>
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

export default EmployeesListItem;