const Pages = (pageName) => {
  const pages = [undefined,'profile', 'security', 'requests', 'donation-history','logout']


  const isVaildPage =  pages.some(page => page === pageName)
  
  if(isVaildPage === undefined ) return

  if (!isVaildPage ) return false
  
  return true
}

export default Pages