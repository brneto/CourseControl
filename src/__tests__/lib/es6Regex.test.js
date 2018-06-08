const input = `
Lorem ipsum dolor sit amet, consectetur adipiscing hello
world elit. Nam sit amet elit id risus aliquam porta.
`;

describe('Regex dotAll mode', () => {
  let result;
  it('should dot matches a line break', () => {
    result = /hello.world/.test(input);
    expect(result).toBe(false);

    result = /hello.world/u.test(input);
    expect(result).toBe(false);

    result = /hello.world/s.test(input);
    expect(result).toBe(true);

    result = /hello.world/us.test(input);
    expect(result).toBe(false); // Why the regex is false here?
  });
});

// @babel/plugin-transform-named-capturing-groups-regex
// Still not support by Babel yet
// describe('Regex named capture groups support', () => {
//   const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
//   const result = pattern.exec('2018-05-09');
//   it('should capture each group by name', () => {
//     expect(result.groups.year).toBe('2018');
//     expect(result.groups.month).toBe('05');
//     expect(result.groups.day).toBe('09');
//   });
// });
