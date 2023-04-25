// Компонент поисковой панели
// Содержит input с двумя классами (они идут из bootstrap)
import { Component } from 'react';

// Импорт стилей для главноей панели чтобы они импортировались в App  и применились там на эту панельку
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    // Метод будет отслеживать по событию onChange значение ввода в переменную и затем стостояние term
    // После будет вызвана ф-я из  App onUpdateSearch с аргументом term и запускаться внутри App с аргументом
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        );
    }
}

// Экспорт ее
export default SearchPanel;