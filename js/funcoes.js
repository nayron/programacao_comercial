function minhaFuncao1()
{
  $('#area-01').css({
    color: '#ff0000',
    textTransform: 'uppercase',
    width: 600
  });
};
function minhaFuncao2()
{
  var i;

  $('#area-02').empty();
    var alunos = ['Aluno 1','Aluno 2','Aluno 3','Aluno 4','Nayron' ];

    var j;

    $.each(alunos,function(index,value){
      $('#area-02').append(value);
    });


};

function minhaFuncao3()
{
  $('#area-02').empty();
  var alunos = [
    {
      nome:'Aluno 01',
      idade: 10
    },
    {
      nome:'Aluno 02',
      idade: 30
    },
    {
      nome:'Aluno 03',
      idade: 40
    },
    {
      nome:'Aluno 04',
      idade: 77
    },
    {
      nome:'Aluno 05',
      idade: 11
    }
  ];
  var i;
  for(i=0;i<5;i++){
    console.log(alunos[i]);
  }

  var list = $('#area-02').append('<ul></ul>').find('ul');
  $.each(alunos,function(index,value){
    list.append('li'+ value.nome + '-' + value.idade + '</li');
  })

};
