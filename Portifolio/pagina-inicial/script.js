const check = document.querySelector("#check");
function darkmode(){
	var elemento = document.body;
	var botao = document.getElementsByClassName("btoao");
	elemento.classList.toggle("dark")
	botao.classList.toggle("darkbutonn")
}
function MascaraTell(telefone){
	const TextoAtual = telefone.value;
	const Celular = TextoAtual.length === 9;
	let TextoAjustado;
	if(Celular){
		const parte1 = TextoAtual.slice(0,5);
		const parte2 = TextoAtual.slice(5,9);
		TextoAjustado = `${parte1}-${parte2}`
	}
	else{
		const parte1 = textoAtual.slice(0,4);
        const parte2 = textoAtual.slice(4,8);
        textoAjustado = `${parte1}-${parte2}`
	}
	telefone.value = TextoAjustado;
}
function tiraHifen(telefone){
	const TextoAtual = telefone.value;
	const TextoAjustado = TextoAtual.replace(/\-/g,'');

	telefone.value = TextoAjustado;
}
//relogio
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(()=>{
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hour.innerHTML = `${formatTime(hours)}`;
	min.innerHTML = `${formatTime(minutes)}`;
	sec.innerHTML = `${formatTime(seconds)}`
}, 1000)

function formatTime(time){
	return (time < 10) ? `0${time}` : time;
}







