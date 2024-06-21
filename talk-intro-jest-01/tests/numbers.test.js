
function getLotteryNumbers() {
    return [4, 8, 15, 16, 23, 42];
}

test('retorna os números corretos da loteria', () => {
    expect(getLotteryNumbers()).toEqual([4, 8, 15, 16, 23, 42]);
});
