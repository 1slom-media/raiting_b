const GETRENKING=`
    select
    r.*,
    json_agg(a.*) as about_renking
    from renkingi as r
    left join about_renking as a on a.renking_id = r.id
    where case when $1 > 0 then r.id = $1 else true end and
    case when length($2) > 1 then  a.atribut=$2 else true end and
    case when length($3) > 1 and length($4) > 1 then  a.god in ($3,$4) else true end and
    case when length($5) > 0 and length($6) > 0 then  a.kvartal in ($5,$6) else true end
    group by r.id
    order by r.id
`

const POSTRENK =`
insert into
    renkingi(
        category_name,title_uz,title_en,title_ru,data_date,inn,ogrn,kpp,country
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *
`;

const PUTRENK= `
    with old_renkingi as (
        select
            id,
            category_name,
            title_uz,
            title_en,
            title_ru,
            data_date,
            inn,
            ogrn,
            kpp,
            country
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
        data_date = 
                case 
                    when length($6) > 1 then $6
                    else o.data_date
                end,
        inn = 
                case 
                    when length($7) > 1 then $7
                    else o.inn
                end,
        ogrn = 
                case 
                    when length($8) > 1 then $8
                    else o.ogrn
                end,
        kpp = 
                case 
                    when length($9) > 1 then $9
                    else o.kpp
                end,
        country = 
                case 
                    when length($10) > 1 then $10
                    else o.country
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
    POSTRENK,
    PUTRENK,
    DELETERENK,
    GETRENKING,
}