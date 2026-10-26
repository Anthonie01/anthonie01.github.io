/*automatic replacement of class status based on grade*/
function updateStatuses() {
    document.querySelectorAll("tr").forEach(row => {
        const status = row.querySelector(".status")
        const grade = row.querySelector(".grade")
        const ec = row.querySelector(".ec")
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

updateStatuses();

/* These functions update the progress bar*/

/**
 * 
 * @param {int} progress the progress as a percentage
 * it updates the progress bar. 
 */
function updateBar(progress) {
    const loadingBar = document.getElementById("progress-fill-in");
    loadingBar.style.width = `${progress}%`;
}

/**
 * 
 * @param {int} number  
 * @returns a passing grade
 */
function filtEc(number) {
    if (number >= 5.5) {
        return true;
    }
    return false;
}

/**
 * 
 * @returns progress. It grabs ec and grade then check if it succeeded
 */
function getProgress() {
    let ecGained = 0;
    document.querySelectorAll("tr").forEach(row => {
        const ec = row.querySelector(".ec");
        const grade = row.querySelector(".grade");

        if (!ec || !grade) return;

        const gradeValue = parseFloat(grade.textContent);
        const ecValue = parseFloat(ec.textContent);

        if (!isNaN(gradeValue) && filtEc(gradeValue)) {
            ecGained += ecValue;
        }
    });

    return ecGained
}

updateBar(getProgress() / 60 * 100);

/**
 * Update the progress text to show current EC in number and percentage format.
 */
function updateProgressText() {
    const progressText = document.querySelector(".progress-text");
    const ecGained = getProgress();
    progressText.textContent = `${ecGained} / 60 EC (${Math.round(ecGained / 60 * 100)}%)`;
}
updateProgressText();