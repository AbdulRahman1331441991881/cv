var i1 = document.getElementById('i1'),
    i2 = document.getElementById('i2'),
    list_madia = document.getElementById('list_madia');


i1.addEventListener('click', () => {
    list_madia.style.display = 'flex';
});
i2.addEventListener('click', () => {
    list_madia.style.display = 'none';
});