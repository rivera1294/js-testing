const dogBreeds = [
    'Labrador',
    'Bulldog',
    'Pitbull',
    'Beagle',
    'Chihuahua'
]

const dogSearch = (searchTerm, dogsDB) => {
    
    if(!searchTerm) {
        return [];
    }
    
    const filteredData = dogsDB.filter(breed => {
        return breed.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return filteredData
}

module.exports = dogSearch;