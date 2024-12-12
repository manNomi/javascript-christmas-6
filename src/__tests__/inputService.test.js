import InputService from '../Service/InputService.js';

describe('InputService', () => {
  let inputViewMock;
  let outputViewMock;
  let inputService;

  beforeEach(() => {
    inputViewMock = {
      input: jest.fn(),
    };
    outputViewMock = {
      print: jest.fn(),
    };
    inputService = new InputService(inputViewMock, outputViewMock);
  });

  describe('inputProcess', () => {
    it('should return valid input after validation', async () => {
      inputViewMock.input.mockResolvedValueOnce('validInput');
      const validateMock = jest.fn();

      const result = await inputService.inputProcess(
        'Enter input:',
        validateMock,
      );

      expect(result).toBe('validInput');
      expect(validateMock).toHaveBeenCalledWith('validInput');
    });

    it('should handle validation errors and retry', async () => {
      inputViewMock.input
        .mockRejectedValueOnce(new Error('Validation failed'))
        .mockResolvedValueOnce('validInput');
      const validateMock = jest.fn((input) => {
        if (input !== 'validInput') {
          throw new Error('Invalid input');
        }
      });

      const result = await inputService.inputProcess(
        'Enter input:',
        validateMock,
      );

      expect(result).toBe('validInput');
      expect(outputViewMock.print).toHaveBeenCalledWith('Validation failed');
    });
  });

  describe('inputProcessTF', () => {
    it('should return the result of validate function', async () => {
      inputViewMock.input.mockResolvedValueOnce('testInput');
      const validateMock = jest.fn().mockReturnValue(true);

      const result = await inputService.inputProcessTF(
        'Enter input:',
        validateMock,
      );

      expect(result).toBe(true);
      expect(validateMock).toHaveBeenCalledWith('testInput');
    });

    it('should handle errors in validate and retry', async () => {
      inputViewMock.input
        .mockResolvedValueOnce('invalidInput')
        .mockResolvedValueOnce('validInput');
      const validateMock = jest.fn((input) => {
        if (input === 'invalidInput') {
          throw new Error('Invalid input');
        }
        return true;
      });

      const result = await inputService.inputProcessTF(
        'Enter input:',
        validateMock,
      );

      expect(result).toBe(true);
      expect(outputViewMock.print).toHaveBeenCalledWith('Invalid input');
    });
  });

  describe('inputPattern', () => {
    it('should return input matching the pattern', async () => {
      inputViewMock.input.mockResolvedValueOnce('12345');
      const pattern = /^\d+$/;

      const result = await inputService.inputPattern(
        'Enter number:',
        pattern,
        'Invalid format',
      );

      expect(result).toBe('12345');
    });

    it('should handle invalid pattern input', async () => {
      inputViewMock.input
        .mockResolvedValueOnce('abc')
        .mockResolvedValueOnce('123');
      const pattern = /^\d+$/;

      const result = await inputService.inputPattern(
        'Enter number:',
        pattern,
        'Invalid format',
      );

      expect(result).toBe('123');
      expect(outputViewMock.print).toHaveBeenCalledWith(
        'Invalid format: /^\\d+$/',
      );
    });
  });

  describe('inputBoolean', () => {
    it('should return true for "yes" or "y"', async () => {
      inputViewMock.input.mockResolvedValueOnce('yes');

      const result = await inputService.inputBoolean('Confirm action:');

      expect(result).toBe(true);
    });

    it('should return false for "no" or "n"', async () => {
      inputViewMock.input.mockResolvedValueOnce('no');

      const result = await inputService.inputBoolean('Confirm action:');

      expect(result).toBe(false);
    });

    it('should handle invalid boolean input and retry', async () => {
      inputViewMock.input
        .mockResolvedValueOnce('maybe')
        .mockResolvedValueOnce('no');

      const result = await inputService.inputBoolean('Confirm action:');

      expect(result).toBe(false);
      expect(outputViewMock.print).toHaveBeenCalledWith(
        '유효하지 않은 입력입니다. "yes" 또는 "no"를 입력하세요.',
      );
    });
  });
});
