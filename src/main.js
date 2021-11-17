import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//Dit gaat wij niet gebruiken
//C#
// string firstname ="Collin";
// int number1 = 5;

//ES5
/*var firstname ="Collin";
var name ="Van der Vorst";

for (var i = 0; i< 10; i++)
{
  //print(i);
  console.log(i);
}
console.log(i);

//ES6 CONST VS LET
const firstname ="Collin";
console.log(firstname);

for(let index =0; index <10; index++)
{
  console.log(index);
  if(true)
  {
    var variabel = true;
  }
}

// ES5 Concatenataion

var firstname = 'collin';
var lastname="van der vorst";
console.log(firstname + " " + lastname);*/
