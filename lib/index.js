import { stalkSomeone } from "./clearbit";

//1. select button(#clearbitSubmit)  and the input (#clearbitEmail) and select fields we need to populate
const submitButton = document.querySelector("#clearbitSubmit");

//2. listen the event(click on submits)
submitButton.addEventListener("click", stalkSomeone);