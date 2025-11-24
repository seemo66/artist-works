import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginForm from '~/components/LoginForm.vue';
import FormField from '~/components/FormField.vue';
import SocialLoginButton from '~/components/SocialLoginButton.vue';

// mock router
vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

// mock auth store
vi.mock('~/stores/auth', () => ({
  useAuthStore: () => ({ login: vi.fn() }),
}));

describe('LoginForm', () => {
  const global = {
    components: {
      FormField,
      SocialLoginButton,
    },
    stubs: {
      Logo: true,
      NuxtLink: true,
      Divider: true,
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays heading', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.text()).toContain('Sign in to ArtistWorks');
  });

  it('renders username field', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.text()).toContain('Username');
  });

  it('renders password field', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.text()).toContain('Password');
  });

  it('has submit button', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.text()).toContain('Continue');
  });

  it('renders social login buttons', () => {
    const wrapper = mount(LoginForm, { global });
    expect(wrapper.text()).toContain('Google');
    expect(wrapper.text()).toContain('Apple');
  });
});
