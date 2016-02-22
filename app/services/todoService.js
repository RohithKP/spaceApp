angular.module('myApp').service('todoService', function ($filter) {
       data = [
            {id:1455884285048, title:'todo 1',date:'12/02/2016',done:false,showDelete:false},
            {id:1455884285047, title:'todo 2',date:'12/02/2016',done:false,showDelete:false,},
            {id:1455884285045, title:'todo 4',date:'11/02/2016',done:false,showDelete:false,},
            {id:1455884285044, title:'todo 5',date:'11/02/2016',done:false,showDelete:false,},
            {id:1455884285046, title:'todo 3',date:'11/02/2016',done:false,showDelete:false,},
            {id:1455884285043, title:'todo 6',date:'10/02/2016',done:false,showDelete:false,},
            {id:1455884285042, title:'todo 7',date:'10/02/2016',done:false,showDelete:false,},
            {id:1455884285041, title:'todo 8',date:'10/02/2016',done:false,showDelete:false,}
        ];

        return {
            todos:function () {
                return data;
            },
            addTodo:function (text,date) {
                console.log(date);
                var currentIndex = data.length + 1;
              console.log(currentIndex);
                data.unshift({
                    id:Date.now(), title:text,date:$filter('date')(date, "dd/MM/yyyy"),done:false
                });
            },
            deleteTodo:function (id) {
                var oldTodos = data;
                data = [];
                angular.forEach(oldTodos, function (item) {
                    if (item.id !== id) data.push(item);
                });
              console.log(data);
            }
        };
    });
