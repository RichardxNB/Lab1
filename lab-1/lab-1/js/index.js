 

const actionButton = document.querySelector("#action-button");
const dialogue = document.querySelector("#dialogue");
const closeButton = document.querySelector("#close-button");

// call-to-action button
actionButton.addEventListener("click", onActionButton);
// close dialog button
closeButton.addEventListener("click", onCloseButton);

// call-to-action button
function onActionButton(e) {
    dialogue.showModal();
}
// close dialog button
function onCloseButton(e) {
    dialogue.close();
}

