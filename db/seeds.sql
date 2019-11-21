INSERT INTO posts
(user_id, image, text)
VALUES
(5, 'https://images.liketoknow.it/e551d892-fea4-11e9-9fed-0242ac110002?fm=jpeg&auto=format&w=405&dpr=1', 'Happy Sunday you guys! Our exact New England road trip itinerary is on the blog right now (including links to every place we stayed). Link in bio!  The time change is killin’ me, already in bed cause Monday is coming in hot!'),
(7,'https://images.liketoknow.it/a7026b2c-e3b9-11e9-9fed-0242ac110002?fm=jpeg&auto=format&w=405&dpr=1','Comfy cardigans make the world go round, this one is under $50 and the perfect cozy neutral! So soft! I’ve linked it in the ltk app with a few other favorites I’ve shared recently!'),
(8, 'https://images.liketoknow.it/9f0b26ba-fb54-11e9-9fed-0242ac110002?fm=jpeg&auto=format&w=405&dpr=1','this is one of the few sweaters I can actually get away with wearing outdoors right now because it’s super lightweight! It’s 40% off right now with code PREFALL. //.'),
(10, 'https://images.liketoknow.it/a5589278-f463-11e9-9fed-0242ac110002?fm=jpeg&auto=format&w=405&dpr=1','Crunchy leaves and cozy cardigans. Can’t stop won’t stop with all things Fall! You can shop this look on the LIKEtoKNOW.it app or click the link in my bio!')

INSERT INTO products
(title, brand, category, url, img_url)
VALUES
('Elyssa Buckle Mule', 'Nordstrom', 'Shoes', 'https://shop.nordstrom.com/s/halogen-elyssa-buckle-mule-women/5243007/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=leopard%20printed%20calf%20hair','https://n.nordstrommedia.com/id/sr3/400906e7-e55f-47af-af21-09be0ad5f176.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'),
('Reverse Stitch Cardigan', 'Nordstrom', 'Outerwear','https://shop.nordstrom.com/s/treasure-bond-reverse-stitch-cardigan/5302650/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=tan%20camel%20nep','https://n.nordstrommedia.com/id/sr3/f56874dc-a2be-40bb-b3c9-bf728d3952b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'),
('Ultra High Rise Mom Jeans', 'Abercrombie & Fitch', 'Pants','ttps://www.abercrombie.com/shop/us/p/ultra-high-rise-mom-jeans-38701965?categoryId=6883314&seq=05&faceout=model','https://anf.scene7.com/is/image/anf/KIC_155-9144-2065-276_prod1?$product-anf-v1$&wid=800&hei=1000'),
('Susan Square Neck Bodysuit','Urban Outfitters','Shirts', 'https://www.urbanoutfitters.com/shop/out-from-under-susan-square-neck-bodysuit?category=SEARCHRESULTS&color=001','https://s7d5.scene7.com/is/image/UrbanOutfitters/52912557_001_b?$xlarge$&hei=900&qlt=80&fit=constrain')

INSERT INTO posts_products
(post_id, product_id)
VALUES
(1,3),
(2,2),
(2,3),
(3,2),
(3,4),
(4,4),
(4,5)