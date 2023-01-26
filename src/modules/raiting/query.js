const GETRAITING = `
    select
        r.*
    from raiting as r
    where case when $1 > 0 then r.id = $1 else true end
    order by r.id
`;

const POSTRAITING =`
insert into
    raiting(
        bank_id,raiting,prognoz,update_date
    )
values
    ($1,$2,$3,$4) returning *
`;

const PUTRAITING= `
    with old_raiting as (
        select
            id,
            bank_id,
            raiting,
            prognoz,
            update_date
        from raiting
        where id = $1    
    ) update raiting as r
        set
        bank_id = 
                case 
                    when length $2 > 0 then $2
                    else o.bank_id
                end,
        raiting = 
                case 
                    when length($3) > 1 then $3
                    else o.raiting
                end,
        prognoz = 
                case 
                    when length($4) > 1 then $4
                    else o.prognoz
                end,
        update_date = 
                case 
                    when length($5) > 1 then $5
                    else o.update_date
                end
    from old_raiting as o   
    where r.id = $1
    returning r.*                 
`;


const DELETERAITING = `
delete from raiting
where id=$1 returning *
`;

export{
    GETRAITING,
    POSTRAITING,
    PUTRAITING,
    DELETERAITING
}