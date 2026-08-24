import { EventEmitter } from "node:events";

function createDOMElement() {
    const emitter = new EventEmitter();


    return {
        addEventListener: function (eventName, callback) {
            emitter.on(eventName, callback);
        },

        removeEventListener: function (eventName, callback) {
            emitter.off(eventName, callback);
        },

        dispatchEvent(event) {
            emitter.emit(event.type, event);
        },
    };
}

const button = createDOMElement();
button.addEventListener("click", () => {
    console.log("Button clicked!");
})
function handleclick(event) {
    console.log("Button clicked!");
}
button.addEventListener("click", handleclick);
button.dispatchEvent({ type: "click" });
button.removeEventListener("click", handleclick);
button.dispatchEvent({type:"save"});
