Insert Into posts ( 
    user_id, image, text 
) values (
    ${user_id},
    ${image},
    ${text}
) Returning post_id;
