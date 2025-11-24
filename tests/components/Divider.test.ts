import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Divider from '~/components/Divider.vue'

describe('Divider', () => {
  it('renders correctly', () => {
    const wrapper = mount(Divider)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays text when provided', () => {
    const wrapper = mount(Divider, {
      props: {
        text: 'Or sign up with',
      },
    })

    expect(wrapper.text()).toContain('Or sign up with')
  })

  it('does not display text when not provided', () => {
    const wrapper = mount(Divider, {
      props: {
        text: '',
      },
    })

    expect(wrapper.find('span').exists()).toBe(false)
  })
})

