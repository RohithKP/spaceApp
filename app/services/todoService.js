angular.module('myApp').service('todoService', function () {
        var data = [
            {id:1, title:'Note 1',team:'two'},
            {id:2, title:'Note 2',team:'one'},
            {id:3, title:'Note 3',team:'one'},
            {id:4, title:'Note 4',team:'two'},
            {id:5, title:'Note 5',team:'three'},
            {id:6, title:'Note 6',team:'one'},
            {id:7, title:'Note 7',team:'two'},
            {id:8, title:'Note 8',team:'three'}
        ];

        return {
            notes:function () {
                return data;
            },
            addNote:function (noteTitle) {
                var currentIndex = data.length + 1;
                data.push({
                    id:currentIndex, title:noteTitle,team:'one'
                });
            },
            deleteNote:function (id) {
                var oldNotes = data;
                data = [];
                angular.forEach(oldNotes, function (note) {
                    if (note.id !== id) data.push(note);
                });
            }
        };
    });
