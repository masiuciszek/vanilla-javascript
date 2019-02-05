const removeFirstApp = apps => {
    return apps.slice(1)
}


const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
// console.log(removeFirstApp(apps));

const removeSecondApp = apps => {
    let newArr = apps.splice(1,2);
    return newArr;

}

console.log(removeSecondApp(apps));

