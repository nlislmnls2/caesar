import { describe, it, expect } from 'vitest';
import encode from './app'

describe('encode', () => {
    it('shifts one character', () => {
        // arange 
        const msg: string = 'abc';
        const shift: number = 1;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('bcd');
    })

    it('rotates correctly for the last alphabet character', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = -1;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('z');
    })
    
    it('encodes correctly with a value larger than 26(#alphabet)', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = 666;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('q');
    })

    it('Does not shift for a multiple of 26(#alphabet)', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = 5200;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('a');
    })
})