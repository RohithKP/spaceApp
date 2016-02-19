angular.module('myApp').service('todoService', function ($filter) {
       data = [
            {id:1, title:'todo 1',date:'12/02/2016',done:false,showDelete:false,dateAdded:1455884285041},
            {id:2, title:'todo 2',date:'11/02/2016',done:false,showDelete:false,dateAdded:1455884285042},
            {id:3, title:'todo 3',date:'11/02/2016',done:false,showDelete:false,dateAdded:1455884285043},
            {id:4, title:'todo 4',date:'10/02/2016',done:false,showDelete:false,dateAdded:1455884285044},
            {id:5, title:'todo 5',date:'11/02/2016',done:false,showDelete:false,dateAdded:1455884285045},
            {id:6, title:'todo 6',date:'10/02/2016',done:false,showDelete:false,dateAdded:1455884285046},
            {id:7, title:'todo 7',date:'12/02/2016',done:false,showDelete:false,dateAdded:1455884285047},
            {id:8, title:'todo 8',date:'10/02/2016',done:false,showDelete:false,dateAdded:1455884285048}
        ];

        return {
            todos:function () {
                return data;
            },
            addTodo:function (text,date) {
                console.log(date);
                var currentIndex = data.length + 1;
                data.unshift({
                    id:currentIndex, title:text,date:$filter('date')(date, "dd/MM/yyyy"),done:false,dateAdded:Date.now()
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
