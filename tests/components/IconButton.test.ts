import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconButton from '~/components/IconButton.vue'

describe('IconButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(IconButton, {
      props: {
        iconSrc: '/test-icon.svg',
        ariaLabel: 'Test button',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('/test-icon.svg')
  })

  it('has correct aria-label', () => {
    const wrapper = mount(IconButton, {
      props: {
        iconSrc: '/test-icon.svg',
        ariaLabel: 'Filter lessons',
      },
    })

    expect(wrapper.find('button').attributes('aria-label')).toBe('Filter lessons')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(IconButton, {
      props: {
        iconSrc: '/test-icon.svg',
        ariaLabel: 'Test button',
      },
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(IconButton, {
      props: {
        iconSrc: '/test-icon.svg',
        ariaLabel: 'Test button',
        disabled: true,
      },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})

