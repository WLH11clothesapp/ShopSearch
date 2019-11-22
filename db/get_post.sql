select p.image, p.text, u.ig_handle
from posts p
join users u on p.user_id = u.user_id 
where post_id = $1