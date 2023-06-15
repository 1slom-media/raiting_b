const GETFORM = `
    select
        f.*
    from forma as f
    where case when $1 > 0 then f.id = $1 else true end
    order by f.id 
`;

const POSTFORM =`
insert into forma (name,name_organisation,phone_number,email,comment)
values ($1,$2,$3,$4,$5) returning *
`;


const PUTFORM = `
    with old_forma as (
        select
            id,
            name,
            name_organisation,
            phone_number,
            email,
            comment
        from forma
        where id = $1    
    ) update forma as f
        set
        name = 
                case 
                    when length($2) > 0 then $2
                    else o.name
                end,
        name_organisation = 
                case 
                    when length($3) > 1 then $3
                    else o.name_organisation
                end,
                phone_number = 
                case 
                    when length($4) > 1 then $4
                    else o.phone_number
                end,
                email = 
                case 
                    when length($5) > 1 then $5
                    else o.email
                end,
                comment = 
                case 
                    when length($6) > 1 then $6
                    else o.comment
                end
    from old_forma as o   
    where f.id = $1
    returning f.*                 
`;

const DELETEFORM =`
delete from forma 
where id=$1 returning * 
`;

export {
    GETFORM,
    POSTFORM,
    PUTFORM,
    DELETEFORM
}