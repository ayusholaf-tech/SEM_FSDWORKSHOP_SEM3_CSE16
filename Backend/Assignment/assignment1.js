import fs from "node:fs";
const filepath = "data.jason";

function createFile() {
    fs.writeFile(filepath, "Hello, World!", (err) => {
        if (err) {
            console.error("Error creating file:", err);
        } else {
            console.log("File created successfully.");
        }
    });
}
function readFile() {
    node.fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File contents:", data);
        }
    });
}
function updateFile() {
}
function deleteFile() {
}


createFile("hello");