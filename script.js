//sätter username till kristian i localStorage
localStorage.setItem("username", "kristian");

//sätter username till kristian i localStorage
sessionStorage.setItem("theme", "darkmode");

//hämtar data från localStorage och sessionStorage
console.log(localStorage.getItem("username"));
console.log(sessionStorage.getItem("theme"));

//rensar localStorage och sessionStorage
localStorage.clear()
sessionStorage.clear()

//Cookies
document.cookie = "name=Kristian;" //sätter cookien name till kristian
document.cookie = "color=green;" //sätter en till cookie. Notera att det bara är att skriva =.
console.log(document.cookie)

/* 
1. localStorage setItem, getItem
2. sessionStorage
3. cookies
*/
