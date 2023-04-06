// Импорт стилей
import './app-info.css';

// Первый компонеет AppInfo()
// Содержит сам div обертку с классом app-info
// И содержимое

const AppInfo = () => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудеиков: </h2>
            <h2>Премию получат: </h2>
        </div>
    )
}

export default AppInfo; 