const GETABOUT = `
    select
        a.*
    from about_renking as a
    where case when $1 > 0 then a.id = $1 else true end
    order by a.id
`;

const POSTABOUT =`
insert into
    about_renking(
        renking_id,raiting,kvartal,atribut,god,sum
    )
values
    ($1,$2,$3,$4,$5,$6) returning *
`;

const PUTABOUT= `
    with old_about_renking as (
        select
            id,
            renking_id,
            raiting,
            kvartal,
            atribut,
            god,
            sum
        from about_renking
        where id = $1    
    ) update about_renking as a
        set
        renking_id = 
                case 
                    when  $2 > 0 then $2
                    else o.renking_id
                end,
        raiting = 
                case 
                    when length($3) > 1 then $3
                    else o.raiting
                end,
        kvartal = 
                case 
                    when length($4) > 1 then $4
                    else o.kvartal
                end,
        atribut = 
                case 
                    when length($5) > 1 then $5
                    else o.atribut
                end,
        god = 
                case 
                    when length($6) > 1 then $6
                    else o.god
                end,
        sum = 
                case 
                    when length($7) > 1 then $7
                    else o.sum
                end
    from old_about_renking as o   
    where a.id = $1
    returning a.*                 
`;


const DELETEABOUT = `
delete from about_renking
where id=$1 returning *
`;

export{
    GETABOUT,
    POSTABOUT,
    PUTABOUT,
    DELETEABOUT
}