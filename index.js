//puxa o HTML dos outros arquivos para o página principal
document.querySelectorAll('[pagina]').forEach(link => {
    const conteudo= document.getElementById('conteudo')
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('pagina'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    document.getElementById("carrossel").style.display = "none";
    }
})

