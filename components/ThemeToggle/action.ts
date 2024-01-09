'use server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * Sets the theme of the application.
 * @param currentTheme - The current theme of the application. Defaults to an empty string.
 * @throws If an error occurs while setting the theme.
 * @returns
 */
export const setTheme: VoidFunction = (currentTheme = '') => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  console.log('newTheme:', newTheme)
  cookies().set('theme', newTheme);
  revalidatePath('/');
};

