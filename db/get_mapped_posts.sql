select * from posts_products pp
join posts po on po.post_id = pp.post_id
where pp.product_id =$1