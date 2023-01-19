const GETRENK = `
    select
        r.*
    from renkingi as r
    where case when $1 > 0 then r.id = $1 else true end
    order by r.id
`;

const POSTRENK =`
insert into
    renkingi(
        category_name,title_uz,title_en,title_ru,link,data_date
    )
values
    ($1,$2,$3,$4,$5,$6) returning *
`;

const PUTRENK= `
    with old_renkingi as (
        select
            id,
            category_name,
            title_uz,
            title_en,
            title_ru,
            link,
            data_date
        from renkingi
        where id = $1    
    ) update renkingi as r
        set
        category_name = 
                case 
                    when length($2) > 1 then $2
                    else o.category_name
                end,
        title_uz = 
                case 
                    when length($3) > 1 then $3
                    else o.title_uz
                end,
        title_en = 
                case 
                    when length($4) > 1 then $4
                    else o.title_en
                end,
        title_ru = 
                case 
                    when length($5) > 1 then $5
                    else o.title_ru
                end,
        link = 
                case 
                    when length($6) > 1 then $6
                    else o.link
                end,
        data_date = 
                case 
                    when length($7) > 1 then $7
                    else o.data_date
                end
    from old_renkingi as o   
    where r.id = $1
    returning r.*                 
`;


const DELETERENK= `
delete from renkingi
where id=$1 returning *
`;

export{
    GETRENK,
    POSTRENK,
    PUTRENK,
    DELETERENK
}