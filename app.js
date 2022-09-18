const countries = [{
    name: "Myanmar", states: [{
        name: "Bago", cities: [{
            name: "Letpadan"
        }]
    }, {
        name: "Yangon", cities: [{
            name: "Yangon"
        }]
    },]
}, {
    name: "Thai", states: [{
        name: "Thai State", cities: [{
            name: "Bangkok"
        }]
    }]
},]

const $countries = $('#countires');
const $states = $('#states');
const $cities = $('#cities');
let $selected_states = [];

// show all countries to the list
countries.forEach(country => {
    $countries.append(`<option value="${country.name}">${country.name}</option>`)
})

// render state on country select change
$countries.change((evt) => {
    // get selected country
    const selected_country = evt.target.value
    countries.forEach(country => {
        if (country.name === selected_country) {
            const {states} = country;
            renderStates(states);
            $selected_states = states;
        }
    })
})


// render city on states select change
$states.change((evt) => {
    const selected_state = evt.target.value;

    if ($selected_states.length > 0) {

        $selected_states.forEach(state => {

            if (state.name === selected_state) {
                $cities.empty();
                $cities.append(`<option value="select" selected="">Select Your City</option>`)

                renderCities(state.cities)

            }

        })

    }
})


function renderStates(states) {
    // remove previous states
    $states.empty();
    $states.append(`<option value="select" selected="">Select Your State</option>`)
    states.forEach(state => {
        $states.append(`<option value="${state.name}">${state.name}</option>`)
    })
}

function renderCities(cities) {
    cities.forEach(city => {
        $cities.append(`<option value="${city.name}">${city.name}</option>`)
    })
}