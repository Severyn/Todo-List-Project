let whatToDo = prompt("What would you like to do?");
let listsToDo = [];

while (whatToDo) {
    if (whatToDo === 'q') break;
    whatToDo = prompt("What would you like to do?");
    let newToDo;
    if (whatToDo === 'new') {
        newToDo = prompt("Enter new todo");
        listsToDo.push(newToDo);

    }
    if (whatToDo === 'list') {
        console.log('****');
        for (let l in listsToDo) {
            console.log(
                `${l}: ${listsToDo[l]}`
            )
        }
        console.log('****');
    }
    if (whatToDo === 'd') {
        listsToDo.pop(newToDo);
    }
}
