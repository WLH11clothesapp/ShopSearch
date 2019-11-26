Insert Into products (
    title,
    brand,
    category,
    url,
    img_url
) values (
    ${title},
    ${brand},
    ${category},
    ${url},
    ${img_url}
) returning product_id;