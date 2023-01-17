const GETPRESS = `
    select
        p.*
    from presscenter as p
    where case when $1 > 0 then p.id = $1 else true end
    order by p.id
`;

const POSTPRESS =`
insert into
    presscenter(
        description_uz,description_en,description_ru,data_date
    )
values
    ($1,$2,$3,$4) returning *
`;

const PUTPRESS= `
    with old_presscenter as (
        select
            id,
            description_uz,
            description_en,
            description_ru,
            data_date
        from presscenter
        where id = $1    
    ) update presscenter as p
        set
        description_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.description_uz
                end,
        description_en = 
                case 
                    when length($3) > 1 then $3
                    else o.description_en
                end,
        description_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.description_ru
                end,
        data_date = 
                case 
                    when length($5) > 1 then $5
                    else o.data_date
                end
    from old_presscenter as o   
    where p.id = $1
    returning p.*                 
`;


const DELETEPRESS = `
delete from presscenter
where id=$1 returning *
`;

export{
    GETPRESS,
    POSTPRESS,
    PUTPRESS,
    DELETEPRESS
}