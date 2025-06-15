function logout() {
  alert("Logging out...");
  // Add logout logic here
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("toggleIcon");
  sidebar.classList.toggle("collapsed");

  // Change icon direction
  if (sidebar.classList.contains("collapsed")) {
    icon.classList.replace("fa-angle-left", "fa-angle-right");
  } else {
    icon.classList.replace("fa-angle-right", "fa-angle-left");
  }
}
