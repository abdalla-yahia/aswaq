   import products from '@/db/products_dataset.json';

   const brands:{id:number,title:string,image:string}[] = [];
    products?.data?.forEach(product=>{
      const existBrand = brands.find(ele=>ele?.title === product?.brand);
      if(!existBrand) {
        brands.push({id:brands?.length + 1 ,title:product?.brand, image:product?.brandImage})
      }
    })

    export default brands;