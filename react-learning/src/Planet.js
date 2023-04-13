export const Planet = (prop) => {
    return (
        <div class="App">
            <h1>{prop.isGasPlanet && prop.name}</h1>
        </div>);
};
