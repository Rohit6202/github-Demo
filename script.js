document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const output = document.getElementById('output');
    let clickCount = 0;

    clickButton.addEventListener('click', () => {
        clickCount++;
        output.textContent = `Button clicked ${clickCount} times!`;
        output.style.color = '#238636';
        
        // Add temporary animation
        output.classList.add('animate');
        setTimeout(() => {
            output.classList.remove('animate');
        }, 500);
    });

    // Update footer year
    const footer = document.querySelector('footer p');
    footer.innerHTML = footer.innerHTML.replace('[Your Name]', 'Your Name') + 
                      ` • ${new Date().getFullYear()}`;
});
