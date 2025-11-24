import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialLoginButton from '~/components/SocialLoginButton.vue'

describe('SocialLoginButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(SocialLoginButton, {
      props: {
        provider: 'Google',
        iconSrc: '/images/google-icon.svg',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('Google')
  })

  it('displays provider name', () => {
    const wrapper = mount(SocialLoginButton, {
      props: {
        provider: 'Apple',
        iconSrc: '/images/apple-icon.svg',
      },
    })

    expect(wrapper.text()).toContain('Apple')
  })

  it('has correct aria-label', () => {
    const wrapper = mount(SocialLoginButton, {
      props: {
        provider: 'Google',
        iconSrc: '/images/google-icon.svg',
      },
    })

    expect(wrapper.find('button').attributes('aria-label')).toBe('Sign in with Google')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(SocialLoginButton, {
      props: {
        provider: 'Google',
        iconSrc: '/images/google-icon.svg',
      },
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(SocialLoginButton, {
      props: {
        provider: 'Google',
        iconSrc: '/images/google-icon.svg',
        disabled: true,
      },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})

