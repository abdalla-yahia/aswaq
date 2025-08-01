   import products from '@/db/products_dataset.json';

   const categories:{id:number,title:string,image:string}[] = [];
    products?.data?.forEach(product=>{
      const existCat = categories.find(ele=>ele?.title === product?.category);
      if(!existCat) {
        categories.push({id:categories?.length + 1 ,title:product?.category, image:product?.image})
      }
    })


    export default categories;