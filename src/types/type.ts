export type Theme = "light" | "dark" | "system"
export type house = {
    id:string
    title:string,
    description:string,
    images:string[],
    price:number,
    location:string,
    phone:string,
    type:{
        build:string,
        bedroom:number,
        bathroom:number,
        area:string
    }
}
export const data =  [
        {
          "id": "852223931024",
          "location": "6 Garth rd, Scarsdale, NY 10583",
          title:"Modern Downtown Apartment",
          description:"Luxurious modern apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and stunning city views.",
          images:["https://www.zillowstatic.com/bedrock/app/uploads/sites/47/real-estate-comps-91b8c8.jpg","https://i.pinimg.com/originals/d5/1e/2b/d51e2baebf3b1a0548873ec9088d9744.jpg","https://megafurniture.sg/cdn/shop/articles/affordable-bedroom-renovation-ideas-enhance-your-space-without-overspending-megafurniture.jpg?v=1721303880"],
          phone:"555-155-1223",
          price: 500122,
          "type": {
            build:'2020',
            bedroom:2,
            bathroom:2,
            area:"1200 sqft"
          },
      
          
        },
        {
            "id": "852223931024",
            "location": "6 Garth rd, Scarsdale, NY 10583",
            title:"Modern Downtown Apartment",
            description:"Luxurious modern apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and stunning city views.",
            images:["https://www.zillowstatic.com/bedrock/app/uploads/sites/47/real-estate-comps-91b8c8.jpg","https://i.pinimg.com/originals/d5/1e/2b/d51e2baebf3b1a0548873ec9088d9744.jpg","https://megafurniture.sg/cdn/shop/articles/affordable-bedroom-renovation-ideas-enhance-your-space-without-overspending-megafurniture.jpg?v=1721303880"],
            phone:"555-155-1223",
            price: 2000000,
            "type": {
              build:'2020',
              bedroom:2,
              bathroom:2,
              area:"1200 sqft"
            },
        
            
          },
     
          {
            "id": "852223931024",
            "location": "6 Garth rd, Scarsdale, NY 10583",
            title:"Modern Downtown Apartment",
            description:"Luxurious modern apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and stunning city views.",
            images:["https://www.zillowstatic.com/bedrock/app/uploads/sites/47/real-estate-comps-91b8c8.jpg","https://i.pinimg.com/originals/d5/1e/2b/d51e2baebf3b1a0548873ec9088d9744.jpg","https://megafurniture.sg/cdn/shop/articles/affordable-bedroom-renovation-ideas-enhance-your-space-without-overspending-megafurniture.jpg?v=1721303880"],
            phone:"555-155-1223",
            price: 1092765,
            "type": {
              build:'2020',
              bedroom:2,
              bathroom:2,
              area:"1200 sqft"
            },
        
            
          },
       
     
    ]