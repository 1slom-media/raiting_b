const GETINFARMATSIA = `
    select
        i.*
    from infarmatsia as i
    where case when $1 > 0 then i.id = $1 else true end
    order by i.id
`;

const POSTINFARMATSIA =`
insert into
    infarmatsia(
        title_uz,title_en,title_ru,pdf,size
    )
values
    ($1,$2,$3,$4,$5) returning *
`;

const PUTINFARMATSIA= `
    with old_infarmatsia as (
        select
            id,
            title_uz,
            title_en,
            title_ru,
            pdf,
            size
        from infarmatsia
        where id = $1    
    ) update infarmatsia as i
        set
        title_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.title_uz
                end,
        title_en = 
                case 
                    when length($3) > 1 then $3
                    else o.title_en
                end,
        title_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.title_ru
                end,
        pdf = 
                case 
                    when length($5) > 1 then $5
                    else o.pdf
                end,
        size = 
                case 
                    when length($6) > 1 then $6
                    else o.size
                end
    from old_infarmatsia as o   
    where i.id = $1
    returning i.*                 
`;


const DELETEINFARMATSIA= `
delete from infarmatsia
where id=$1 returning *
`;

export{
    GETINFARMATSIA,
    POSTINFARMATSIA,
    PUTINFARMATSIA,
    DELETEINFARMATSIA
}