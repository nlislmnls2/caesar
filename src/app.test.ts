import { describe, it, expect } from 'vitest';
import encode from './app'

describe('encode', () => {
    it('transforma "abc" em "bcd"', () => {
        // arange 
        const msg: string = 'abc';
        const shift: number = 1;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('bcd');
    })

    it('para o encode("a", -1) retorna "z"', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = -1;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('z');
    })

    it('para o encode("z", 1) retorna "a"', () => {
        // arange 
        const msg: string = 'z';
        const shift: number = 1;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('a');
    })
    
    it('para o encode("a", 666) retorna "q"', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = 666;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('q');
    })

    it('para o encode("a", 5200) retorna "a"', () => {
        // arange 
        const msg: string = 'a';
        const shift: number = 5200;

        // act
        const result = encode(msg, shift);

        // assert
        expect(result).toBe('a');
    })
})