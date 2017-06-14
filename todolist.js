var table=[]
if(localStorage.length>0)
{
load();
afficher();
}
button.addEventListener("click",ajouter);
document.getElementById('todoinput').keypress;


window.addEventListener("keydown", function (event) {
  if (event.keyCode == 13){
    ajouter();
  }
});




function ajouter ()
{

                    var task = document.getElementById('todoinput').value;
                    if (task==='') {
                      alert("Le champ est vide!");

                    } else  {
                      document.getElementById('todoinput').value="";
                      var todo =  {
                         id : "task" + table.length,
                         name : task
                      }

                      table.push(todo)
                      afficher();
                      save();
                  }
                }

function afficher()
{
                    var code = '<ul>' ;
                    for (var i = 0; i < table.length; i++) {
                      code += '<li >' + table[i].name  + '<button class="remove" id="' + i + '">Supprimer</button>'+ '<button class="editer" id="' + i + '">Editer</button>'+ '</li>';
                       }

                    code += '</ul>';
                    document.getElementById('list').innerHTML=code;
                    //bouton remove
                      var buttons = document.getElementsByClassName('remove');
                      for (var i = 0; i < buttons.length; i++) {
                        buttons[i].addEventListener("click", enlever);
                      }
                    //bouton editer
                      var buttons = document.getElementsByClassName('editer');
                      for (var i = 0; i< buttons.length; i++){
                        buttons[i].addEventListener("click", editer);
                      }
                    }
function enlever()
{
                      var id = this.getAttribute('id');
                      table.splice(id, 1);
                      afficher();
                      save();
}
function editer()
{
                      var id = this.getAttribute('id');
                      var txt=prompt('edit task:');
                      table[id].name=txt;
                      afficher();
                      save();
}
function save()
{
                  localStorage.clear();
                  for ( var i = 0; i< table.length; i++) {
                      var myJSON = JSON.stringify(table[i]);
                      localStorage.setItem("Todo"+i,myJSON);
                    }
}
function load()
{
                  if (localStorage.length>0){
                      for ( var i = 0; i < localStorage.length; i++) {
                      table.push(JSON.parse(localStorage.getItem("Todo"+i)));
                    }
                  }
}
