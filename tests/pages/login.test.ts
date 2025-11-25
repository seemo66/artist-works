import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginPage from '~/pages/login.vue';

// Mock useRouter
vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

// Mock useAuthStore so Pinia is not required
vi.mock('~/stores/auth', () => ({
  useAuthStore: () => ({
    login: vi.fn(),
  }),
}));

describe('Login Page', () => {
  it('renders page container', () => {
    const wrapper = mount(LoginPage, {
      global: {
        stubs: {
          LoginForm: true, // <--- fully stub LoginForm
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('contains LoginForm component', () => {
    const wrapper = mount(LoginPage, {
      global: {
        stubs: {
          LoginForm: true,
        },
      },
    });

    expect(wrapper.findComponent({ name: 'LoginForm' }).exists()).toBe(true);
  });
});

