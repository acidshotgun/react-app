// Компонент поисковой панели
// Содержит input с двумя классами (они идут из bootstrap)

// Импорт стилей для главноей панели чтобы они импортировались в App  и применились там на эту панельку
import './search-panel.css';

const SearchPanel = () => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
        />
    );
}

// Экспорт ее
export default SearchPanel;