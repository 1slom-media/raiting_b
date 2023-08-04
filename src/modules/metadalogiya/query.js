const GETMETA = `
    select
        m.*
    from metadalogia as m
    where case when $1 > 0 then m.id = $1 else true end
    order by m.id DESC
`;

const POSTMETA =`
insert into
    metadalogia(
        category_name,title_uz,title_en,title_ru,pdf,size
    )
values
    ($1,$2,$3,$4,$5,$6) returning *
`;

const PUTMETA= `
    with old_metadalogia as (
        select
            id,
            category_name,
            title_uz,
            title_en,
            title_ru,
            pdf,
            size
        from metadalogia
        where id = $1    
    ) update metadalogia as m
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
        pdf = 
                case 
                    when length($6) > 1 then $6
                    else o.pdf
                end,
        size = 
                case 
                    when length($7) > 1 then $7
                    else o.size
                end
    from old_metadalogia as o   
    where m.id = $1
    returning m.*                 
`;


const DELETEMETA= `
delete from metadalogia
where id=$1 returning *
`;

export{
    GETMETA,
    POSTMETA,
    PUTMETA,
    DELETEMETA
}