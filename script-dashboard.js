function UpdateStatuses() {
    document.querySelectorAll("tr").forEach(row => {
        const status = row.querySelector(".status")
        const grade = row.querySelector(".grade")

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
