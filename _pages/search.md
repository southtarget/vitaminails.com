---
layout: page
title: Buscador
permalink: /buscar/
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="Ingresa el termino que quieres buscar sobre uñas...">
    <ul id="results-container"></ul>
</div>

<script>
    SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<div style="text-align: left !important;"><a href="{url}"><h1 style="text-align:left !important;">{title}</h1></a><span style="text-align:left !important;">{date}</span></div>',
    json: '{{ site.url }}/search.json'
    });
</script>