export async function loadComponent(url, containerId) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to load component from ${url}`)
    }
    const data = await response.text()
    const container = document.getElementById(containerId)
    if (!container) {
      throw new Error(`Container with ID ${containerId} not found`)
    }
    container.innerHTML = data
  } catch (error) {
    console.error('Error loading component:', error)
  }
}
  