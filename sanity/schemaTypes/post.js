export const post = {
  name: 'post',
  title: 'Yeni maşın əlavə et',
  type: 'document',
  fields: [
    {
      name: 'marka',
      title: 'Marka',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Qiymət',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Buraxılış ili',
      type: 'string',
      options:{
        list:["2000","2001","2002","2003","2018","2019","2020"]
      }
    },
    {
      name: 'gearbox',
      title: 'Sürətlər qutusu',
      type: 'string',
      options:{
        list:["Avtomat","Mexanik"]
      }
    },
    {
      name: 'fueltype',
      title: 'Yanacaq növü',
      type: 'string',
      options:{
        list:["Benzin","Dizel","Qaz"]
      }
    },
    {
      name: 'seat',
      title: 'Oturacaq sayı',
      type: 'string',
      options:{
        list:["4","5","6","8","9","10","11","12"]
      }
    },
    {
      name: 'type',
      title: 'Növü',
      type: 'string',
      options:{
        list:["Biznes","Ekonom","Minivan"]
      }
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}], // Bu alana birden fazla resim eklemek istediğimizden dolayı 'type: image' olarak tanımlıyoruz.
      options: {
        hotspot: true // Resimlerin grid şeklinde görüntülenmesi için
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
