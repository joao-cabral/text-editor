(this["webpackJsonptext-editor"]=this["webpackJsonptext-editor"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(3),r=t.n(s),c=t(4),o=t(5),i=t(1),m=t(6),u=t(7),d=(t(13),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({value:e.target.value})},n.state={value:""},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.handleUpperCase=n.handleUpperCase.bind(Object(i.a)(n)),n.handleLowerCase=n.handleLowerCase.bind(Object(i.a)(n)),n.handleTitleCase=n.handleTitleCase.bind(Object(i.a)(n)),n.handleSentenceCase=n.handleSentenceCase.bind(Object(i.a)(n)),n}return Object(o.a)(t,[{key:"handleUpperCase",value:function(e){this.setState({value:this.state.value.toUpperCase()}),e.preventDefault()}},{key:"handleLowerCase",value:function(e){this.setState({value:this.state.value.toLowerCase()}),e.preventDefault()}},{key:"handleTitleCase",value:function(e){var a=this.state.value;a=a.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "),this.setState({value:a}),e.preventDefault()}},{key:"handleSentenceCase",value:function(e){var a=this.state.value;a=(a=a.toLowerCase()).replace(/(^\s*\w|[.!?]\s*\w)/g,(function(e){return e.toUpperCase()})).trim(),this.setState({value:a}),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-all"},l.a.createElement("form",{className:"container-text"},l.a.createElement("div",{className:"toolbar"},l.a.createElement("button",{className:"button",onClick:this.handleTitleCase,type:"submit"},"Title Case"),l.a.createElement("button",{className:"button",onClick:this.handleUpperCase,type:"submit"},"Upper Case"),l.a.createElement("button",{className:"button",onClick:this.handleLowerCase,type:"submit"},"Lower case"),l.a.createElement("button",{className:"button",onClick:this.handleSentenceCase,type:"submit"},"Sentence Case")),l.a.createElement("textarea",{name:"text",className:"text-area",placeholder:"Digite ou Cole o Texto",value:this.state.value,onChange:this.handleChange})),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Title Case"),l.a.createElement("p",null,'O Text Editor \xe9 perfeito para quem n\xe3o sabe como nomear um pr\xf3ximo ensaio. Essencialmente, garante que as letras corretas sejam mai\xfasculas no contexto de um t\xedtulo. Palavras como "ara" ficar\xe3o todas em min\xfasculas e as palavras importantes ser\xe3o convertidas. Selecione o Campo "Title Case".'))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Upper Case"),l.a.createElement("p",null,'O transformador em mai\xfasculas aceita qualquer texto que voc\xea possui e gera todas as letras em mai\xfasculas. Essencialmente, transformar\xe1 todas as letras min\xfasculas em mai\xfasculas. Para fazer isso, basta selecionar o texto que voc\xea precisa alterar e colar na caixa acima e selecionar a guia "Upper Case".'))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Lower Case"),l.a.createElement("p",null,'Se voc\xea est\xe1 se perguntando como remover o texto em mai\xfasculas, ele transforma todas as letras do texto em letras min\xfasculas. Simplesmente copie o texto que voc\xea precisa gerar em letras min\xfasculas e cole o texto na caixa acima e selecione a guia "Lower Case".'))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Sentece Case"),l.a.createElement("p",null,'O conversor permitir\xe1 que voc\xea cole qualquer texto que desejar e o transformar\xe1 automaticamente em uma senten\xe7a estruturada. Funciona com letras mai\xfasculas na primeira letra de cada frase ap\xf3s um ponto. A primeira letra do texto tamb\xe9m \xe9 incluida, cole o texto e selecione campo "Sentence Case".')))))}}]),t}(n.Component));var p=function(){return l.a.createElement(d,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5fef7b24.chunk.js.map