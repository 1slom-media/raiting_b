const GETRAITING = `
    select
        r.*
    from raiting as r
    where case when $1 > 0 then r.id = $1 else true end
    order by r.id DESC
`;

const POSTRAITING = `
insert into
    raiting(
        bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf,type_reting_uz,type_reting_en,prognoz_uz,prognoz_en
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *
`;

const PUTRAITING = `
    with old_raiting as (
        select
            id,
            bank_id,
            raiting,
            prognoz,
            update_date,
            sertifikat,
            type_reting,
            link,
            update_date_pdf,
            type_reting_uz,
            type_reting_en,
            prognoz_uz,
            prognoz_en
        from raiting
        where id = $1    
    ) update raiting as r
        set
        bank_id = 
                case 
                    when  $2 > 0 then $2
                    else o.bank_id
                end,
        raiting = 
                case 
                    when length($3) > 1 then $3
                    else o.raiting
                end,
        prognoz = 
                case 
                    when length($4) > 1 then $4
                    else o.prognoz
                end,
        update_date = 
                case 
                    when length($5) > 1 then $5
                    else o.update_date
                end,
        sertifikat = 
                case 
                    when length($6) > 1 then $6
                    else o.sertifikat
                end,
        type_reting = 
                case 
                    when length($7) > 1 then $7
                    else o.type_reting
                end,
                link = 
                case 
                    when length($8) > 1 then $8
                    else o.link
                end,
                update_date_pdf = 
                case 
                    when length($9) > 1 then $9
                    else o.update_date_pdf
                end,
                type_reting_uz = 
                case 
                    when length($10) > 1 then $10
                    else o.type_reting_uz
                end,
                type_reting_en = 
                case 
                    when length($11) > 1 then $11
                    else o.type_reting_en
                end,
                prognoz_uz = 
                case 
                    when length($12) > 1 then $12
                    else o.prognoz_uz
                end,
                prognoz_en = 
                case 
                    when length($13) > 1 then $13
                    else o.prognoz_en
                end
    from old_raiting as o   
    where r.id = $1
    returning r.*                 
`;

const DELETERAITING = `
delete from raiting
where id=$1 returning *
`;

export { GETRAITING, POSTRAITING, PUTRAITING, DELETERAITING };
