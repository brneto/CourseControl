import keyMirror from 'fbjs/lib/keyMirror';

describe('keyMirror', () => {
  it('should create an object with values matching keys provided', () => {
    let mar;
    const mirror = keyMirror({
      foo: null,
      bar: true,
      'baz': { some: 'object' },
      qux: undefined,
      cas: '',
      mar,
      azx: 1,
    });

    expect('foo' in mirror).toBe(true);
    expect(mirror.foo).toBe('foo');
    expect('bar' in mirror).toBe(true);
    expect(mirror.bar).toBe('bar');
    expect('baz' in mirror).toBe(true);
    expect(mirror.baz).toBe('baz');
    expect('qux' in mirror).toBe(true);
    expect(mirror.qux).toBe('qux');
    expect('cas' in mirror).toBe(true);
    expect(mirror.cas).toBe('cas');
    expect('mar' in mirror).toBe(true);
    expect(mirror.mar).toBe('mar');
    expect('azx' in mirror).toBe(true);
    expect(mirror.azx).toBe('azx');
  });

  it('should create an empty object when provided with an empty object', () => {
    const mirror = keyMirror({});
    expect(mirror).toEqual({});
  });

  it('should throw when called with no parameters', () => {
    const emptyParameter = () => keyMirror();
    expect(emptyParameter).toThrow();
  });

});
