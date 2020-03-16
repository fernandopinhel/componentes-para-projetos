// carregando divs do select
$(function() { //onload aqui
  $('#componentes').on('change', function() {
    $('.div-sel').hide();
    let idSelecionado = $(this).val(); //construir o id
    if (idSelecionado != "") $("#" + idSelecionado).show(); //mostrar o elemento
  });

  $('#componentes').trigger("change"); //aplicar a lógica do change
})
// fim carregando divs do select
