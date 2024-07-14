import React from 'react'

const ReactListExplain = () => {

    let car = ["BMW", "Wagonar", "Benz", "Alto", "Suzuki"]

    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <div>
            <ul>
                <li>The JavaScript map() array method is generally the preferred method.</li>
                <li>use the map() function to iterate over the array and generate a component for each item.</li>
                <ul>
                    {car.map((value, item) => {
                        return (<b><li key={item}>{value}</li></b>)
                    })}
                </ul>
            </ul>

            <h3>Keys</h3>
            <ul>
                <li>Keys allow React to keep track of elements.</li>
                <li>This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.</li>
                <li>Keys need to be unique to each sibling. But they can be duplicated globally.</li>
            </ul>
            <p><mark>Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.</mark></p>


            <div>
                <ul>
                    {cars.map((car) => {
                        return (<li key={car.id}>{car.brand}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ReactListExplain
