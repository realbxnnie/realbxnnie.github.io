const tabs = [
    "home",
    "about"
];

const installation_tabs = [
    "unix",
    "windows"
];

let currentTab = tabs[0]; // home
let currentInstallationTab = installation_tabs[1]; // windows

document.addEventListener("DOMContentLoaded", () => {
    __init__();
});

function __init__() {
    tabs.forEach((val, key) => {
        document.getElementById(`tab_${val}`).onclick = function() {
            switchTab(val);
        };
    });

    installation_tabs.forEach((val, key) => {
        document.getElementById(`installation_${val}`).onclick = function() {
            switchInstallation(val);
        };
    });
};

function switchTab(val) {
    document.getElementById(`tab_${currentTab}`).classList.replace("segment-active", "segment");
    document.getElementById(`tabFrame_${currentTab}`).hidden = true;

    currentTab = val;

    document.getElementById(`tab_${val}`).classList.replace("segment", "segment-active");
    document.getElementById(`tabFrame_${currentTab}`).hidden = false;
}


function switchInstallation(val) {
    document.getElementById(`installation_${currentInstallationTab}`).classList.replace("segment-active", "segment");
    document.getElementById(`installationF_${currentInstallationTab}`).hidden = true;

    currentInstallationTab = val;

    document.getElementById(`installation_${val}`).classList.replace("segment", "segment-active");
    document.getElementById(`installationF_${currentInstallationTab}`).hidden = false;
}