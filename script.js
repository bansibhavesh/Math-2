document.getElementById('equation-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const equation = document.getElementById('equation').value;
    const plotGraph = document.getElementById('plot-graph').checked;

    try {
        const response = await fetch('http://localhost:5000/solve-equation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ equation: equation, plot_graph: plotGraph })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('result').textContent = `Solution: ${data.solution}`;

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error occurred. Check console for details.';
    }
});
