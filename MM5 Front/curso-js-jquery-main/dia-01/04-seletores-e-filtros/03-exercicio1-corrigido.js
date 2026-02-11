$(document).ready(function () {
	// 1. Adiciona a classe 'completo' ao primeiro item da lista.
	$(".item-pendente:first").addClass("completo");

	// 2. Muda a cor de fundo do último item.
	$("#lista-afazeres li:last").css("background-color", "#ffdddd");

	// 3. Faz o segundo item da lista desaparecer.
	$("li:eq(1)").hide();
});
