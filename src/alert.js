// option : {type,content}
function pushAlert(type,content) {
    const className = `alert ${type}`
    const alert = document.createElement("div");
    alert.className = className;
    alert.innerText = content;
    alert.innerHTML += getAlertIcon(type);
    document.body.appendChild(alert);
    setTimeout(()=>{
        alert.classList.add("active");
    },100)
    setTimeout(()=>{
        document.body.removeChild(alert);
        alert.classList.remove("active");
    },1500)
}

function getAlertIcon(type) {
    let iconName = "";
    switch(type) {
        case "warning":
            iconName = "warning";
            break;
        case "success":
            iconName = "checkmark-done";
            break;
        case "danger":
            iconName = "skull";
            break;
    }
    return `<ion-icon class='alert__icon' name="${iconName}-outline"></ion-icon>`
}
