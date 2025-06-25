import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../styles/globals.css';
// import SmoothScroll from '@/components/ui/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Caitlin Ash | Portfolio',
  icons: {
    icon: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/icons/favicon-32x32.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  const icons = metadata.icons?.icon ?? [];

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        {icons.map((icon, index) => (
          <link 
            key={index}
            rel={icon.rel}
            type={icon.type}
            sizes={icon.sizes}
            href={icon.url}
          />
        ))}
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            {/* <SmoothScroll /> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
