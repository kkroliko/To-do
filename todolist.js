var table=[]

button.addEventListener("click",ajouter);

function ajouter () {
                    var task = document.getElementById('todoinput').value;
                    if (document.getElementById('todoinput').value ==='') {
                      alert("Le champ est vide!");

                    } else {
                      table.push(task);
                      afficher();
                  }
                }

function afficher(){
                    var code = '<ul>' ;
                    for (var i = 0; i < table.length; i++) {
                      code += '<li class="checked">' + table[i]  + '<button class="remove" id="' + i + '">Supprimer</button>'+ '<button class="editer" id="' + i + '">Editer</button>'+ '<button class="fait" id="' + i + '">Fait</button>'+ '</li>';
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
                      for (var i = 0; i < buttons.length; i++) {
                        buttons[i].addEventListener("click", editer);
                      }
                    //bouton Fait
                      var buttons = document.getElementsByClassName('fait');
                      for (var i = 0; i < buttons.length; i++){
                        buttons[i].addEventListener("click", fait);
                      }
                    }
function enlever(){
                  var id = this.getAttribute('id');
                  table.splice(id, 1);
                  afficher();
                  }
function editer(){
  var id = this.getAttribute('id');
  var txt=prompt('edit task:');
  table.splice(id,1,txt);
  afficher();
   }

function fait(){
  var id = this.getAttribute('id');
  afficher();
}
