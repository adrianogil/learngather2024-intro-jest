
function Q_rsqrt(x) {
    const threehalfs = 1.5;
    const x2 = x * 0.5;
    const magicNumber = 0x5f3759df;

    // Convert the float to an integer using a trick.
    const buf = new ArrayBuffer(4);
    const f32 = new Float32Array(buf);
    const u32 = new Uint32Array(buf);

    f32[0] = x;
    u32[0] = magicNumber - (u32[0] >> 1);

    // Convert the integer back to a float.
    const y = f32[0];

    // Perform one iteration of Newton's method.
    return y * (threehalfs - (x2 * y * y));
}

test('fast inverse square root of 4', () => {
    const number = 4.0;
    const expected = 1 / Math.sqrt(number);
    const result = Q_rsqrt(number);
    expect(result).toBeCloseTo(expected);
});


test.each([[1], [2], [4], [9], [16], [25], [36]])(
    'fast inverse square root of %i',
    (value) => {
        expect(Q_rsqrt(value)).toBeCloseTo(1 / Math.sqrt(value), 2);
    }
);





