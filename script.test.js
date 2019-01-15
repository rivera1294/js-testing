const dogSearch = require('./script')


const mockDB = [
    'Labrador',
    'Bulldog',
    'Pitbull',
    'Beagle',
    'Chihuahua'
]

describe('dog search', () => {
    it('is searching dogs', () => {
        expect(dogSearch('chi', mockDB)).toEqual(['Chihuahua'])
    })
    
    it('returns an empty array with undefined or null input', () => {
        expect(dogSearch(null, mockDB)).toEqual([])
    })
})


