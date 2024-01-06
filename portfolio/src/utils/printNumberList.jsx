export const printNumberList = (index) => {
  switch (index) {
    case 0:
      return <img className="number-list even" src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704559897/01_list_nmghm2.svg" alt="1st of list" />
    case 1:
      return <img className="number-list odd" src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704562078/02_list_r267bc.svg" alt="2st of list" />
    case 2:
      return <img className="number-list even" src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704562078/03_list_n0y7d2.svg" alt="3st of list" />
    case 3:
      return <img className="number-list odd" src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704562078/04_list_nisu2m.svg" alt="4st of list" /> 
  }
}