// Компонент фильтрации для поисковой панели search-panel
// Класс btn-group тоже идет из bootstrap
// Остальные классы тоже

// Импортнем стиль для btn-group
import './app-filter.css'

const AppFilter = (props) => {

    // Переманная для значений кнопок чтобы было удобнее ими управлять
    // Это массив где объект это кнопка с name(ключ) и label(текст)
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'Зп больше 1000$'}
    ]

    // Это массив с сформированными кнопками где вытаскиваем name и label и подставляем в нужный атрибут
    // Возвращает готовую кнопку
    const buttons = buttonsData.map(({name, label}) => {
        // формирование класса кнопки для изменения ее класса
        // Аналог if (props.filter === name) {return true}
        // Из App мы получаем св-во filter и если это св-во будет равно одному из перебираемых элементов массива кнопок
        // То этоа кнопка получит класс активности btn-outline-light

        // Если active true/false то clazz получает один из параметров css 
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        // Событие на кнопке будет вызывать метод onFilterSelect() c аргументом name 
        return (
            <button 
                key={name}
                className={`btn ${clazz}`} 
                onClick={() => props.onFilterSelect(name)}
                type='button'>
                    {label}
            </button>
        )
    });

    // Массив с кнопками разворачивается и формирует их в верстке
    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

// Экспорт его
export default AppFilter;