import { Component } from 'react';
import './employees-add-form.css';

class EmployessAddForm extends Component {
    constructor(props) {
        super(props);
        // Указываем состояния name и salary которые будут совпадать с атрибутом value="" в инпутах
        // Так запись будет идти непосредственно в эти состояние, а не создавать другие
        this.state = {
            name: '',
            salary: '',
        }
    }

    // Этот метод должен записывать зн-я в state. Один метод под два input
    // Записывает зн-я в name и salary
    // Событие onChange - это аналог onInput (в React)
    // setState() можно использовать без state тк мы не привязаны к первоначальнову зн-ю
    // Нам важен только результат, но с callback state тоже можно
    onValueChange = (event) => {
        this.setState({
            // Такой синтаксис(ES6) [] позволяет записывать в состояния введенные зн-я ссылаясь на атрибут name у input
            // Таким образом инпут name записывает значения в состояние name получаемое из value на одном объекте события
            // А инпут name salary в состояние salary 
            [event.target.name]: event.target.value,
        })
    }

    submitValues = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: '',
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.submitValues}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        name='name'
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary} />
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployessAddForm;