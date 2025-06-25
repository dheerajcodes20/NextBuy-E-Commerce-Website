export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title', // changed from 'name' to 'title' to match existing documents
            type: 'string',
            title: 'name of Product',

        },

        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }], //this allows multiple images to be added for a product
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product',
        },

        {
            name:'price_id',
            title:'Stripe Price ID',
            type:'string',
        },

        {
            name: 'slug',
            type: 'slug',
            title:'Product Slug',      
                 options: {
                source: 'title', // this will generate a slug based on the title of the product
                maxLength: 90,
            },
         },

         {
            name: 'price',
            type: 'number',
            title: 'number',
          
         },

         {
            name: 'category',
            type: 'reference',
            title: 'Category of Product',
            to: [{ type: 'category' }], // this allows to reference the category document and link it to the product
         }

        


    ],
}