export default{

    name: 'heroImages',
    type: 'document',
    title: 'Two Hero Images',
    fields: [
        {
            name: 'image1',
            type: 'image',
            title: 'First Image',
        },
        {
            name: 'image2',
            type: 'image',
            title: 'second Image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
     
    ],
}