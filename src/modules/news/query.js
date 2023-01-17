const GETNEWS = `
    select
        n.*
    from news as n
    where case when $1 > 0 then n.id = $1 else true end
    order by n.id
`;

const POSTNEWS =`
insert into
    news(
        description_uz,description_en,description_ru,data_date
    )
values
    ($1,$2,$3,$4) returning *
`;

const PUTNEWS= `
    with old_news as (
        select
            id,
            description_uz,
            description_en,
            description_ru,
            data_date
        from news
        where id = $1    
    ) update news as n
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
    from old_news as o   
    where n.id = $1
    returning n.*                 
`;


const DELETENEWS = `
delete from news
where id=$1 returning *
`;

export{
    GETNEWS,
    POSTNEWS,
    PUTNEWS,
    DELETENEWS
}