const GETANALITIKA = `
    select
        a.*
    from analitika as a
    where (title_uz ilike concat('%', $2::varchar, '%')) or (title_ru ilike concat('%', $2::varchar, '%')) or (title_en ilike concat('%', $2::varchar, '%'))  and case when $1 > 0 then a.id = $1 else true end
    order by a.id DESC
`;

const POSTANALITIKA = `
insert into
    analitika(
        category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru,img,data_date,analitka_pdf,status
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *
`;

const PUTANALITIKA = `
    with old_analitika as (
        select
            id,
            category_name,
            title_uz,
            title_en,
            title_ru,
            description_uz,
            description_en,
            description_ru,
            img,
            data_date,
            analitka_pdf,
            status
        from analitika
        where id = $1    
    ) update analitika as a
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
                 end,
        img = 
                case 
                    when length($9) > 1 then $9
                    else o.img
                end,
        data_date = 
                case 
                    when length($10) > 1 then $10
                    else o.data_date
                end,
        analitka_pdf = 
                case 
                    when length($11) > 1 then $11
                    else o.analitka_pdf
                end,
        status = 
                case 
                    when length($12) > 1 then $12
                    else o.status
                end
    from old_analitika as o   
    where a.id = $1
    returning a.*                 
`;

const DELETEANALITIKA = `
delete from analitika
where id=$1 returning *
`;

export { GETANALITIKA, POSTANALITIKA, PUTANALITIKA, DELETEANALITIKA };
