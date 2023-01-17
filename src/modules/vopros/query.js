const GETVOPROS = `
    select
        v.*
    from vopros as v
    where case when $1 > 0 then v.id = $1 else true end
    order by v.id
`;

const POSTVOPROS =`
insert into
    vopros(
        category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru
    )
values
    ($1,$2,$3,$4,$5,$6,$7) returning *
`;

const PUTVOPROS= `
    with old_vopros as (
        select
            id,
            category_name,
            title_uz,
            title_en,
            title_ru,
            description_uz,
            description_en,
            description_ru
        from vopros
        where id = $1    
    ) update vopros as v
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
        description_uz = 
                case 
                    when length($6) > 1 then $6
                    else o.description_uz
                end,
        description_en = 
                case 
                    when length($7) > 1 then $7
                    else o.description_en
                end,
        description_ru = 
                case 
                    when length($8) > 1 then $8
                    else o.description_ru
                end
    from old_vopros as o   
    where v.id = $1
    returning v.*                 
`;


const DELETEVOPROS = `
delete from vopros
where id=$1 returning *
`;

export{
    GETVOPROS,
    POSTVOPROS,
    PUTVOPROS,
    DELETEVOPROS
}