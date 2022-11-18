const theme = {
  color: {
    primary: '#FF385C',
    secondary: '#00848A'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `
  }
}

export default theme