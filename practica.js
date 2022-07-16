// function getEmail(user)
// {
//     return user[0];
// }
// const user =
// {
//     [
//         { name: "Erik", email: "erik@academlo.com", age: 20 },
//         { name: "Georg", email: "georg@academlo.com", age: 30 },
//         { name: "Daniel", email: "daniel@academlo.com", age: 40 }
//     ]
// }
// console.log(getEmail(user));
//function orderStudentsByScore(students) {
//     return students.sort(function(a,b){
//       if(a.score < b.score){
//          return -1
   
//       }
   
//       if(a.score > b.score) {
//          return 1
//       }
   
//       return 0// 
//    });
   
// //    }
//    const usuarios =[
//     { name: "Erik", email: "erik@academlo.com", age: 20 },
// { name: "Georg", email: "georg@academlo.com", age: 30 },
// { name: "Daniel", email: "daniel@academlo.com", age: 40 }

// ]
// function getEmails(users) { //esto extrae la informacion solicitada de el objeto y lo transforma en una array
// const age =[]
//     for (let i = 0; i < users.length; i++) {
//         age.push(users[i].name);

//     }
// return age;
//     }
// console.log(getEmails(usuarios));
// // // //const email = "erik@academlo.com";
//este es el ejersicio 7 de replit, utilizo para eliminar una arrey y 
//y mostrae la arrey como quedo con lo eliminado

// const users = [        //esta es la informacion(array) uno de ellos lo vamos a eliminar     
//     { name: 'Erik',
//      email: 'erik@academlo.com' },
//       { name: 'Georg', 
//       email: 'georg@academlo.com' }, 
//       { name: 'Andrea', 
//       email: 'andrea@gmail.com' }];
    
// function deleteUser(users, email)   //esta funcios contiene la informacion
// {                                   //a eliminar(users) y (email) el cual recive el parametro que vamos a eliminar   
//     let del = "andrea@gmail.com";   //declaro una variable la cual contiene a email
//     for (let i=0; i<users.length; i++)  //seguido un for para recorrer el arreglo
//     {
//         if(del===users[i].email)    //un if de la variable eliminadora si fuera igual a el for
//         {
//             let pru = i;            //declaro una variable que contenga el deniminador o contador del for
//             users.splice(pru, 1);   //utilizo splice para eliminar pru de la array
//         }
//     }
//     return users;                    //retorno la array como quedo
// }
// // console.log(deleteUser(users,));     //muestro en consola como quedo
// const users =
// [
//     { name: 'Georg', email: 'georg@academlo.com' },
//   { name: 'Andrea', email: 'andrea@gmail.com' }
// ]
// const attendances = 
// [
//     {email: 'andrea@gmail.com', attendance: false},
//     { email: 'georg@academlo.com', attendance: true },
// ]
// function mergeData(users, attendances)
// {
//   let pri = [];
//   pri = [].concat(users);
//   for(let i = 0; i < users.length; i++)
//   {
//     if (users[i].email === attendances[i].email)
//     {
//       pri[i].attendances = attendances[i].attendance;
//     }
//   }
//   return pri;
// }
// console.log(mergeData(users, attendances));
const students=[
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
];
function countApplicationsByChannel(students)
{
  let cons = [];
  let cont = {};
  cons=[].concat(students);
  for(let i = 0; i<students.length; i++)
  {
    if(students[i].channel === cons.channel)
    {
      cont[channel] += 1;
    }
    else
    {
      cont[channel]= 1;
    }
  }
  return cont;
}
console.log(countApplicationsByChannel(students));
  