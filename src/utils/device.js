const size = {
  smallMobile: '400px',
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  xl: '1800px',
}

export const device = {
  smallMobile: `(min-width: ${size.smallMobile})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  xl: `(min-width: ${size.xl})`,
}
