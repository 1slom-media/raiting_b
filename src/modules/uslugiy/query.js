const GETUSLUGIY = `
    select
        u.*
    from uslugiy as u
    where case when $1 > 0 then u.id = $1 else true end
    order by u.id
`;

const POSTUSLUGIY =`
insert into
    uslugiy(
        title_uz,title_en,title_ru,description_uz,description_en,description_ru,img
    )
values
    ($1,$2,$3,$4,$5,$6,$7) returning *
`;

const PUTUSLUGIY= `
    with old_uslugiy as (
        select
            id,
            title_uz,
            title_en,
            title_ru,
            description_uz,
            description_en,
            description_ru,
            img
        from uslugiy
        where id = $1    
    ) update uslugiy as u
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
        description_uz = 
                case 
                    when length($5) > 1 then $5
                    else o.description_uz
                end,
        description_en = 
                case 
                    when length($6) > 1 then $6
                    else o.description_en
                end,
        description_ru = 
                case 
                    when length($7) > 1 then $7
                    else o.description_ru
                end,
        img = 
                case 
                    when length($8) > 1 then $8
                    else o.img
                end
    from old_uslugiy as o   
    where u.id = $1
    returning u.*                 
`;


const DELETEUSLUGIY = `
delete from uslugiy
where id=$1 returning *
`;

export{
    GETUSLUGIY,
    POSTUSLUGIY,
    PUTUSLUGIY,
    DELETEUSLUGIY
}