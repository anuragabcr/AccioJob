employees = document.getElementById("employees")
msg = document.getElementById("msg")
empList = []

function onSubmit() {
    fname = document.getElementById("name").value
    profession = document.getElementById("profession").value
    age = document.getElementById("age").value
    if (fname == '' || profession == '' || age == '') {
        msg.innerHTML = `<p class="error">Error: Please Make sure All the fields are filled before adding in an employee!<p>`
        return
    }
    else {
        msg.innerHTML = `<p class="success">Success: Employee Added!<p>`
        empList.push({'id': empList.length+1,fname, profession, age})
        createTable()
        console.log(JSON.stringify(empList));
    }
}

function createTable() {
    empDiv = ''
    empList.forEach((emp, i) => {
        empDiv += `<div class="empList">
                        <div class="empItem">
                            <span>${i+1}.</span>
                            <span>Name: ${emp.fname}</span>
                            <span>Profession: ${emp.profession}</span>
                            <span>Age: ${emp.age}</span>
                        </div>
                        <button onclick=deleteUser(${i})>Delete User</button>
                    </div>`
    });
    employees.innerHTML = empDiv
}

function deleteUser(index) {
    empList.splice(index, 1)
    createTable()
}

if (empList.length == 0) {
    employees.innerHTML = `<p class="empty">You have 0 Employees.<p>`
}
