import React, { Component } from 'react'

import './styles.css'

export default class TextArea extends Component{
    constructor(props){
        super(props)
        
        this.state = { value: "" }

        this.handleChange = this.handleChange.bind(this)

        this.handleUpperCase = this.handleUpperCase.bind(this)
        this.handleLowerCase = this.handleLowerCase.bind(this)
        this.handleTitleCase = this.handleTitleCase.bind(this)
        this.handleSentenceCase = this.handleSentenceCase.bind(this)

    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleUpperCase(event){
        this.setState({value: this.state.value.toUpperCase()})
        event.preventDefault()
    }

    handleLowerCase(event){
        this.setState({value: this.state.value.toLowerCase()})
        event.preventDefault()
    }

    handleTitleCase(event){
        let text = this.state.value

        text = text.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        
        this.setState({value: text})
        event.preventDefault()
    }

    handleSentenceCase(event){
        let text = this.state.value
        text = text.toLowerCase()

        text = text.replace(/(^\s*\w|[.!?]\s*\w)/g, function(letter){
            return letter.toUpperCase();    
        }).trim();
        
        this.setState({value: text})
        event.preventDefault()
    }

    render (){ 
        return(
            <div className="container-all">
                <form className="container-text">

                    <div className="toolbar">
                        <button className="button" onClick={this.handleTitleCase} type="submit">Title Case</button>
                        <button className="button" onClick={this.handleUpperCase} type="submit">Upper Case</button>
                        <button className="button" onClick={this.handleLowerCase} type="submit">Lower case</button>
                        <button className="button" onClick={this.handleSentenceCase} type="submit">Sentence Case</button>
                    </div>

                    <textarea
                        name="text"
                        className="text-area" 
                        placeholder='Digite ou Cole o Texto'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>

                <div></div>

                <div></div>

                <div></div>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Title Case</h3>
                            <p>
                                O Text Editor é perfeito para quem não sabe como nomear um próximo ensaio. Essencialmente, garante que as letras corretas sejam maiúsculas no contexto de um título. 
                                Palavras como "ara" ficarão todas em minúsculas e as palavras importantes serão convertidas. Selecione o Campo "Title Case".
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Upper Case</h3>
                            <p>
                                O transformador em maiúsculas aceita qualquer texto que você possui e gera todas as letras em maiúsculas. Essencialmente, transformará todas as letras minúsculas em maiúsculas.
                                Para fazer isso, basta selecionar o texto que você precisa alterar e colar na caixa acima e selecionar a guia "Upper Case".
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Lower Case</h3>
                            <p>
                                Se você está se perguntando como remover o texto em maiúsculas, ele transforma todas as letras do texto em letras minúsculas. Simplesmente copie o texto que você precisa gerar em letras minúsculas e cole o texto na caixa acima e selecione a guia "Lower Case".
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Sentece Case</h3>
                            <p>
                                O conversor permitirá que você cole qualquer texto que desejar e o transformará automaticamente em uma sentença estruturada.
                                Funciona com letras maiúsculas na primeira letra de cada frase após um ponto. A primeira letra do texto também é incluida, cole o texto e selecione campo "Sentence Case".
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

