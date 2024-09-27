import { describe, it, expect } from 'vitest';
import sum from './app'

describe('soma dois numeros', () => {
    it('soma dois com tres', () => {
        expect(sum(3, 3)).toBe(6)
    })
})
