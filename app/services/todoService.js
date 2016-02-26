// angular.module('myApp').service('todoService',['$filter','jsonService', function ($filter,jsonService) {
//         return {
//             todos:function () {
//                 return data;
//             },
//             addTodo:function (text,date) {
//                 data.unshift({
//                     id:Date.now(), title:text,date:$filter('date')(date, "dd/MM/yyyy"),done:false
//                 });
//             },
//             deleteTodo:function (id) {
//                 var oldTodos = data;
//                 data = [];
//                 angular.forEach(oldTodos, function (item) {
//                     if (item.id !== id) data.push(item);
//                 });
//               console.log(data);
//             }
//         };
//     }]);
