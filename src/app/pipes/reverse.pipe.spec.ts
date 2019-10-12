// Dependencias
import { ReversePipe } from './reverse.pipe';
// Ejemplo
const pipeContent = [
  5, 10, 15, 20
];
const returnedPipeContent = [
  20, 15, 10, 5
];

describe('ReversePipe', () => {
  // Pipe
  let pipe: ReversePipe;
  it('create an instance', () => {
    pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse the input array', () => {
    const result = pipe.transform(pipeContent);
    expect(result).toEqual(returnedPipeContent);
  });
});
