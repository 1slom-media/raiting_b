const LOGIN = `
    select u.* from users as u where email = $1 and password = crypt($2, u.password)
`

const COMPANYNAME=`
select u.* from users as u where companyname = $1
`
const REGISTER=`
insert into users (companyname,inn,email,ogrn,kpp,country,password,repeat_password) values($1,$2,$3,$4,$5,$6,crypt($7, gen_salt('bf')),crypt($8, gen_salt('bf'))) returning *
`

const GETUSERS = `
    select
        user_id,
        companyname,
        inn,
        email,
        ogrn,
        kpp,
        country
    from users as u
    where  case when $1 > 0 then u.user_id = $1 else true end
    order by u.user_id
`;
export {
    LOGIN,
    REGISTER,
    GETUSERS,
    COMPANYNAME
}