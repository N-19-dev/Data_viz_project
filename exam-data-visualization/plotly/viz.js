fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(-30); // Get the top 30 countries with the largest population

    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    var plotData = [{
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgba(75, 192, 192, 0.6)',
            line: {
                color: 'rgba(75, 192, 192, 1)',
                width: 1.5
            }
        }
    }];

    var layout = {
        title: 'Top 30 Most Populated Countries',
        xaxis: {
            title: 'Country',
            tickangle: -45
        },
        yaxis: {
            title: 'Population'
        },
        margin: {
            t: 40,
            b: 150,
            l: 60, 
            r: 60 
        },
        paper_bgcolor: '#fff',  // Change the background color of the entire chart area
        plot_bgcolor: '#fff', 
        width: 1200,
        height: 575,
        
        
    };

    Plotly.newPlot('bar-chart', plotData, layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
