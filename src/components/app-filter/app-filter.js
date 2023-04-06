// Компонент фильтрации для поисковой панели search-panel
// Класс btn-group тоже идет из bootstrap
// Остальные классы тоже

// Импортнем стиль для btn-group
import './app-filter.css'

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button 
                className="btn btn-light" 
                type='button'>
                    Все сотрудники
            </button>

            <button 
                className="btn btn-outline-light" 
                type='button'>
                    На повышение
            </button>

            <button 
                className="btn btn-outline-light" 
                type='button'>
                    Зп больше 1000$
            </button>
        </div>
    );
}

// Экспорт его
export default AppFilter;