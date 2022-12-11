document.getElementById('search-button').addEventListener('click', () => {
    const search_text = document.getElementById('search-text')
    const style = getComputedStyle(search_text)
    console.log(style.display);
    if (style.display === 'none'){
        search_text.style.display = 'block';
    }
    else if (style.display === 'block'){
        search_text.style.display = 'none';
    }
})