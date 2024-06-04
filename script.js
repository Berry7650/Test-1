const searchInput = document.getElementById('search');
const generateButton = document.getElementById('generate');
const wallpaperDiv = document.getElementById('wallpaper');

generateButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=1&orientation=landscape`, {
        headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.photos.length > 0) {
                const wallpaperURL = data.photos[0].src.large;
                wallpaperDiv.style.backgroundImage = `url(${wallpaperURL})`;
            } else {
                wallpaperDiv.style.backgroundImage = 'none';
