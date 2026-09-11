document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = document.querySelector("[data-sidebar]");

  if (!sidebar) {
    return;
  }

  try {
    const response = await fetch(sidebar.dataset.sidebarSrc);

    if (!response.ok) {
      throw new Error(`Unable to load sidebar: ${response.status}`);
    }

    const base = sidebar.dataset.sidebarBase || "";
    sidebar.innerHTML = (await response.text()).replaceAll("{{base}}", base);
  } catch (error) {
    console.error(error);
  }
});
