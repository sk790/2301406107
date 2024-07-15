export const register = async(req, res) => {
    try {
        res.send(res.body)
    } catch (error) {
        res.json({msg:error})
    }
}

export const auth = async(req, res) => {
    const {access_token} = req.body
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMDMwMjQ2LCJpYXQiOjE3MjEwMjk5NDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUwNDc1ZjUwLTc0YmMtNDY5NC1hODdkLTI0MDAzM2Q4N2Y4MiIsInN1YiI6ImFrc2hheUBhYmMuZWR1In0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI1MDQ3NWY1MC03NGJjLTQ2OTQtYTg3ZC0yNDAwMzNkODdmODIiLCJjbGllbnRTZWNyZXQiOiJLZnVyaGx4TkV4T2tQRUNKIiwib3duZXJOYW1lIjoiQWtzaGF5Iiwib3duZXJFbWFpbCI6ImFrc2hheUBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.tzejXvk-zc1gF913dZUCHXCROmLYolnQebxELW_2sqc"
    try {
        if(access_token === token){
            res.send(res.body)
        }
    } catch (error) {
        res.json({msg:error})
    }
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