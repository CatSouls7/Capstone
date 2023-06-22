function thisFunction(item) {


    const modal = document.querySelector("#" + item);

    modal.showModal();

}

function closeFunction(item) {

    const modal = document.querySelector("#" + item);

    console.log("Working");
    modal.close();

}