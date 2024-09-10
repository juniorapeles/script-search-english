// ==UserScript==
// @name         Tradutor de Pesquisa para Inglês
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Traduz automaticamente texto em PT para EN e pesquisa no Google
// @author       Eli
// @match        https://www.google.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Cria o botão
    const button = document.createElement('button');
    button.textContent = 'Traduzir e Pesquisar';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = 1000;

    // Adiciona o botão ao corpo da página
    document.body.appendChild(button);

    // Ação do botão
    button.addEventListener('click', function() {
        var texto = prompt("Digite o que deseja pesquisar:");
        if (texto) {
            var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=en&dt=t&q=" + encodeURIComponent(texto);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    var traducao = data[0][0][0];
                    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(traducao);
                });
        }
    });
})();



