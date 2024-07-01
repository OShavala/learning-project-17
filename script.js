document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const emojis = document.querySelectorAll('.emojis i');

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            const emojiCharacter = emoji.getAttribute('data-emoji');
            messageInput.value += emojiCharacter;
        });
    });
});
