const input = document.getElementById('input');
const infectados = document.getElementById('infectados');
const recuperados = document.getElementById('recuperados');
const fallecidos = document.getElementById('fallecidos');


input.addEventListener('change', e => {
    let endpoint;
    const texto = e.target.value; 
    
    if ( texto === 'Global' ) {        
        endpoint = 'https://covid19.mathdro.id/api';    
    } else {
        endpoint = `https://covid19.mathdro.id/api/countries/${texto}`;
    }
    
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        infectados.textContent = data.confirmed.value;
        recuperados.textContent = data.recovered.value;
        fallecidos.textContent = data.deaths.value;
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })
    
    
    input.blur()
})
//eventos para limpiar el input blur y ''vacios 
input.addEventListener('focus', e => {
    input.value='';
})