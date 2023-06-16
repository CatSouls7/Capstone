/*function myFunction(item) {
    var x = document.getElementById(item.id);
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
} */

function thisFunction(item) {


    const modal = document.querySelector("#" + item);

    modal.showModal();

}

function closeFunction(item) {

    const modal = document.querySelector("#" + item);

    console.log("Working");
    modal.close();

}