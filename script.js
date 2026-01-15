const btn = document.getElementById('add');
const input = document.getElementById('title');

btn.addEventListener('click', async () => {
    const title = input.value;
    if (!title) return;

    await fetch('db-insert.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    });

    input.value = '';
});
