import { renderHook, act } from '@testing-library/react-hooks'
import useLocalStorage from './useLocalStorage'

describe('useLocalStorage', () => {
  const key = 'key'
  const initialValue = 'initial value'

  it('should returns initial value', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    expect(result.current[0]).toMatch(initialValue)
  })

  it('should return empty string if initialValue not passed', () => {
    const { result } = renderHook(() => useLocalStorage(key))
    expect(result.current[0]).toMatch('')
  })

  it('shoudl returns setValue function', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    expect(typeof result.current[1]).toMatch('function')
  })

  it('should update the value, when setValue function is called', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue))

    act(() => {
      result.current[1]('newValue')
    })

    expect(result.current[0]).toBe('newValue')
  })

  it('should be consistent across the multiple instances of the hooks with same "key"', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    const { result: secondResult } = renderHook(() =>
      useLocalStorage(key, initialValue)
    )

    act(() => {
      result.current[1]('newValue')
    })

    expect(result.current[0]).toBe(secondResult.current[0])
  })

  it('should not trigger to update other instance of hook with different key', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    const { result: secondResult } = renderHook(() =>
      useLocalStorage('key2', initialValue)
    )

    act(() => {
      result.current[1]('newValue')
    })

    expect(result.current[0]).not.toBe(secondResult.current[0])
  })
})
