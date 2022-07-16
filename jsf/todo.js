const todo_form = document.querySelector("form.todo-form")
const todo_input = document.querySelector("form.todo-form input")
const todo_list = document.querySelector(".todo-list")

let todo_storage = [];

function todo_storage_intolocal() {
    localStorage.setItem("todo", JSON.stringify(todo_storage))
}
function click_delete(event) {
    const delete_target = event.target.parentElement;
    //클릭한 데이터의 부모 태그를 찾음. 여기선 li가 됨.
    todo_storage = todo_storage.filter((element) => element.id !== parseInt(delete_target.id))
    //데이터를 지우는 과정//
    delete_target.remove()
    //화면상의 html을 버튼을 클릭함으로써 지움
    todo_storage_intolocal()
    //id를 지운 데이터 저장소를 다시 업데이트 시킴
}

function bucket_todo(newtodo) {
    const todo_li = document.createElement("li");
    todo_li.id = newtodo.id
    const todo_span = document.createElement("span");
    todo_span.innerText = newtodo.text;
    const todo_deletebox = document.createElement("button")
    todo_deletebox.innerText = "delete"
    todo_deletebox.addEventListener("click", click_delete)
    todo_li.appendChild(todo_span);
    todo_li.appendChild(todo_deletebox);
    todo_list.appendChild(todo_li);

}

function write_todo(event) {
    event.preventDefault();
    const newtodo = todo_input.value;
    const newtodoobj = {
        "text": newtodo,
        "id": Date.now(),
    }
    todo_input.value = "";
    todo_storage.push(newtodoobj)
    bucket_todo(newtodoobj);
    todo_storage_intolocal()
}

todo_form.addEventListener("submit", write_todo)

const save_localstorage = localStorage.getItem("todo");

if (save_localstorage !== null) {
    const parse_todo = JSON.parse(save_localstorage)
    todo_storage = parse_todo
    parse_todo.forEach(bucket_todo)
}

