select * from posts_products pp
join products pr on pr.product_id = pp.product_id
where pp.post_id = $1