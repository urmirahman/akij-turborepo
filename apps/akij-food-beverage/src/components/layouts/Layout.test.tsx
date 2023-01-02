import { render } from '@testing-library/react'
import { expect, jest } from '@jest/globals'
import { ThemedContainer } from 'ui/components/elements/ThemedContainer'
import { Layout } from './Layout'

jest.mock('ui/components/elements/ThemedContainer', () => ({
  ThemedContainer: jest.fn(() => null),
}))

describe('<Layout/>', () => {
  it('can set theme', () => {
    render(<Layout theme="primary-brown">CHILDREN</Layout>)

    expect(ThemedContainer).toHaveBeenCalledWith(expect.objectContaining({ theme: 'primary-brown' }), {})
  })

  it('has fallback to primary-brown theme', () => {
    render(<Layout>CHILDREN</Layout>)

    expect(ThemedContainer).toHaveBeenCalledWith(expect.objectContaining({ theme: 'primary-brown' }), {})
  })
})
