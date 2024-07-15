export const register = async(req, res) => {

    res.send("Hello World")
}

export const getProduct = async(req, res) => {
    
  const companyName = req.params.companyname;
  const categoryName = req.params.categoryname;

  const topN = req.query.top;
  const minPrice = req.query.minPrice; 
  const maxPrice = req.query.maxPrice; 

  res.json({
    company: companyName,
    category: categoryName,
    top: topN,
    minPrice: minPrice,
    maxPrice: maxPrice
  });

}