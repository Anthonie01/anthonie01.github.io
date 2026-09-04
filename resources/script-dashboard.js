/*automatic replacement of class status based on grade*/
function UpdateStatuses() {
    document.querySelectorAll("tr").forEach(row => {
        const status = row.querySelector(".status")
        const grade = row.querySelector(".grade")
        const ec =row.querySelector(".ec")
        if (!status || !grade) {
            return;
        }

        const gradeValue = parseFloat(grade.textContent)

        status.classList.remove(
            "status-in-progress",
            "status-passed",
            "status-failed"
        );

        if (isNaN(gradeValue)) {
            status.classList.add("status-in-progress");
        }
        else if (gradeValue >= 5.5) {
            status.classList.add("status-passed");
        }
        else {
            status.classList.add("status-failed");
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    UpdateStatuses();
});

/*automatic change of the progress bar*/
function UpdateStatuses() {

}
/*if  (const passed = true){
    ec + 5*/