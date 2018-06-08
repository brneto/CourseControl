describe('Objects', () => {
  describe('should make no difference if a properties is written into quotes', () => {
    const obj1 = {
      user: {
        firstname: 'Paulo',
        lastname: 'Silva'
      }
    };

    const obj2 = {
      user: {
        firstname: 'Paulo',
        lastname: 'Silva'
      }
    };

    it('should be equal to objects properties not write into quotes', () => {
      expect(obj1).toEqual(obj2);
    });
  });

  describe('Rest properties', () => {
    const person = {
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      nickName: 'Dany',
      culture: 'Valyrian',
    };
    const { firstName, lastName, ...rest } = person;

    it('should support destructuring assigment', () => {
      expect(firstName).toEqual('Daenerys');
      expect(lastName).toEqual('Targaryen');
      expect(rest).toEqual({ nickName: 'Dany', culture: 'Valyrian' });
    });

    it('should support spread properties', () => {
      const personCopy = { firstName, lastName, ...rest };
      expect(personCopy).toEqual({
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        nickName: 'Dany',
        culture: 'Valyrian',
      });
    });
  });

  describe('Merge objects', () => {
    const defaultSettings = { logWarning: false, logErros: false };
    const userSettings = { logErros: true };

    it('should support', () => {
      const mergedSettings = { ...defaultSettings, ...userSettings };
      expect(mergedSettings).toEqual({ logWarning: false, logErros: true });
    });
  });

  describe('Private properties', () => {
    class IncreasingCounter {
      #count = 0;
      get value() {
        return this.#count;
      }
      increment() {
        this.#count++;
      }
    }

    it('should support', () => {
      const counter = new IncreasingCounter();
      expect(counter.count).toBe(undefined);
      expect(counter.value).toEqual(0);
      counter.increment();
      expect(counter.count).toBe(undefined);
      expect(counter.value).toEqual(1);
    });
  });
});