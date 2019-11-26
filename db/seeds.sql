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

insert into posts 
(user_id, image, text) 
values
(5, 'https://images.liketoknow.it/2bb5ffe4-f6a6-11e9-9fed-0242ac110002?fm=jpeg&auto=format&w=405&dpr=2', 'Found: the *perfect* sweater dress! It’s just the right length, fits perfectly, is cozy soft & LESS THAN $100. From @nordstrom, of course 😊')



INSERT INTO products
(title, brand, category, url, img_url)
VALUES
('Seasonal Pullover Sweater', 'Nordstrom', 'Outerwear', 'https://shop.nordstrom.com/s/treasure-bond-seasonal-pullover-sweater/5017990/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=black', 'https://n.nordstrommedia.com/id/sr3/2931e5b4-d485-4d58-911d-0bb68df8b50b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5'),
('Slouchy Turtleneck Sweater', 'Walmart', 'Outerwear', 'https://www.walmart.com/ip/Scoop-Slouchy-Turtleneck-Sweater-Women-s/456917138', 'https://i5.walmartimages.com/asr/0bd02cf4-a21c-4bf9-b97a-951555d6c342_1.93bf9c01284ae10dfc3a31609afdd3ee.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'),
('Penny Microsuede High Heel Slouch Boot', 'Walmart', 'Shoes', 'https://www.walmart.com/ip/Scoop-Penny-Microsuede-High-Heel-Slouch-Boot-Women-s/108657039', 'https://i5.walmartimages.com/asr/7ae1d62b-6143-4f49-a4f0-e68631cc8c35_1.a2fb81732e174891ff3e4146072d12ed.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'),
('Faux Python Snake Top Handle Crossbody', 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Faux-Python-Snake-Top-Handle-Crossbody/337150228', 'https://i5.walmartimages.com/asr/f5bd8d5b-91f2-456d-99fc-1755d3461398_2.b9e5f15e4b9e370b37e951e7bba54dcc.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'),
("Ultimate Wide Brim Velour Fedora", 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Ultimate-Wide-Brim-Velour-Fedora-Women-s/780981429', 'https://i5.walmartimages.com/asr/02bd12e7-0746-4d94-bf67-73b750e3006b_1.fb0d6eba8d19258ee42b8d4694e6db78.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'),
('Wide Brim Fedora with Chain', 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Wide-Brim-Fedora-with-Chain-Women-s/101021563', 'https://i5.walmartimages.com/asr/22baed05-4db8-4fe9-bf2b-ba198cdfc8ae_1.18d449ed118fff7b7ecfe5b2cecc49b1.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'),
("No Boundaries Juniors' High Waisted Jegging", 'Walmart', 'Pants', 'https://www.walmart.com/ip/No-Boundaries-Juniors-High-Waisted-Jegging/445093680?', 'https://i5.walmartimages.com/asr/f1e007ce-b8ac-491a-870f-c15c0a3b2b44_1.196264e04a0328a662e91229f0a5498c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff')

INSERT INTO posts_products
(post_id, product_id)
VALUES 
(53, 12),
(53, 13),
(53, 14),
(53, 15),
(53, 16),
(53, 17),
(53, 18);
