INSERT INTO posts
(user_id, image, text)
VALUES
-- 80 on
(5, 'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+5/e551d892-fea4-11e9-9fed-0242ac110002.jpg', 'Happy Sunday you guys! Our exact New England road trip itinerary is on the blog right now (including links to every place we stayed). Link in bio!  The time change is killin’ me, already in bed cause Monday is coming in hot!'),
(5, 'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+5/2bb5ffe4-f6a6-11e9-9fed-0242ac110002.jpg', 'Found: the *perfect* sweater dress! It’s just the right length, fits perfectly, is cozy soft & LESS THAN $100. From @nordstrom, of course 😊'),
(5, 'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+5/57923468-ef92-11e9-9fed-0242ac110002.jpg', 'This fall has been unbe-LEAF-able! 🍁🍂🍁 And you know what else is unbelievable? How affordable my outfit is! My entire outfit head-to-toe is from @walmarts @scoop collection and is less than $100 (you can shop my exact look in my instastories!).'),
(7,'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+7/a7026b2c-e3b9-11e9-9fed-0242ac110002.jpg','Comfy cardigans make the world go round, this one is under $50 and the perfect cozy neutral! So soft! I’ve linked it in the ltk app with a few other favorites I’ve shared recently!'),
(8, 'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+8/9f0b26ba-fb54-11e9-9fed-0242ac110002.jpg','this is one of the few sweaters I can actually get away with wearing outdoors right now because it’s super lightweight! It’s 40% off right now with code PREFALL. //.'),
(10, 'https://lovetoknow.s3-us-west-2.amazonaws.com/posts/user+10/a5589278-f463-11e9-9fed-0242ac110002.jpg','Crunchy leaves and cozy cardigans. Can’t stop won’t stop with all things Fall! You can shop this look on the LIKEtoKNOW.it app or click the link in my bio!')

INSERT INTO products
(title, brand, category, url, img_url)
VALUES
-- 45
('Elyssa Buckle Mule', 'Nordstrom', 'Shoes', 'https://shop.nordstrom.com/s/halogen-elyssa-buckle-mule-women/5243007/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=leopard%20printed%20calf%20hair','https://lovetoknow.s3-us-west-2.amazonaws.com/400906e7-e55f-47af-af21-09be0ad5f176.jpeg'),
-- 46
('Reverse Stitch Cardigan', 'Nordstrom', 'Outerwear','https://shop.nordstrom.com/s/treasure-bond-reverse-stitch-cardigan/5302650/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=tan%20camel%20nep','https://lovetoknow.s3-us-west-2.amazonaws.com/f56874dc-a2be-40bb-b3c9-bf728d3952b2.jpeg'),
-- etc.
('Ultra High Rise Mom Jeans', 'Abercrombie & Fitch', 'Pants','https://www.abercrombie.com/shop/us/p/ultra-high-rise-mom-jeans-38701965?categoryId=6883314&seq=05&faceout=model','https://lovetoknow.s3-us-west-2.amazonaws.com/KIC_155-9144-2065-276_prod1.jpg'),
('Susan Square Neck Bodysuit','Urban Outfitters','Shirts', 'https://www.urbanoutfitters.com/shop/out-from-under-susan-square-neck-bodysuit?category=SEARCHRESULTS&color=001','https://lovetoknow.s3-us-west-2.amazonaws.com/52912557_001_b.jpg'),
('Seasonal Pullover Sweater', 'Nordstrom', 'Outerwear', 'https://shop.nordstrom.com/s/treasure-bond-seasonal-pullover-sweater/5017990/full?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=black', 'https://lovetoknow.s3-us-west-2.amazonaws.com/91ec41f7-cd1a-48e0-bf7f-be0212acba62.jpeg'),
('Slouchy Turtleneck Sweater', 'Walmart', 'Outerwear', 'https://www.walmart.com/ip/Scoop-Slouchy-Turtleneck-Sweater-Women-s/456917138', 'https://lovetoknow.s3-us-west-2.amazonaws.com/0bd02cf4-a21c-4bf9-b97a-951555d6c342_1.93bf9c01284ae10dfc3a31609afdd3ee.jpeg'),
('Penny Microsuede High Heel Slouch Boot', 'Walmart', 'Shoes', 'https://www.walmart.com/ip/Scoop-Penny-Microsuede-High-Heel-Slouch-Boot-Women-s/108657039', 'https://lovetoknow.s3-us-west-2.amazonaws.com/7ae1d62b-6143-4f49-a4f0-e68631cc8c35_1.a2fb81732e174891ff3e4146072d12ed.jpeg'),
('Faux Python Snake Top Handle Crossbody', 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Faux-Python-Snake-Top-Handle-Crossbody/337150228', 'https://lovetoknow.s3-us-west-2.amazonaws.com/f5bd8d5b-91f2-456d-99fc-1755d3461398_2.b9e5f15e4b9e370b37e951e7bba54dcc.jpeg'),
("Ultimate Wide Brim Velour Fedora", 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Ultimate-Wide-Brim-Velour-Fedora-Women-s/780981429', 'https://lovetoknow.s3-us-west-2.amazonaws.com/02bd12e7-0746-4d94-bf67-73b750e3006b_1.fb0d6eba8d19258ee42b8d4694e6db78.jpeg'),
('Wide Brim Fedora with Chain', 'Walmart', 'Accessories', 'https://www.walmart.com/ip/Scoop-Wide-Brim-Fedora-with-Chain-Women-s/101021563', 'https://lovetoknow.s3-us-west-2.amazonaws.com/22baed05-4db8-4fe9-bf2b-ba198cdfc8ae_1.18d449ed118fff7b7ecfe5b2cecc49b1.jpeg'),
('No Boundaries Juniors High Waisted Jegging', 'Walmart', 'Pants', 'https://www.walmart.com/ip/No-Boundaries-Juniors-High-Waisted-Jegging/445093680?', 'https://lovetoknow.s3-us-west-2.amazonaws.com/f1e007ce-b8ac-491a-870f-c15c0a3b2b44_1.196264e04a0328a662e91229f0a5498c.jpeg'),
('Genuine Fox Pompom Hat', 'Nordstrom', 'Accessories', 'https://shop.nordstrom.com/s/kyi-kyi-genuine-fox-pompom-hat/3610253/full','https://lovetoknow.s3-us-west-2.amazonaws.com/47e49ceb-9700-4a35-b561-12967e29de8e.jpeg'),
('Poncho', 'Abercrombie & Fitch', 'Outerwear', 'https://www.abercrombie.com/shop/us/p/poncho-31718821', 'https://lovetoknow.s3-us-west-2.amazonaws.com/KIC_154-9513-0475-418_prod1.jpg'),
('Dark Wash Distressed Skinny Jeans', 'Red Dress', 'Pants', 'https://www.reddressboutique.com/collections/jeans/products/you-could-be-famous-dark-wash-distressed-skinny-jeans', 'https://lovetoknow.s3-us-west-2.amazonaws.com/9-5-19_-_Part_II1486.jpg'),
('Gigietta Bootie', 'Nordstrom', 'Shoes', 'https://shop.nordstrom.com/s/vince-camuto-gigietta-bootie-women/5244728/full', 'https://lovetoknow.s3-us-west-2.amazonaws.com/15f64b54-d115-485f-85ec-805867078cb0.jpeg'),
('Double Coin Reversible Necklace', 'Sophiya Jewelry Co.', 'Accessories','https://www.etsy.com/listing/731736845/elizabeth-double-coin-reversible', 'https://lovetoknow.s3-us-west-2.amazonaws.com/il_1588xN.1987464238_qadb.jpg'),
('Long-Sleeve Ribbed Tee', 'Abercrombie & Fitch', 'Shirts', 'https://www.abercrombie.com/shop/us/p/long-sleeve-ribbed-tee-32820820', 'https://lovetoknow.s3-us-west-2.amazonaws.com/KIC_139-9334-0597-101_prod1.webp')


INSERT INTO posts_products
(post_id, product_id)
VALUES
(80,46),
(81,49),
(81,50),
(81,51),
(81,52),
(81,53),
(81,54),
(81, 55),
(82, 56),
(82, 57),
(82, 58),
(82, 59),
(82, 60),
(82, 61),
(83, 45),
(83, 46),
(84, 45),
(84, 47),
(85, 47),
(85, 48);
