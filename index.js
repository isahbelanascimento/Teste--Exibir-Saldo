var ezc = 300
var mensagem = "Você não possui saldo :(";

if (ezc > 0) 
 mensagem = ("Saldo Disponível= " + ezc);

else if (ezc < 0) 
  mensagem = ("Você esta negativado em " + ezc);

alert (mensagem)