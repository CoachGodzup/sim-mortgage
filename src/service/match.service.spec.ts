const matchService = jest.requireActual("./match.service");

describe('MatchService', () => {
  it('generates random number between thresholds', () => {
    const [ min, max ] = [3, 7]; 
    const needle = matchService.generateRandomFloat(min, max)
    expect(needle).toBeGreaterThanOrEqual(min);
    expect(needle).toBeLessThanOrEqual(max);
  })
})
