insert into users (
    email,
    password,
    name,
    ig_handle
) values (
    ${email},
    ${password},
    ${name},
    ${ig_handle}
)
returning *;