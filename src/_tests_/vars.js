module.exports = {
  products: [
    {
      product_id: 2,
      title: 'Elyssa Buckle Mule',
      brand: 'Nordstrom',
      category: 'Shoes',
      url:
        'https://shop.nordstrom.com/s/halogen-elyssa-buckle-mule-women/5243007/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=leopard%20printed%20calf%20hair',
      img_url:
        'https://n.nordstrommedia.com/id/sr3/400906e7-e55f-47af-af21-09be0ad5f176.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
    },
    {
      product_id: 3,
      title: 'Reverse Stitch Cardigan',
      brand: 'Nordstrom',
      category: 'Outerwear',
      url:
        'https://shop.nordstrom.com/s/treasure-bond-reverse-stitch-cardigan/5302650/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=tan%20camel%20nep',
      img_url:
        'https://n.nordstrommedia.com/id/sr3/f56874dc-a2be-40bb-b3c9-bf728d3952b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
    },
    {
      product_id: 4,
      title: 'Ultra High Rise Mom Jeans',
      brand: 'Abercrombie & Fitch',
      category: 'Pants',
      url:
        'ttps://www.abercrombie.com/shop/us/p/ultra-high-rise-mom-jeans-38701965?categoryId=6883314&seq=05&faceout=model',
      img_url:
        'https://anf.scene7.com/is/image/anf/KIC_155-9144-2065-276_prod1?$product-anf-v1$&wid=800&hei=1000'
    },
    {
      product_id: 5,
      title: 'Susan Square Neck Bodysuit',
      brand: 'Urban Outfitters',
      category: 'Shirts',
      url:
        'https://www.urbanoutfitters.com/shop/out-from-under-susan-square-neck-bodysuit?category=SEARCHRESULTS&color=001',
      img_url:
        'https://s7d5.scene7.com/is/image/UrbanOutfitters/52912557_001_b?$xlarge$&hei=900&qlt=80&fit=constrain'
    },
    {
      product_id: 1,
      title: 'Burr Jacket',
      brand: 'Kuhl',
      category: 'Outerwear',
      url: 'https://www.kuhl.com/kuhl/mens/outerwear/burr-jacket/',
      img_url:
        'https://www.kuhl.com/media/versions/pdp/1052_burr_jacket_gunmetal_front_pdp_photo.jpg'
    }
  ],
  shirtsTrue: {
    Shirts: true,
    Outerwear: false,
    Pants: false,
    Shoes: false,
    Accessories: false
  },
  allCategoryTrue: {
    Shirts: true,
    Outerwear: true,
    Pants: true,
    Shoes: true,
    Accessories: true
  },
  allCategoryFalse: {
    Shirts: false,
    Outerwear: false,
    Pants: false,
    Shoes: false,
    Accessories: false
  },
  nordstromTrue: {
    Target: false,
    Nordstrom: true,
    Nike: false,
    Freepeople: false,
    Kuhl: false
  },
  allBrandsTrue: {
    Target: true,
    Nordstrom: true,
    Nike: true,
    Freepeople: true,
    Kuhl: true
  },
  allBrandsFalse: {
    Target: false,
    Nordstrom: false,
    Nike: false,
    Freepeople: false,
    Kuhl: false
  }
};
