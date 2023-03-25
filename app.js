
products.forEach((e, i, a) => {
    const div = createElement(
        "div",
        "card p-3 shadow bg-light text-success m-3 mx-auto text-center",
        `<img src="${e.img}">
        <h6>${e.name} ${e.brand}</h6>
        <p>${e.price}</p>
        <p>${e.category}</p>
        <button class="${e.isBuy ? "btn btn-success" : "btn btn-danger"}">${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q"}</button>
        `
    )
    $('.wrapper').appendChild(div);

})

let company = [];


products.forEach((e) => {
    if (!company.includes(e.brand)) {
        company.push(e.brand);
    }
})



company.forEach((e) => {
    const option = createElement('option', 'option-item', e)
    $(".form-select").appendChild(option);
})

$(".form-select").addEventListener('change', (evt) => {

    let price = $("#price").value;
    $('.wrapper').innerHTML = "";
    const FilterProduct = products.filter((e) => {
        return e.brand.toLowerCase() === evt.target.value.toLowerCase() && e.price > price;
    })

    FilterBrand(FilterProduct);
})



function FilterBrand(data) {

    data.forEach((e, i, a) => {
        const div = createElement(
            "div",
            "card p-3 shadow bg-light text-success m-3 mx-auto text-center",
            `<img src="${e.img}">
            <h6>${e.name} ${e.brand}</h6>
            <p>${e.price}</p>
            <p>${e.category}</p>
            <button class="${e.isBuy ? "btn btn-success" : "btn btn-danger"}">${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q"}</button>
            `
        )
        $('.wrapper').appendChild(div);

    })

}

