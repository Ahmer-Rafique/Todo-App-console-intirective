import inquirer from 'inquirer';
//todos= done
//function=done
//opreation=?
let todos:string[] = ["Ahmer", "Mamoon","Abdul Basit", "Anas" ];
async function CreatTodos(todos:string[]) {
   
   do{
    const ans = await inquirer.prompt({
        type: "list",
        message: "Select the options ",
        name: "slect",
        choices: ["add", "update", "view", "delete"]
    });
    if(ans.slect== "add"){
        const addTodos = await inquirer.prompt({
            type:"input",
            message:"Add item",
            name:"todo"
        })
        todos.push(addTodos.todo);
        console.log(todos);
    };
    if(ans.slect== "update"){
        const updateTodo = await inquirer.prompt({
            type:"list",
            message:"Select Update item",
            name:"update",
            choices:todos.map(item=>item),
        });
        const addTodos = await inquirer.prompt({
            type:"input",
            message:"Add New item",
            name:"todo"
        });
        let newTodo = todos.filter(val=>val !== updateTodo.update);
        todos = [...newTodo, addTodos.todo];
        console.log(todos);

    };
    if(ans.slect== "view"){
        console.log(todos);
    };
    if(ans.slect== "delete"){
        const deleteTodo = await inquirer.prompt({
            type:"list",
            message:"Select Delete item",
            name:"update",
            choices:todos.map(item=>item),
        });
        let newTodo = todos.filter(val=>val !== deleteTodo.update);
        todos=[...newTodo];
        console.log(todos);
    };
   }while(true);
   
};

CreatTodos(todos);
