import { Thing } from './../src/lookup';

describe('Thing', () => {
  let thing;

  beforeEach(() => {
    thing = new Thing();
  });

  test('should check if Thing created correctly', () => {
    expect(thing.oneThing).toEqual(0);
  });

});