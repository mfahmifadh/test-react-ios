import { render, waitFor } from '@testing-library/react'
import React from 'react'
import Main from '../index'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

const blocks = [
  'stone', 'cyan', 'pink', 'stone',
  'orange', 'red', 'yellow', 'green',
  'red', 'yellow', 'green', 'indigo',
  'indigo', 'orange', 'cyan', 'pink'
]

describe('Memory Game Test Pack', () => {
  it('Check if the initial state of the game is set up correctly.', () => {
    const { container, getByText } = render(<Main blocks={blocks} />)

    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    expect(buttons.length).toStrictEqual(blocks.length)
    buttons.forEach((button) => {
      expect(button.classList.contains('bg-slate-500')).toStrictEqual(true)
    })
    expect(reset.disabled).toStrictEqual(true)
    expect(getByText('0/8 Matches')).toBeDefined()
    expect(getByText('0 Tries')).toBeDefined()
  })

  it('Test if two matching blocks can be correctly selected', async () => {
    const { container, getByText } = render(<Main blocks={blocks} />)
    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    await userEvent.click(buttons[5])
    await userEvent.click(buttons[8])

    expect(buttons[5].classList.contains('bg-red-500')).toBe(true)
    expect(buttons[8].classList.contains('bg-red-500')).toBe(true)

    await waitFor(() => {
      expect(buttons[5].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[8].classList.contains('bg-red-500')).toBe(true)
      expect(getByText('1/8 Matches')).toBeDefined()
      expect(getByText('1 Tries')).toBeDefined()
      expect(reset.disabled).toStrictEqual(false)
    }, { timeout: 1000 })
  })

  it('Test if two non-matching blocks can be correctly selected', async () => {
    const { container, getByText } = render(<Main blocks={blocks} />)
    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    await userEvent.click(buttons[4])
    await userEvent.click(buttons[8])

    expect(buttons[4].classList.contains('bg-orange-500')).toBe(true)
    expect(buttons[8].classList.contains('bg-red-500')).toBe(true)

    await waitFor(() => {
      expect(buttons[4].classList.contains('bg-slate-500')).toBe(true)
      expect(buttons[8].classList.contains('bg-slate-500')).toBe(true)
      expect(getByText('0/8 Matches')).toBeDefined()
      expect(getByText('1 Tries')).toBeDefined()
      expect(reset.disabled).toStrictEqual(false)
    }, { timeout: 1000 })
  })

  it('Test if the game completes perfectly when all blocks are matched', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})

    const { container, getByText } = render(<Main blocks={['red', 'yellow', 'red', 'yellow']} />)
    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    await userEvent.click(buttons[0])
    await userEvent.click(buttons[2])
    await act(async () => await new Promise((resolve) => setTimeout(resolve, 1000)))
    await userEvent.click(buttons[1])
    await userEvent.click(buttons[3])

    await waitFor(() => {
      expect(buttons[0].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[1].classList.contains('bg-yellow-500')).toBe(true)
      expect(buttons[2].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[3].classList.contains('bg-yellow-500')).toBe(true)
      expect(getByText('2/2 Matches')).toBeDefined()
      expect(getByText('2 Tries')).toBeDefined()
      expect(reset.disabled).toStrictEqual(false)
      expect(alertMock).toBeCalledWith('Congratulation, you have complete the game perfectly!')
    }, { timeout: 1000 })

    alertMock.mockRestore()
  })

  it('Test if the game completes when all blocks are matched, but not perfectly', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})

    const { container, getByText } = render(<Main blocks={['red', 'yellow', 'red', 'yellow']} />)
    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])
    await act(async () => await new Promise((resolve) => setTimeout(resolve, 1000)))
    await userEvent.click(buttons[0])
    await userEvent.click(buttons[2])
    await act(async () => await new Promise((resolve) => setTimeout(resolve, 1000)))
    await userEvent.click(buttons[1])
    await userEvent.click(buttons[3])

    await waitFor(() => {
      expect(buttons[0].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[1].classList.contains('bg-yellow-500')).toBe(true)
      expect(buttons[2].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[3].classList.contains('bg-yellow-500')).toBe(true)
      expect(getByText('2/2 Matches')).toBeDefined()
      expect(getByText('3 Tries')).toBeDefined()
      expect(reset.disabled).toStrictEqual(false)
      expect(alertMock).toBeCalledWith('Congratulation, you have complete the game!')
    }, { timeout: 1000 })

    alertMock.mockRestore()
  })

  it('Test if the reset button correctly resets the game', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})

    const { container, getByText } = render(<Main blocks={['red', 'yellow', 'red', 'yellow']} />)
    const buttons: NodeListOf<HTMLButtonElement> = container.querySelectorAll('div.grid button')
    const reset = container.querySelector('#control button') as HTMLButtonElement

    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])
    await act(async () => await new Promise((resolve) => setTimeout(resolve, 1000)))
    await userEvent.click(buttons[0])
    await userEvent.click(buttons[2])

    await waitFor(() => {
      expect(buttons[0].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[1].classList.contains('bg-slate-500')).toBe(true)
      expect(buttons[2].classList.contains('bg-red-500')).toBe(true)
      expect(buttons[3].classList.contains('bg-slate-500')).toBe(true)
      expect(getByText('1/2 Matches')).toBeDefined()
      expect(getByText('2 Tries')).toBeDefined()
      expect(reset.disabled).toStrictEqual(false)
    }, { timeout: 1000 })

    await userEvent.click(reset)

    await waitFor(() => {
      expect(getByText('0/2 Matches')).toBeDefined()
      expect(getByText('0 Tries')).toBeDefined()
      buttons.forEach((button) => {
        expect(button.classList.contains('bg-slate-500')).toStrictEqual(true)
      })
      expect(reset.disabled).toStrictEqual(true)
    }, { timeout: 1000 })

    alertMock.mockRestore()
  })
})
