function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function checkTotalFilesize() {
    let fileSize = 0;
    let fileuploadcollection = document.getElementsByClassName("fileupload");
    for (let item of fileuploadcollection) {
        for (let file of item.files) {
            fileSize += file.size;
        }
    }
    return fileSize;
}

function updateProgressBar(currentSize, maxSize = 25165824) {

    let currentPercent = ((currentSize * 100) / maxSize).toFixed();

    if (currentPercent <= 100) {
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuenow", currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuemax", "100%");
        document.getElementById("fileSizeIndicator").style.width = currentPercent + "%";
        document.getElementById("fileSizeIndicatorLabel").textContent = currentPercent + "% - " + formatBytes(
            currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("title", currentPercent + "% - " + formatBytes(
            currentSize));
        document.getElementById("fileSizeIndicator").className = "progress-bar progress-bar-success";
        document.getElementById("fileSizeAlertInfo").style.display = "none";
    } else {
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuenow", currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuemax", "100%");
        document.getElementById("fileSizeIndicator").style.width = "100%";
        document.getElementById("fileSizeIndicatorLabel").textContent = formatBytes(currentSize) +
            " Error: Total file size exceeds limit";
        document.getElementById("fileSizeIndicator").setAttribute("title", formatBytes(currentSize) +
            " Error: Total file size exceeds limit");
        document.getElementById("fileSizeIndicator").className = "progress-bar bg-danger";

        document.getElementById("fileSizeAlertInfo").style.display = "block";

    }

}

// Get all file inputs and set the proper event handler

const InputFileUploaders = document.getElementsByClassName("fileupload");

for (let item of InputFileUploaders) {
    item.addEventListener('input', event => {
        updateProgressBar(checkTotalFilesize());
    });
}
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function checkTotalFilesize() {
    let fileSize = 0;
    let fileuploadcollection = document.getElementsByClassName("fileupload");
    for (let item of fileuploadcollection) {
        for (let file of item.files) {
            fileSize += file.size;
        }
    }
    return fileSize;
}

function updateProgressBar(currentSize, maxSize = 25165824) {

    let currentPercent = ((currentSize * 100) / maxSize).toFixed();

    if (currentPercent <= 100) {
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuenow", currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuemax", "100%");
        document.getElementById("fileSizeIndicator").style.width = currentPercent + "%";
        document.getElementById("fileSizeIndicatorLabel").textContent = currentPercent + "% - " + formatBytes(
            currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("title", currentPercent + "% - " + formatBytes(
            currentSize));
        document.getElementById("fileSizeIndicator").className = "progress-bar progress-bar-success";
        document.getElementById("fileSizeAlertInfo").style.display = "none";
    } else {
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuenow", currentSize);
        document.getElementById("fileSizeIndicator").setAttribute("aria-valuemax", "100%");
        document.getElementById("fileSizeIndicator").style.width = "100%";
        document.getElementById("fileSizeIndicatorLabel").textContent = formatBytes(currentSize) +
            " Error: El tamaño total de los ficheros supera el límite";
        document.getElementById("fileSizeIndicator").setAttribute("title", formatBytes(currentSize) +
            " Error: El tamaño total de los ficheros supera el límite");
        document.getElementById("fileSizeIndicator").className = "progress-bar progress-bar-danger";

        document.getElementById("fileSizeAlertInfo").style.display = "block";

    }

}

// Get all file inputs and set the proper event handler

const InputFileUploaders = document.getElementsByClassName("fileupload");

for (let item of InputFileUploaders) {
    item.addEventListener('input', event => {
        updateProgressBar(checkTotalFilesize());
    });
}
