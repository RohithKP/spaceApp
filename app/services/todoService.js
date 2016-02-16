angular.module('myApp').service('todoService', function ($filter) {
        var data = [
            {id:1, title:'todo 1',date:'12/02/2016',done:false},
            {id:2, title:'todo 2',date:'11/02/2016',done:false},
            {id:3, title:'todo 3',date:'11/02/2016',done:false},
            {id:4, title:'todo 4',date:'10/02/2016',done:false},
            {id:5, title:'todo 5',date:'11/02/2016',done:false},
            {id:6, title:'todo 6',date:'10/02/2016',done:false},
            {id:7, title:'todo 7',date:'12/02/2016',done:false},
            {id:8, title:'todo 8',date:'10/02/2016',done:false}
        ];

        return {
            todos:function () {
                return data;
            },
            addTodo:function (text,date) {
                console.log(date);
                var currentIndex = data.length + 1;
                data.push({
                    id:currentIndex, title:text,date:$filter('date')(date, "dd/MM/yyyy"),done:false
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
