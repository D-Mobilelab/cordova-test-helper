import simulateEvent from '../simulateEvent';

describe('Main module tests', () => {
  it('Simulate Event test', (done) => {
    const onevent = (e) => {
      expect(e).toBeDefined();
      expect(e.detail.pippo).toBeDefined();
      expect(e.detail.pippo).toEqual(1);
      expect(e.detail.pappo).toEqual(2);
      done();
    };
    document.addEventListener('deviceready', onevent, false);
    simulateEvent('deviceready', { pippo: 1, pappo: 2 }, 1000, 'document');
  });
});
