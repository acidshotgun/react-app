// Импорт стилей
import './app-info.css';

// Первый компонеет AppInfo()
// Содержит сам div обертку с классом app-info
// И содержимое

const AppInfo = ({employees, increased}) => {

    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo; 